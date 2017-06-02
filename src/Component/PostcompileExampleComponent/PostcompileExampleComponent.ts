import {Component, selector} from "../Component/Component";
import {IPostcompileExampleComponent} from "./Interface/IPostcompileExampleComponent";
import "../PostcompileCodeExampleComponent/PostcompileCodeExampleComponent";
import "../IconComponent/IconComponent";

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
			
			postcompile-code-example-element {
				max-height: 150px;
				margin: auto;
				max-width: calc(100% - var(--width-icon-larger) );
			}

		`;
	}

	public static markup (): string {

		return `
			<icon-element icon="fovea-2" larger light></icon-element>
			<postcompile-code-example-element center></postcompile-code-example-element>
		`;
	}
}