import "../../Component/FoveaFooterComponent/FoveaFooterComponent";
import "../../Component/MaterialTrianglesComponent/MaterialTrianglesComponent";

import {Page} from "../Page/Page";
import {selector} from "../../Component/Component/Component";
import {ILearnPage} from "./Interface/ILearnPage";

@selector("learn-page-element")
export class LearnPage extends Page implements ILearnPage {
	public static routeName = /\/learn/;

	public static markup (): string {
		return `
			<h4>Learn</h4>
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