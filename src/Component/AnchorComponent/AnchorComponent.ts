import {Component, selector} from "../Component/Component";
import {IAnchorComponent} from "./Interface/IAnchorComponent";
import {navigationUtil} from "../../Service/Services";

@selector("anchor-element")
export class AnchorComponent extends Component implements IAnchorComponent {
	public role = "link";
	public tabindex = "0";

	private get opensInNewWindow (): boolean {
		const attrValue = this.getAttribute("target");
		return attrValue === "_blank";
	}

	public static styles (): string {
		return `
			:host {
				color: var(--color-primary-100);
				font-size: var(--font-size-body);
    		line-height: var(--line-height-body);
    		font-weight: var(--font-weight-body);
			}
			
			:host, a {
				cursor: pointer;
			}

			a {
    		text-decoration: none;
    		font-family: var(--font-family), sans-serif;
    		user-select: none;
    		text-rendering: var(--font-rendering);
    		margin: 0;
    		font-size: inherit;
    		line-height: inherit;
    		font-weight: inherit;
    		color: inherit;
    		transition: color var(--duration-short) var(--easing-standard-curve);
			}
			
			:host:hover, :host:focus {
				var(--color-primary-120);
			}
			
			a:hover, a:focus {
    		color: inherit;
			}
		`;
	}

	public static markup (): string {
		return `
			<a><slot></slot></a>
		`;
	}

	connectedCallback () {
		super.connectedCallback();
		const element = this.element("a");
		const href = this.getAttribute("href");
		const target = this.getAttribute("target");
		if (href != null) element.setAttribute("href", href);
		element.setAttribute("target", target == null ? "_self" : target);
		this.listenForClicks();
	}

	private onClicked (e: MouseEvent): void {
		if (this.opensInNewWindow) return;

		e.preventDefault();
		e.stopPropagation();

		const href = this.getAttribute("href");
		if (href != null) navigationUtil.navigate(href);
	}

	private listenForClicks (): void {
		this.element("a").addEventListener("click", e => this.onClicked(e));
	}

}