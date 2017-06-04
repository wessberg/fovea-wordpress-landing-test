import "../CodeComponent/CodeComponent";
import "../IconComponent/IconComponent";
import {Component, selector} from "../Component/Component";
import {IPrecompileExampleComponent} from "./Interface/IPrecompileExampleComponent";
import {PrecompileCodeExample} from "../../CodeExample/Precompile/Precompile";

@selector("precompile-example-element")
export class PrecompileExampleComponent extends Component implements IPrecompileExampleComponent {
	public static styles (): string {
		return `
			:host {
				text-align: center;
				width: 100%;
				max-width: 830px;
				justify-content: center;
				align-content: center;
				align-self: center;
				justify-self: center;
				position: relative;
				display: inline-flex;
				flex-direction: row;
				margin: 0;
			}
			
			icon-element {
				margin: auto;		
			}
			
			code-element {
				max-height: 150px;
				margin: auto;
				width: calc(100% - var(--width-icon-larger) - var(--distance-regular) );
			}

		`;
	}

	public static markup (): string {

		return `
			<icon-element icon="fovea-1" larger light></icon-element>
			<code-element center shadow>${PrecompileCodeExample}</code-element>
		`;
	}
}