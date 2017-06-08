import {Component, selector} from "../Component/Component";
import {IAppDrawerComponent} from "./Interface/IAppDrawerComponent";
import {animationOperations, eventUtil, waitOperations} from "../../Service/Services";
import {EventName} from "../../Static/EventName/EventName";

@selector("app-drawer-element")
export class AppDrawerComponent extends Component implements IAppDrawerComponent {
	private static readonly IN_DURATION = 225;
	private static readonly OUT_DURATION = 195;
	private static readonly IN_EASING = "cubic-bezier(0.4, 0.0, 0.2, 1)";
	private static readonly OUT_EASING = "cubic-bezier(0.4, 0.0, 0.2, 1)";

	static get observedAttributes (): string[] {
		return ["open"];
	}

	public static markup () {
		return `
			<slot></slot>
		`;
	}

	public static styles (): string {
		return `
			:host {
				position: relative;
				width: 100%;
				min-height: 100%;
				display: block;
				transform: translate3d(-200px, 0, 0);
			}
			
			::slotted(app-drawer-section-element) {
				width: 200px;
				display: block;
			}
			
			::slotted(:not(app-drawer-section-element)) {
				width: 100%;
				transform: translate3d(200px, 0, 0);
			}
		`;
	}

	protected async animateIn (): Promise<void> {
		this.style.willChange = "transform";
		await waitOperations.wait(100);
		await animationOperations.animate(this, {
			transform: ["translate3d(-200px, 0, 0)", "translate3d(0,0,0)"]
		}, {duration: AppDrawerComponent.IN_DURATION, easing: AppDrawerComponent.IN_EASING, fill: "forwards"});
		this.style.willChange = null;
	}

	protected async animateOut (): Promise<void> {
		this.style.willChange = "transform";
		await waitOperations.wait(100);
		await animationOperations.animate(this, {
			transform: ["translate3d(0, 0, 0)", "translate3d(-200px,0,0)"]
		}, {duration: AppDrawerComponent.OUT_DURATION, easing: AppDrawerComponent.OUT_EASING, fill: "forwards"});
		this.style.willChange = null;
	}

	protected async attributeChangedCallback (attrName: string, _: string, newValue: string): Promise<void> {
		switch (attrName) {
			case "open":
				newValue != null ? await this.animateIn() : await this.animateOut();
				break;
		}
	}

	protected connectedCallback (): void {
		super.connectedCallback();
		const mainElement = Array.from(this.children).find(element => element.nodeName.toLowerCase() !== "app-drawer-section-element");
		if (mainElement != null) eventUtil.listen(this, EventName.CLICK, mainElement, this.onClicked);
	}

	private onClicked (): void {
		if (this.hasAttribute("open")) this.removeAttribute("open");
	}


}