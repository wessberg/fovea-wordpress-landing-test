import "../TTFMPDescriptionComponent/TTFMPDescriptionComponent";
import "../IconComponent/IconComponent";
import "../RenderingTimelinesComponent/RenderingTimelinesComponent";
import {Component, selector} from "../Component/Component";
import {ITTFMPComponent} from "./Interface/ITTFMPComponent";

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
				top: 10px;
				width: 918px;
				height: 887px;
				transform-origin: left top;
				transform: rotate(45deg) scaleY(4) translateZ(0);
				z-index: 0;
				left: 10px;
				right: 0;
				margin: 0 auto;
				display: none;
			}
			
			ttfmp-description-element {
				z-index: 1;
			}
			
			@media screen and (min-width: 800px) {
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
			<rendering-timelines-element></rendering-timelines-element>
		`;
	}
}