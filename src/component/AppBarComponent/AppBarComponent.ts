import {Component} from "../Component/Component";
import {IAppBarComponent} from "./Interface/IAppBarComponent";

export class AppBarComponent extends Component implements IAppBarComponent {

	public static styles (): string {
		return `
			
			:host([primary]) {
				background: var(--color-primary-100);
			}
			
			:host([accent]) {
				background: var(--color-accent-100);
			}
			
			:host([dark]) {
				background: var(--color-black-70);
			}
			
			:host([light]) {
				background: var(--color-white-87);
			}

			:host {
				box-sizing: border-box;
				position: fixed;
				top: 0;
				left: 0;
				right: 0;
				width: 100%;
				height: var(--app-bar-portrait-height-desktop);
				box-shadow: var(--shadow-level1);
				z-index: 998;
			}
	
			#titleSlot::slotted(*),
			#leftIconSlot::slotted(*) {
				position: absolute;
				top: 0 !important;
				bottom: 0 !important;
				margin-top: auto !important;
				margin-bottom: auto !important;
			}
			
			#titleSlot::slotted(*) {
				user-select: none !important;
				left: calc(var(--distance-minimum) + var(--width-icon-medium) + var(--distance-minimum)) !important;
				height: var(--font-size-title) !important;
				line-height: 17px !important;
				vertical-align: middle !important;
				padding: 0 !important;
			}
	
			#leftIconSlot::slotted(*) {
				left: var(--distance-minimum) !important;
				border-radius: 50% !important;
			}
		`;
	}

	public static markup (): string {
		return `
			<slot id="leftIconSlot" name="leftIcon"></slot>
			<slot id="titleSlot" name="title"></slot>
		`;
	}
}

AppBarComponent.define("app-bar-element");