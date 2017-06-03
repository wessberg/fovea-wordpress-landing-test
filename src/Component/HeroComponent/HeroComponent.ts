import {IHeroComponent} from "./Interface/IHeroComponent";
import {Component, selector} from "../Component/Component";
import "../MaterialTrianglesComponent/MaterialTrianglesComponent";

@selector("hero-element")
export class HeroComponent extends Component implements IHeroComponent {
	public role = "banner";

	public static styles (): string {
		return `
			:host {
				width: 100%;
				display: flex;
				align-content: center;
				padding-top: var(--app-bar-landscape-height-mobile);
				flex-direction: column;
				position: relative;
				background: var(--color-accent-100);
				contain: content;
				backface-visibility: hidden;
				transform: translate3d(0,0,0);
				overflow: hidden;
				padding-bottom: 60px;
			}
			
			::slotted(*) {
				text-align: center;
				z-index: 1;
			}
		`;
	}

	public static markup (): string {
		return `
			<slot></slot>
			<material-triangles-element></material-triangles-element>
		`;
	}
}