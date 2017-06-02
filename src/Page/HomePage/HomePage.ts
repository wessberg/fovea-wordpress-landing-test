import "../../Component/HighlightsComponent/HighlightsComponent";
import "../../Component/HomeHeroComponent/HomeHeroComponent";
import "../../Component/SummaryComponent/SummaryComponent";
import "../../Component/ToolsComponent/ToolsComponent";

import {Page} from "../Page/Page";
import {IHomePage} from "./Interface/IHomePage";
import {selector} from "../../Component/Component/Component";

@selector("home-page-element")
export class HomePage extends Page implements IHomePage {

	public static markup (): string {
		return `
			<home-hero-element></home-hero-element>
			<highlights-element></highlights-element>
			<summary-element></summary-element>
			<tools-element></tools-element>
		`;
	}

	public static styles () {
		return super.styles() + `
			highlights-element {
				transform: translate3d(0, -40px, 0);
			}
			
			#highlights-spacer {
				display: block;
				position: relative;
				border: 1px solid red;
				width: 100%;
				height: 200px;
			}
		`;
	}

}