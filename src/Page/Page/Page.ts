import {IPage} from "./Interface/IPage";
import {ScrollComponent} from "../../Component/ScrollComponent/ScrollComponent";
import {selector} from "../../Component/Component/Component";

@selector("page-element")
export class Page extends ScrollComponent implements IPage {
	public static routeName = new RegExp("");
	private static didFirstPageRender: boolean = false;
	public role = "main";
	protected inDuration: number = 200;
	protected outDuration: number = this.inDuration;

	static get observedAttributes () {
		return ["visible"];
	}

	public static testRoute (path: string): boolean {
		if (`${this.routeName }` === "/\\//") return path === "/" || path === "";
		return this.routeName.test(path);
	}

	public static styles (): string {
		return super.styles() + `
			:host {
				display: none;
				contain: strict;
				height: calc(100vh - var(--app-bar-portrait-height-desktop));
				top: var(--app-bar-portrait-height-desktop);
				margin-bottom: var(--app-bar-portrait-height-desktop);
				position: absolute;
			}
		`;
	}

	public async didBecomeVisible (): Promise<void> {
		this.setAttribute("visible", "");
	}

	public async didBecomeInvisible (): Promise<void> {
		if (this.hasAttribute("visible")) this.removeAttribute("visible");
	}

	public async animateIn (): Promise<void> {
		this.style.display = "block";
		if (!Page.didFirstPageRender) {
			Page.didFirstPageRender = true;
			return;
		}
	}

	public async animateOut (): Promise<void> {
		this.style.display = "none";
	}

	protected async attributeChangedCallback (attrName: string, _: string, newValue: string): Promise<void> {
		switch (attrName) {
			case "visible":
				newValue == null ? await this.animateOut() : await this.animateIn();
				break;
		}
	}

}