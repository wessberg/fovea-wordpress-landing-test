import {Component, selector} from "../Component/Component";
import {IAppBarComponent} from "./Interface/IAppBarComponent";

@selector("app-bar-element")
export class AppBarComponent extends Component implements IAppBarComponent {
	public role = "navigation";

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
				display: block;
				top: 0;
				left: 0;
				right: 0;
				width: 100%;
				margin: 0;
				padding: 0;
				height: var(--app-bar-portrait-height-desktop);
				box-shadow: var(--shadow-level1);
				z-index: 998;
			}
			
			#menuItems {
				position: relative;
				display: flex;
				padding: 0 10px;
				margin: auto 0;
				height: 100%;
				flex-direction: row;
				align-content: center;
				justify-content: center;
				width: 100%;
			}
			
			#titleSlot::slotted(*) {
				user-select: none !important;
				font-size: var(--font-size-title) !important;
			}
			
			::slotted(*) {
				margin: auto 0 !important;
				color: var(--color-primary-text-light) !important;
				vertical-align: middle;
				line-height: 0 !important;
			}
			
			#menuItemSlot::slotted(*) {
				order: 3;
			}
			
			#titleSlot::slotted(*) {
				order: 1;
				display: none;
			}
	
			#leftIconSlot::slotted(*) {
				order: 0;
			}
			
			#rightIconSlot::slotted(*) {
				order: 4;
			}
			
			.flexer {
				flex-grow: 1;
				order: 2;
			}

			@media screen and (min-width: 440px) {
				#titleSlot::slotted(*) {
					order: 1;
					display: block;
				}
			}
		`;
	}

	public static markup (): string {
		return `
			
			<section id="menuItems">
				<slot id="leftIconSlot" class="iconSlot" name="leftIcon"></slot>
				<slot id="titleSlot" name="title"></slot>
				<div class="flexer"></div>
				<slot id="menuItemSlot" name="menuItem"></slot>
				<slot id="rightIconSlot" class="iconSlot" name="rightIcon"></slot>
			</section>
		`;
	}
}