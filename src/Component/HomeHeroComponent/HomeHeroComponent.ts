import "../IconComponent/IconComponent";
import "../CodeComponent/CodeComponent";
import "../HeroComponent/HeroComponent";
import "../ButtonComponent/ButtonComponent";
import "../AnchorComponent/AnchorComponent";
import {IHomeHeroComponent} from "./Interface/IHomeHeroComponent";
import {Component, selector} from "../Component/Component";

@selector("home-hero-element")
export class HomeHeroComponent extends Component implements IHomeHeroComponent {
	public role = "banner";

	public static markup (): string {
		return `
			<hero-element center>
				<icon-element icon="fovea-logo" extreme light></icon-element>
				<h3>Fovea</h3>
				<h5>Let's build a better web. For <strong>everyone.</strong></h5>
				<code-element>
					<pre>npm install @wessberg/fovea</pre>
				</code-element>
				<anchor-element href="/learn">
					<button-element primary shadow>
						<p>Get started</p>
					</button-element>
				</anchor-element>
			</hero-element>
		`;
	}

	public static styles (): string {
		return `
			h3, h5 {
				color: var(--color-primary-text-light);
			}
			
			h3, h5, strong {
				user-select:text;
			}
			
			h3 {
				font-weight: var(--font-weight-bold);
				line-height: 1;
			}
			
			h5 {
				padding: 0 var(--distance-minimum);
			}
			
			code-element {
				max-width: 392px;
				margin-bottom: var(--distance-regular);
			}
		`;
	}
}