import {Component, selector} from "../Component/Component";
import {ISocialLinksComponent} from "./Interface/ISocialLinksComponent";
import "../ButtonComponent/ButtonComponent";
import "../AnchorComponent/AnchorComponent";

@selector("social-links-element")
export class SocialLinksComponent extends Component implements ISocialLinksComponent {

	public static styles (): string {
		return `

			:host {
				display: flex;
				flex-direction: row;
			}
			
			anchor-element {
				margin-right: var(--distance-regular);
			}
			
			anchor-element > button-element {
				width: var(--width-icon-medium);
				height: var(--height-icon-medium);
			}
		`;
	}

	public static markup (): string {
		return `
		<anchor-element href="https://twitter.com/FredWessberg" target="_blank">
			<button-element no-background round>
				<icon-element icon="twitter-logo"></icon-element>
			</button-element>
		</anchor-element>
		<anchor-element href="https://github.com/wessberg" target="_blank">
			<button-element no-background round>
				<icon-element icon="github-logo"></icon-element>
			</button-element>
		</anchor-element>
		<anchor-element href="https://medium.com/@FredWessberg" target="_blank">
			<button-element no-background round>
				<icon-element icon="medium-logo"></icon-element>
			</button-element>
		</anchor-element>
		<anchor-element href="https://npmjs.com/~wessberg" target="_blank">
			<button-element no-background round>
				<icon-element icon="npm-logo"></icon-element>
			</button-element>
		</anchor-element>
		`;
	}
}