import "../../Component/IconComponent/IconComponent";
import "../AppBarComponent/AppBarComponent";
import {Component, selector} from "../Component/Component";
import {IFoveaAppBarComponent} from "./Interface/IFoveaAppBarComponent";

@selector("fovea-app-bar-element")
export class FoveaAppBarComponent extends Component implements IFoveaAppBarComponent {

	public static styles (): string {
		return `
			#title {
				color: var(--color-primary-text-light);
			}
		`;
	}

	public static markup (): string {
		return `
			<app-bar-element primary>
				<icon-element icon="fovea-logo" slot="leftIcon" light medium></icon-element>
				<h6 id="title" slot="title">Fovea</h6>
			</app-bar-element>
		`;
	}

}