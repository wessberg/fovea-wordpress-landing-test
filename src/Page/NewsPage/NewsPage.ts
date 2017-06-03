import "../../Component/FoveaFooterComponent/FoveaFooterComponent";
import "../../Component/MaterialTrianglesComponent/MaterialTrianglesComponent";

import {Page} from "../Page/Page";
import {selector} from "../../Component/Component/Component";
import {INewsPage} from "./Interface/INewsPage";

@selector("news-page-element")
export class NewsPage extends Page implements INewsPage {
	public static routeName = /\/news/;

	public static markup (): string {
		return `
			<h4>News</h4>
			<section id="bottom">
				<material-triangles-element accent></material-triangles-element>
				<fovea-footer-element></fovea-footer-element>
			</section>
		`;
	}

	public static styles () {
		return super.styles() + `
			
			material-triangles-element {
				top: auto;
				bottom: 0;
			}
			
			#bottom {
				position: relative;
			}
		`;
	}

}