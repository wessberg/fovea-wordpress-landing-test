import {IScrollComponent, ScrollDirectionKind} from "./Interface/IScrollComponent";
import {AgentDetector} from "../../Service/AgentDetector/AgentDetector";
import {EventUtil, IEventUtil} from "@wessberg/eventutil";
import {Component, selector} from "../Component/Component";
import {IAgentDetector} from "../../Service/AgentDetector/Interface/IAgentDetector";
import {IWaitOperations} from "../../Service/WaitOperations/Interface/IWaitOperations";
import {WaitOperations} from "../../Service/WaitOperations/WaitOperations";

@selector("scroll-element")
export class ScrollComponent extends Component implements IScrollComponent {
	public role = "list";
	private static BOUND_BODY_LISTENER: boolean = false;
	private static readonly agentDetector: IAgentDetector = new AgentDetector();
	private static readonly eventUtil: IEventUtil = new EventUtil();
	private static readonly waitOperations: IWaitOperations = new WaitOperations();
	public direction: ScrollDirectionKind = ScrollDirectionKind.Y;
	protected lockedPaddingTop: number|null;
	protected lockedMarginTop: number|null;
	protected delta: number = 0;

	constructor () {
		super();

		if (ScrollComponent.agentDetector.isIOSDevice && !ScrollComponent.BOUND_BODY_LISTENER) {
			ScrollComponent.BOUND_BODY_LISTENER = true;
			ScrollComponent.eventUtil.listen(this, "touchmove", document.body, ScrollComponent.onBodyTouchMove, false);
		}
	}

	protected get _scrollHeight (): number {
		return this.scrollHeight - this.offsetHeight;
	}

	protected get movingUp (): boolean {
		return this.delta < 0;
	}

	protected get movingDown (): boolean {
		return this.delta > 0;
	}

	private get marginTop (): number {
		if (this.lockedMarginTop != null) return this.lockedMarginTop;
		const style = window.getComputedStyle(this);
		return parseInt(style.getPropertyValue("margin-top"));
	}

	private get paddingTop (): number {
		if (this.lockedPaddingTop) return this.lockedPaddingTop;
		const style = window.getComputedStyle(this);
		return parseInt(style.getPropertyValue("padding-top"));
	}

	private static onBodyTouchMove (e: TouchEvent): void {
		if (e.cancelable && !e._isScroller) {
			return e.preventDefault();
		}
	}

	public async connectedCallback (): Promise<void> {
		super.connectedCallback();
		this.listenForScrollTarget(this);
		await this.connectScroller(this);
	}

	public disconnectedCallback (): void {
		super.disconnectedCallback();
		this.unlistenForScrollTarget(this);
	}

	private async connectScroller (target: HTMLElement): Promise<void> {

		// Try to add scrollable CSS classes to the element.

		switch (this.direction) {
			case ScrollDirectionKind.Y: {
				target.style.overflowY = "scroll";
				target.style.overflowX = "hidden";
				break;
			}
			case ScrollDirectionKind.X: {
				target.style.overflowY = "hidden";
				target.style.overflowX = "scroll";
				break;
			}
			case ScrollDirectionKind.BOTH: {
				target.style.overflowY = "scroll";
				target.style.overflowX = "scroll";
				target.style.overflow = "scroll";

				break;
			}
			default: {
				throw new ReferenceError(`no ScrollDirectionKind was assigned to the ScrollComponent. Couldn't make it scrollable.`);
			}
		}

		if (ScrollComponent.agentDetector.isIOSDevice) {
			await ScrollComponent.waitOperations.wait(1000);
			this.style.webkitOverflowScrolling = "touch";
		}
	}

	private listenForScrollTarget (target: HTMLElement): void {
		if (ScrollComponent.agentDetector.isIOSDevice) {
			ScrollComponent.eventUtil.listen(this, "touchstart", target, this.onScrollTargetTouchstart);
			ScrollComponent.eventUtil.listen(this, "touchmove", target, this.onScrollTargetTouchmove);
		}
	}

	private unlistenForScrollTarget (target: HTMLElement): void {
		if (ScrollComponent.agentDetector.isIOSDevice) {
			ScrollComponent.eventUtil.unlisten(this, "touchstart", target, this.onScrollTargetTouchstart);
			ScrollComponent.eventUtil.unlisten(this, "touchmove", target, this.onScrollTargetTouchmove);
		}
	}

	private canScroll (target: EventTarget): boolean {
		if (!(target instanceof HTMLElement)) return false;
		if (target.scrollHeight === target.offsetHeight) throw new TypeError(`scrollTarget is either not visible or hasn't got a fixed height and display style property. Couldn't decide scrollability`);
		return target.scrollHeight > target.offsetHeight;
	}

	private fixScrollBounds (target: EventTarget): void {
		if (!(target instanceof HTMLElement)) return;
		const {scrollTop} = target;
		if (scrollTop === 0) target.scrollTop = 1;
		else if (scrollTop + target.offsetHeight === target.scrollHeight) {
			target.scrollTop = scrollTop - 1;
		}
	}

	private onScrollTargetTouchstart (e: TouchEvent): void {
		this.fixScrollBounds(e.currentTarget);
	}

	private onScrollTargetTouchmove (e: TouchEvent): void {
		if (this.canScroll(e.currentTarget)) e._isScroller = true;
	}
}