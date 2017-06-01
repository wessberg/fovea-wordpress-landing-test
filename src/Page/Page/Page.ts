import {IPage} from "./Interface/IPage";
import {ScrollComponent} from "../../component/ScrollComponent/ScrollComponent";

export class Page extends ScrollComponent implements IPage {
	public static styles (): string {
		return `
			:host {
				transform: translate3d(0,0,0);
				backface-visibility: hidden;
				box-sizing: border-box;
				contain: content;
				position: relative;
				display: block;
				width: 100%;
				height: calc(100vh - var(--app-bar-portrait-height-desktop));
				margin-top: var(--app-bar-portrait-height-desktop);
			}
		`;
	}
}

Page.define("page-element");