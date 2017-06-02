import {Component, selector} from "../Component/Component";
import {ICodeComponent} from "./Interface/ICodeComponent";
import "../ScrollComponent/ScrollComponent";

@selector("code-element")
export class CodeComponent extends Component implements ICodeComponent {
	public static styles (): string {
		return `
			:host-context([center]),
			:host([center]) {
				margin-left: auto;
				margin-right: auto;
				text-align: center;
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
				text-align: left;
			}
			
			::slotted(*) {
				font-family: var(--font-family-monospace) !important;
				color: var(--color-white-87);
				user-select: text !important;
				font-size: var(--font-size-caption) !important;
				display: inline;
			}
			
			::slotted(.keyword) {
				color: var(--color-syntax-keyword);
			}
			
			::slotted(.identifier) {
				color: var(--color-syntax-identifier);
			}
			
			::slotted(.bracket) {
				color: var(--color-syntax-bracket);
			}
			
			::slotted(.decorator) {
				color: var(--color-syntax-decorator);
			}
			
			::slotted(.property) {
				color: var(--color-syntax-property);
			}
			
			::slotted(.token) {
				color: var(--color-syntax-token);
			}
			
			::slotted(.type) {
				color: var(--color-syntax-type);
			}
			
			::slotted(.method) {
				color: var(--color-syntax-method);
			}
			
			::slotted(.function) {
				color: var(--color-syntax-function);
			}
			
			@media screen and (min-width: 400px) {
				::slotted(*) {
					font-size: inherit !important;
				}
			}
		`;
	}

	public static markup (): string {
		return `
			<scroll-element direction="both">
				<slot></slot>
			</scroll-element>
		`;
	}
}