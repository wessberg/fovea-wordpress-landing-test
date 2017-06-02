import {IPage} from "./Interface/IPage";
import {ScrollComponent} from "../../Component/ScrollComponent/ScrollComponent";
import {selector} from "../../Component/Component/Component";

@selector("page-element")
export class Page extends ScrollComponent implements IPage {
	public role = "main";

	public static styles (): string {
		return super.styles() + `
			:host {
				height: calc(100vh - var(--app-bar-portrait-height-desktop));
				margin-top: var(--app-bar-portrait-height-desktop);
			}
		`;
	}
}