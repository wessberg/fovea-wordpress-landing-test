import "../../Component/HighlightsComponent/HighlightsComponent";
import "../../Component/HomeHeroComponent/HomeHeroComponent";

import {Page} from "../Page/Page";
import {IHomePage} from "./Interface/IHomePage";
import {selector} from "../../Component/Component/Component";

@selector("home-page-element")
export class HomePage extends Page implements IHomePage {

	public static markup (): string {
		return `
			<home-hero-element></home-hero-element>
			<highlights-element></highlights-element>
		`;
	}

	public static styles () {
		return super.styles() + `
			highlights-element {
				position: absolute;
				top: calc(var(--height-hero) - 40px);
			}
		`;
	}

}