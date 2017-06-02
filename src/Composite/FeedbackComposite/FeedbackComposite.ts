

import {Component, selector} from "../../Component/Component/Component";
import {ICoordinates, IFeedbackComposite} from "./Interface/IFeedbackComposite";
import {IWaitOperations} from "../../Service/WaitOperations/Interface/IWaitOperations";
import {WaitOperations} from "../../Service/WaitOperations/WaitOperations";
import {IEventUtil, EventUtil} from "@wessberg/eventutil";
import {IAnimationOperations} from "../../Service/AnimationOperations/Interface/IAnimationOperations";
import {AnimationOperations} from "../../Service/AnimationOperations/AnimationOperations";

@selector("feedback-composite")
export class FeedbackComposite extends Component implements IFeedbackComposite {
	public pointerDown: boolean = false;
	public complexAnimating: boolean = false;
	public oneShotAnimating: boolean = false;
	target: HTMLElement;
	initialWaitTime: number = 0.2;
	oneShotAnimationDuration: number = 0.5;
	lastCoordinates: ICoordinates | null = null;
	protected static readonly waitOperations: IWaitOperations = new WaitOperations();
	protected static readonly eventUtil: IEventUtil = new EventUtil();
	protected static readonly animationOperations: IAnimationOperations = new AnimationOperations();

	static get observedAttributes () {
		return ["pointer-down"];
	}

	public listenForTarget (target: Element): void {
		FeedbackComposite.eventUtil.listen(this, "click", target, this.onPointerTap);
		FeedbackComposite.eventUtil.listen(this, "pointerdown", target, this.onPointerDown);
		FeedbackComposite.eventUtil.listen(this, "pointerup", target, this.onPointerUp);
		FeedbackComposite.eventUtil.listen(this, "pointercancel", target, this.onPointerCancel);
		FeedbackComposite.eventUtil.listen(this, "pointerleave", target, this.onPointerLeave);
	}

	public unlistenFromTarget (target: Element): void {
		FeedbackComposite.eventUtil.unlisten(this, "click", target, this.onPointerTap);
		FeedbackComposite.eventUtil.unlisten(this, "pointerdown", target, this.onPointerDown);
		FeedbackComposite.eventUtil.unlisten(this, "pointerup", target, this.onPointerUp);
		FeedbackComposite.eventUtil.unlisten(this, "pointercancel", target, this.onPointerCancel);
		FeedbackComposite.eventUtil.unlisten(this, "pointerleave", target, this.onPointerLeave);
	}

	private async onPointerDownChanged (pointerDown: boolean): Promise<void> {
		if (pointerDown) {
			await FeedbackComposite.waitOperations.wait(this.initialWaitTime * 1000);
			if (this.pointerDown && !this.oneShotAnimating) {
				this.complexAnimating = true;
				this.setAttribute("complex-animating", "");
			}
		}
	}

	public async onPointerDown ({offsetX, offsetY, width, height}: PointerEvent): Promise<void> {
		if (width === -1 && height === -1) this.lastCoordinates = null;
		else this.lastCoordinates = {offsetX, offsetY};
		if (!this.pointerDown) {
			this.pointerDown = true;
			this.setAttribute("pointer-down", "");
		}
	}

	public async onPointerUp (): Promise<void> {
		if (this.pointerDown) {
			this.pointerDown = false;
			if (this.hasAttribute("pointer-down")) this.removeAttribute("pointer-down");
		}
	}

	public async onPointerCancel (): Promise<void> {
		await this.onPointerUp();
	}

	public async onPointerLeave (): Promise<void> {
		await this.onPointerUp();
	}

	public async onPointerTap (): Promise<void> {
		if (this.complexAnimating) return;
		if (!this.oneShotAnimating) {
			this.oneShotAnimating = true;
			this.setAttribute("one-shot-animating", "");
		}
		// Force-notifying the same prop again. Multiple animations might be acceptable to happen simultaneously.
		else await this.attributeChangedCallback("one-shot-animating", "true", "true");
	}

	protected connectedCallback (): void {
		super.connectedCallback();
		const parent = this.getRootNode().host;
		if (this.target == null && parent != null) {
			this.target = <HTMLElement>parent;
			this.listenForTarget(this.target);
		}
	}

	protected async attributeChangedCallback (attrName: string, _: string, _1: string): Promise<void> {
		switch (attrName) {
			case "pointer-down":
				return await this.onPointerDownChanged(this.pointerDown);
		}

	}
}