import {Component, selector} from "../Component/Component";
import {ISocialLinksCardComponent} from "./Interface/ISocialLinksCardComponent";
import "../CardComponent/CardComponent";
import "../SocialLinksComponent/SocialLinksComponent";
import "../IconComponent/IconComponent";

@selector("social-links-card-element")
export class SocialLinksCardComponent extends Component implements ISocialLinksCardComponent {

	public static styles (): string {
		return `
			
			#header {
				display: flex;
				flex-direction: row;
				align-content: center;
				justify-content: flex-start;
				margin-bottom: var(--distance-minimum);
			}
			
			#header > icon-element {
				margin-right: var(--distance-minimum);
			}
			
			#header > h6 {
				user-select: text;
				color: var(--color-icon-dark);
				margin: 0;
				line-height: 1.3;
			}
		`;
	}

	public static markup (): string {
		return `
			<card-element>
				<section id="header">
					<icon-element icon="share" medium></icon-element>
					<h6>Elsewhere</h6>
				</section>
				<social-links-element></social-links-element>
			</card-element>
		`;
	}
}