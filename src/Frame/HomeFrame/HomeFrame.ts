import "../../Component/AppBarComponent/AppBarComponent";
import "../../Page/HomePage/HomePage";
import "../../Component/IconComponent/IconComponent";
import {Frame} from "../Frame/Frame";
import {IHomeFrame} from "./Interface/IHomeFrame";
import {selector} from "../../Component/Component/Component";

@selector("home-frame-element")
export class HomeFrame extends Frame implements IHomeFrame {
	public static markup (): string {
		return `
			<app-bar-element primary>
				<icon-element icon="fovea-logo" slot="leftIcon" light medium></icon-element>
				<h6 id="title" slot="title">Fovea</h6>
			</app-bar-element>
			<home-page-element></home-page-element>
		`;
	}

	public static styles (): string {
		return `
			#title {
				color: var(--color-primary-text-light);
			}
		`;
	}
}