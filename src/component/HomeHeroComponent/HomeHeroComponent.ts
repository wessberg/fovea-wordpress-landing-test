import "../IconComponent/IconComponent";
import "../CodeComponent/CodeComponent";
import "../HeroComponent/HeroComponent";
import {IHomeHeroComponent} from "./Interface/IHomeHeroComponent";
import {Component, selector} from "../Component/Component";

@selector("home-hero-element")
export class HomeHeroComponent extends Component implements IHomeHeroComponent {

	public static markup (): string {
		return `
			<hero-element center>
				<icon-element icon="fovea-logo" extreme light></icon-element>
				<h3>Fovea</h3>
				<h5>Let's build a better web. For <strong>everyone.</strong></h5>
				<code-element><code>npm install @wessberg/fovea</code></code-element>
			</hero-element>
		`;
	}

	public static styles (): string {
		return `
			h3, h5 {
				color: var(--color-primary-text-light);
			}
			
			h3 {
				font-weight: var(--font-weight-bold);
			}
			
			code-element {
				width: 392px;
			}
		`;
	}
}