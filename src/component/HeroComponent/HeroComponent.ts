import {IHeroComponent} from "./Interface/IHeroComponent";
import {Component, selector} from "../Component/Component";

@selector("hero-element")
export class HeroComponent extends Component implements IHeroComponent {

	public static styles (): string {
		return `
			:host {
				height: var(--height-hero);
				width: 100%;
				display: flex;
				align-content: center;
				padding-top: var(--app-bar-landscape-height-mobile);
				flex-direction: column;
				position: relative;
				background: var(--color-accent-100);
				contain: strict;
				backface-visibility: hidden;
				transform: translate3d(0,0,0);
			}
			
			::slotted(*) {
			text-align: center;
			}
		`;
	}

	public static markup (): string {
		return `
			<slot></slot>
		`;
	}
}