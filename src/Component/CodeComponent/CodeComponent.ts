import {Component, selector} from "../Component/Component";
import {ICodeComponent} from "./Interface/ICodeComponent";
import "../ScrollComponent/ScrollComponent";

@selector("code-element")
export class CodeComponent extends Component implements ICodeComponent {
	public role = "figure";

	public static styles (): string {
		return `
			:host-context([center]),
			:host([center]) {
				margin-left: auto;
				margin-right: auto;
				text-align: center;
			}
			
			:host([shadow]) {
				box-shadow: var(--shadow-level4);
			}

			:host {
				background: var(--color-dark-hex);
				border-radius: var(--box-radius);
				margin: 0;
				padding: var(--distance-minimum);
				width: auto;
				position: relative;
				display: flex;
				contain: content;
				flex-direction: column;
				text-align: left;
			}
			
			:host,
			scroll-element,
			::slotted(*) {
				user-select: text !important;
				cursor: text !important;
			}
			
			::slotted(*) {
				font-family: var(--font-family-monospace) !important;
				color: var(--color-white-87);
				font-size: var(--font-size-mono);
				line-height: var(--font-size-mono);
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
			
			::slotted(.tagname) {
				color: var(--color-syntax-tagname);
			}
			
			::slotted(.string) {
				color: var(--color-syntax-string);
			}
			
			::slotted(.attribute_name) {
				color: var(--color-syntax-attribute-name);
			}
			
			::slotted(.attribute_value) {
				color: var(--color-syntax-attribute-value);
			}
			
			::slotted(.css_selector_name) {
				color: var(--color-syntax-css-selector-name);
			}
			
			::slotted(.css_property_name) {
				color: var(--color-syntax-css-property-name);
			}
			
			::slotted(.variable) {
				color: var(--color-syntax-variable);
			}
			
			::slotted(.number) {
				color: var(--color-syntax-number);
			}
			
			::slotted(.comment) {
				color: var(--color-syntax-comment);
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