import {Component, selector} from "../Component/Component";
import {ITTFMPComponent} from "./Interface/ITTFMPComponent";
import "../TTFMPDescriptionComponent/TTFMPDescriptionComponent";
import "../IconComponent/IconComponent";

@selector("ttfmp-element")
export class TTFMPComponent extends Component implements ITTFMPComponent {
	public role = "complementary";

	public static styles (): string {
		return `
			:host {
				background: var(--color-blue-100);
				text-align: center;
				width: 100%;
				justify-content: center;
				align-content: center;
				position: relative;
				display: flex;
				flex-direction: column;
				margin: 0;
				padding: var(--distance-minimum) var(--distance-minimum) 100px var(--distance-minimum);
				overflow: hidden;
			}
			
			#descriptionSection {
				position: relative;
				display: block;
			}
			
			#browserFrameShadowIcon {
				position: absolute;
				top: 20px;
				width: 918px;
				height: 887px;
				max-width: 100%;
				transform-origin: left top;
				transform: rotate(45deg) translateZ(0);
				z-index: 0;
				left: 0;
				right: 0;
				margin: 0 auto;
				display: none;
			}
			
			ttfmp-description-element {
				z-index: 1;
			}
			
			@media screen and (min-width: 690px) {
				#browserFrameShadowIcon {
					display: block;
				}
			}
			
		`;
	}

	public static markup (): string {

		return `
			<section id="descriptionSection">
				<ttfmp-description-element></ttfmp-description-element>
				<icon-element id="browserFrameShadowIcon" icon="material-rectangle"></icon-element>
			</section>
		`;
	}
}