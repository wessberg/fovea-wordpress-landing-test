import {Component, selector} from "../Component/Component";
import {IFoveaRollupWebpackComponent} from "./Interface/IFoveaRollupWebpackComponent";
import "../IconComponent/IconComponent";

@selector("fovea-rollup-webpack-element")
export class FoveaRollupWebpackComponent extends Component implements IFoveaRollupWebpackComponent {

	public static styles (): string {
		return `
			:host {
				display: flex;
				align-content: center;
				justify-content: center;
				flex-direction: row;
				height: var(--height-icon-larger);
			}
			
			h3 {
				margin: 0;
				line-height: 1.2;
				padding: 0 10px;
			}
		`;
	}

	public static markup (): string {
		return `
			<icon-element id="fovea" icon="fovea-logo" larger primary></icon-element>
			<h3>+</h3>
			<icon-element id="rollup" icon="rollup-logo" larger></icon-element>
			<icon-element id="webpack" icon="webpack-logo" larger></icon-element>
			<h3>=</h3>
			<icon-element id="heart" icon="heart-fill" larger warning></icon-element>
		`;
	}
}