import {IHeroComponent} from "./Interface/IHeroComponent";
import {Component, selector} from "../Component/Component";
import "../IconComponent/IconComponent";

@selector("hero-element")
export class HeroComponent extends Component implements IHeroComponent {
	public tabindex: string = "0";

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
				z-index: 1;
			}
			
			icon-element {
				width: 200vw;
				height: 200vw;
				position: absolute;
				fill: var(--color-black-02);
				z-index: 0;
				contain: strict;
				backface-visibility: hidden;
			}
			
			#triangle1 {
				top: -20vw;
				left: -80vw;
				transform: rotate(-24deg) translateZ(0);
			}
			
			#triangle2 {
				top: -50vw;
				left: -40vw;
				transform: rotate(23deg) translateZ(0);
			}
		`;
	}

	public static markup (): string {
		return `
			<slot></slot>
			<icon-element id="triangle1" icon="material-triangle"></icon-element>
			<icon-element id="triangle2" icon="material-triangle"></icon-element>
		`;
	}
}