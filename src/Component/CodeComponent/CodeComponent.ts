import {Component, selector} from "../Component/Component";
import {ICodeComponent} from "./Interface/ICodeComponent";

@selector("code-element")
export class CodeComponent extends Component implements ICodeComponent {

	public static styles (): string {
		return `
			:host-context([center]),
			:host([center]) {
				margin-left: auto;
				margin-right: auto;
			}

			:host {
				background: var(--color-dark-hex);
				border-radius: var(--box-radius);
				margin: var(--distance-minimum);
				padding: var(--distance-minimum);
				width: auto;
				position: relative;
				display: flex;
				flex-direction: column;
			}
			
			::slotted(*) {
				font-family: var(--font-family-monospace) !important;
				color: var(--color-white-87);
				user-select: text !important;
			}
		`;
	}

	public static markup (): string {
		return `
			<slot></slot>
		`;
	}

}