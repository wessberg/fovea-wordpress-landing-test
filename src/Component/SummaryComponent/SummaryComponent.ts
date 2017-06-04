import {ISummaryComponent} from "./Interface/ISummaryComponent";
import {Component, selector} from "../Component/Component";
import "../DataBindingExampleComponent/DataBindingExampleComponent";
import "../PrecompileExampleComponent/PrecompileExampleComponent";
import "../PostcompileExampleComponent/PostcompileExampleComponent";
import "../ToolsComponent/ToolsComponent";

@selector("summary-element")
export class SummaryComponent extends Component implements ISummaryComponent {
	public role = "complementary";

	public static styles (): string {
		return `
			:host {
				background: var(--color-primary-100);
				text-align: center;
				width: 100%;
				justify-content: center;
				align-content: center;
				position: relative;
				display: inline-flex;
				flex-direction: column;
				margin: 0;
				padding: var(--distance-minimum) var(--distance-minimum) 100px var(--distance-minimum);
			}
			
			h4, h5 {
				padding-top: var(--distance-regular);
				color: var(--color-primary-text-light);
				user-select: text;
			}
			
			
		`;
	}

	public static markup (): string {

		return `
			<h4>Summary</h4>
			<data-binding-example-element></data-binding-example-element>
			<h5>Fovea takes this:</h5>
			<precompile-example-element></precompile-example-element>
			<h5>And compiles it into this:</h5>
			<postcompile-example-element></postcompile-example-element>
		`;
	}

}