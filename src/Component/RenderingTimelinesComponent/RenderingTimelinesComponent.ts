import {Component, selector} from "../Component/Component";
import {IRenderingTimelinesComponent} from "./Interface/IRenderingTimelinesComponent";
import "../TypicalRenderingTimelineComponent/TypicalRenderingTimelineComponent";
import "../FoveaRenderingTimelineComponent/FoveaRenderingTimelineComponent";

@selector("rendering-timelines-element")
export class RenderingTimelinesComponent extends Component implements IRenderingTimelinesComponent {

	public static styles (): string {
		return `

			typical-rendering-timeline-element {
				height: 250px;
				margin-bottom: var(--distance-regular);
			}
		
			h5 {
				padding-top: var(--distance-regular);
				color: var(--color-primary-text-light);
				user-select: text;
				font-weight: var(--font-weight-medium);
			}
			
		`;
	}

	public static markup (): string {
		return `
			<h5>With typical view libraries</h5>
			<typical-rendering-timeline-element></typical-rendering-timeline-element>
			<h5>With Fovea</h5>
			<fovea-rendering-timeline-element></fovea-rendering-timeline-element>
		`;
	}
}