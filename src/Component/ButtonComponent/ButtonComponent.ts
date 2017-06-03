import {Component, selector} from "../Component/Component";
import {IButtonComponent} from "./Interface/IButtonComponent";
import "../../Composite/RippleComposite/RippleComposite";
import "../../Composite/FocusableComposite/FocusableComposite";

@selector("button-element")
export class ButtonComponent extends Component implements IButtonComponent {
	public tabindex = "0";
	public role = "button";

	public static markup (): string {
		return `
			<slot></slot>
			<ripple-composite class="ripple" light></ripple-composite>
			<focusable-composite></focusable-composite>
		`;
	}

	public static styles (): string {
		return `

		:host-context([center]),
		:host([center]) {
			align-self: center;
			justify-self: center;
		}
		
		:host-context([round]),
		:host([round]) {
			border-radius: 50%;
		}

		:host {
			user-select: none;
			backface-visibility: hidden;
			transform: translate3d(0,0,0);
			box-sizing: border-box;
			contain: content;
			overflow: hidden;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			flex-direction: row;
			position: relative;
			min-height: 46px;
			min-width: 46px;
			width: 200px;
			height: 46px;
			cursor: pointer !important;
			padding: 14px;
			border-radius: var(--box-radius);
			flex-shrink: 0;
			transition: background var(--duration-medium) var(--easing-standard-curve);
			color: var(--color-primary-100) !important;
			font-size: var(--font-size-button) !important;
			line-height: var(--font-size-button) !important;
			font-weight: var(--font-weight-button) !important;
		}
		
		:host-context([large-text]),
		:host([large-text]) {
			font-size: var(--font-size-title) !important;
		}
		
		:host-context([keep-case]) ::slotted(*),
		:host([keep-case]) ::slotted(*) {
			text-transform: none;
		}
		
		::slotted(*) {
			color: inherit !important;
			font-size: inherit !important;
			line-height: inherit !important;
			font-weight: inherit !important;
			pointer-events: none;
			cursor: pointer !important;
			text-transform: uppercase;
		}
		
		::slotted(icon-element) {
			fill: var(--color-icon-dark);
		}
		
		.ripple {
			color: var(--color-primary-100);
		}
		
		:host(:not([no-background])[primary]) {
			background: var(--color-primary-100);
		}
		
		:host([primary]) .ripple {
			color: var(--color-white-70);
		}
		
		:host(:not([no-background])[primary]:hover) {
			background: var(--color-primary-120) !important;
		}
		
		:host([primary]) ::slotted(*) {
			color: var(--color-primary-text-light) !important;
		}
		
		:host([primary]) ::slotted(icon-element) {
			fill: var(--color-icon-light) !important;
		}
			
		:host(:not([no-background])[accent]) {
			background: var(--color-accent-100);
		}
		
		:host([accent]) .ripple {
			color: var(--color-white-70);
		}
		
		:host(:not([no-background])[accent]:hover) {
			background: var(--color-accent-120);
		}
		
		:host([accent]) ::slotted(*) {
			color: var(--color-primary-text-light) !important;
		}
		
		:host([accent]) ::slotted(icon-element) {
			fill: var(--color-icon-light) !important;
		}
			
		:host(:not([no-background])[dark]) {
			background: var(--color-black-70);
		}
		
		:host([dark]) .ripple {
			color: var(--color-white-70);
		}
		
		:host(:not([no-background])[dark]:hover) {
			background: var(--color-black-87);
		}
		
		:host([dark]) ::slotted(*) {
			color: var(--color-primary-text-light) !important;
		}
		
		:host([dark]) ::slotted(icon-element) {
			fill: var(--color-icon-light) !important;
		}
			
		:host(:not([no-background])[light]) {
			background: var(--color-white-100);
		}
		
		:host([light]) .ripple {
			color: var(--color-icon-dark);
		}
		
		:host(:not([no-background])[light]:hover) {
			background: var(--color-white-87);
		}
		
		:host([light]) ::slotted(*) {
			color: var(--color-primary-text-dark) !important;
		}
		
		:host([light]) ::slotted(icon-element) {
			fill: var(--color-icon-dark) !important;
		}
		
		:host(:not([no-background])[warning]) {
			background: var(--color-red-100);
		}
		
		:host(:not([no-background])[warning]:hover) {
			background: var(--color-red-120);
		}
		
		:host([warning]) .ripple {
			color: var(--color-white-70);
		}
		
		:host([warning]) ::slotted(*) {
			color: var(--color-primary-text-light) !important;
		}
		
		:host([warning]) ::slotted(icon-element) {
			fill: var(--color-icon-light) !important;
		}
		
		:host([shadow]) {
			box-shadow: var(--shadow-level1);
		}
		
		:host([shadow]:hover) {
			box-shadow: var(--shadow-level3);
		}
		
		:host(:not([no-background]):hover) {
			background: var(--color-black-06);
		}

		:host[disabled] {
			pointer-events: none;
			opacity: .6;
		}
		`;
	}
}