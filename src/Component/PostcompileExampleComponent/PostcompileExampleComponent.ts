import "../CodeComponent/CodeComponent";
import "../IconComponent/IconComponent";
import {Component, selector} from "../Component/Component";
import {IPostcompileExampleComponent} from "./Interface/IPostcompileExampleComponent";
import {PostCompileCodeExample} from "../../CodeExample/Postcompile/Postcompile";

@selector("postcompile-example-element")
export class PostcompileExampleComponent extends Component implements IPostcompileExampleComponent {
	public static styles (): string {
		return `
			:host {
				text-align: center;
				width: 100%;
				max-width: var(--width-frame-max);
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
			<icon-element icon="fovea-2" larger light></icon-element>
			<code-element center shadow>${PostCompileCodeExample}</code-element>
		`;
	}
}