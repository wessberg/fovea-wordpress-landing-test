import {Component, selector} from "../Component/Component";
import {ILatestReleaseNotesComponent} from "./Interface/ILatestReleaseNotesComponent";
import "../CardComponent/CardComponent";
import "../IconComponent/IconComponent";

@selector("latest-release-notes-element")
export class LatestReleaseNotesComponent extends Component implements ILatestReleaseNotesComponent {

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
					<icon-element icon="paper-fill" medium></icon-element>
					<h6>Latest release notes</h6>
				</section>
				<small>Coming soon</small>
			</card-element>
		`;
	}
}