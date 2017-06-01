import {ICardComponent} from "./ICardComponent";
import {Component} from "../Component/Component";

export class CardComponent extends Component implements ICardComponent {

	public static styles (): string {
		return `

		:host([center]) {
			align-content: center;
			justify-content: center;
		}
		
		:host([center]) ::slotted(*) {
			text-align: center !important;
		}
		
		:host {
			max-width: 369px;
			min-width: 200px;
			margin: var(--distance-minimum);
			padding: var(--distance-regular);
			width: auto;
			position: relative;
			display: flex;
			flex-direction: column;
			background: var(--color-white-100);
			box-shadow: var(--shadow-level4);
			contain: content;
		}
		
		:host([shadow="1"]) {
			box-shadow: var(--shadow-level1);
		}
		
		:host([shadow="2"]) {
			box-shadow: var(--shadow-level2);
		}
		
		:host([shadow="3"]) {
			box-shadow: var(--shadow-level3);
		}
		
		:host([shadow="4"]) {
			box-shadow: var(--shadow-level4);
		}
		
		:host([shadow="5"]) {
			box-shadow: var(--shadow-level5);
		}
		
		:host([shadow="6"]) {
			box-shadow: var(--shadow-level6);
		}
		
		:host([shadow="7"]) {
			box-shadow: var(--shadow-level7);
		}
		
	`;
	}

	public static markup (): string {
		return `
			<slot></slot>
		`;
	}
}

CardComponent.define("card-element");