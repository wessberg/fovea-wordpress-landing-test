import {ICard} from "./ICard";
import {Component} from "../component/Component";
import {define} from "../define/define";

export class Card extends Component implements ICard {

	public static styles (): string {
		return `
		
		:host {
			min-width: 200px;
			margin: var(--distance-minimum);
			width: auto;
			min-height: 150px;
			position: relative;
			display: block;
			background: var(--color-white-100);
			box-shadow: var(--shadow-level4);
			contain: strict;
		}
		
		:host[shadow="level1"] {
			box-shadow: var(--shadow-level1);
		}
		
		:host[shadow="level2"] {
			box-shadow: var(--shadow-level2);
		}
		
		:host[shadow="level3"] {
			box-shadow: var(--shadow-level3);
		}
		
		:host[shadow="level4"] {
			box-shadow: var(--shadow-level4);
		}
		
		:host[shadow="level5"] {
			box-shadow: var(--shadow-level5);
		}
		
		:host[shadow="level6"] {
			box-shadow: var(--shadow-level6);
		}
		
		:host[shadow="level7"] {
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

define("card-element", Card);