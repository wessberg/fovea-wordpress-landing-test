import {Component, selector} from "../../Component/Component/Component";
import {IComposite} from "../Composite/Interface/IComposite";
import {IEventUtil, EventUtil} from "@wessberg/eventutil";
import {KeyboardButtonKind} from "../../Service/KeyboardOperations/KeyboardButtonKind";

@selector("focusable-composite")
export class FocusableComposite extends Component implements IComposite {
	private static readonly POINTER_INITIATED_DELAY = 1000;
	private static eventUtil: IEventUtil = new EventUtil();
	public target: HTMLElement;
	public actionTarget: HTMLElement|null;
	private lastFiredPointerDownEvent: PointerEvent|null;
	private timeout: NodeJS.Timer|null;
	private pointerInitiated: boolean = false;

	public styles () {
		return `
			:host {
				display: none;
			}
		`;
	}

	public listenForTarget (target: Element): void {
		FocusableComposite.eventUtil.listen(this, "pointerdown", target, this.onTargetPointerDown);
		FocusableComposite.eventUtil.listen(this, "keydown", target, this.onTargetKeyDown, false);
		FocusableComposite.eventUtil.listen(this, "focus", target, this.onTargetGotFocus);
		FocusableComposite.eventUtil.listen(this, "blur", target, this.onTargetLostFocus);
	}

	public unlistenFromTarget (target: Element): void {
		FocusableComposite.eventUtil.unlisten(this, "pointerdown", target, this.onTargetPointerDown);
		FocusableComposite.eventUtil.unlisten(this, "keydown", target, this.onTargetKeyDown);
		FocusableComposite.eventUtil.unlisten(this, "focus", target, this.onTargetGotFocus);
		FocusableComposite.eventUtil.unlisten(this, "blur", target, this.onTargetLostFocus);
	}

	protected connectedCallback (): void {
		super.connectedCallback();
		const parent = this.getRootNode().host;
		// Force the parent node as target if it hasn't been set yet.
		if (this.target == null && parent != null) {
			this.target = <HTMLElement>parent;
			if (this.actionTarget == null) this.actionTarget = this.target;
			this.listenForTarget(this.target);
		}
	}

	private onTargetKeyDown (e: KeyboardEvent): void {
		switch (e.keyCode) {
			case KeyboardButtonKind.SPACEBAR:
				e.preventDefault();
				this.fireClickEventOnActionTarget();
		}
	}

	private async onTargetPointerDown (e: PointerEvent): Promise<void> {
		if (e === this.lastFiredPointerDownEvent) return;
		this.pointerInitiated = true;

		if (this.timeout != null) {
			clearTimeout(this.timeout);
			this.timeout = null;
		}

		this.timeout = setTimeout(() => {
			this.pointerInitiated = false;
			this.timeout = null;
		}, FocusableComposite.POINTER_INITIATED_DELAY);
	}

	private fireClickEventOnActionTarget (): void {
		console.log(this.target, this.actionTarget);
		if (this.target == null || this.actionTarget == null) return;
		this.target.focus();
		const event = new MouseEvent("click");
		this.actionTarget.dispatchEvent(event);
	}

	private firePointerDownEventOnTarget (): void {
		if (this.target == null) return;
		const event = new PointerEvent("pointerdown", {width: -1, height: -1});
		this.lastFiredPointerDownEvent = event;
		this.target.dispatchEvent(event);
		this.target.focus();
	}

	private firePointerUpEventOnTarget (): void {
		if (this.target == null) return;
		const event = new PointerEvent("pointerup");
		this.target.dispatchEvent(event);
		this.target.blur();
	}

	private async onTargetGotFocus (): Promise<void> {
		if (!this.pointerInitiated) this.firePointerDownEventOnTarget();
	}

	private async onTargetLostFocus (): Promise<void> {
		this.firePointerUpEventOnTarget();
	}
}