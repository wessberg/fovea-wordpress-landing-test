import {Component, selector} from "../Component/Component";
import "../IconComponent/IconComponent";
import {IMaterialTrianglesComponent} from "./Interface/IMaterialTrianglesComponent";

@selector("material-triangles-element")
export class MaterialTrianglesComponent extends Component implements IMaterialTrianglesComponent {
	public tabindex: string = "0";

	public static styles (): string {
		return `
			:host {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				contain: strict;
				backface-visibility: hidden;
				transform: translate3d(0,0,0);
				overflow: hidden;
			}
			
			:host([dark]) icon-element,
			icon-element {
				fill: var(--color-black-02);
			}
			
			:host([primary]) icon-element {
				fill: var(--color-primary-06);
			}
			
			:host([accent]) icon-element {
				fill: var(--color-accent-06);
			}
			
			:host([light]) icon-element {
				fill: var(--color-white-12);
			}
			
			:host([warning]) icon-element {
				fill: var(--color-red-12);
			}
			
			
			icon-element {
				width: 200vw;
				height: 200vw;
				position: absolute;
				z-index: 0;
				contain: strict;
				backface-visibility: hidden;
				overflow: hidden;
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
			<icon-element id="triangle1" icon="material-triangle"></icon-element>
			<icon-element id="triangle2" icon="material-triangle"></icon-element>
		`;
	}
}