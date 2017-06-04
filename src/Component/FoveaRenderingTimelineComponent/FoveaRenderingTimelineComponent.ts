import {RenderingTimelineComponent} from "../RenderingTimelineComponent/RenderingTimelineComponent";
import "../RectangleItemComponent/RectangleItemComponent";
import {IFoveaRenderingTimelineComponent} from "./Interface/IFoveaRenderingTimelineComponent";
import {selector} from "../Component/Component";

@selector("fovea-rendering-timeline-element")
export class FoveaRenderingTimelineComponent extends RenderingTimelineComponent implements IFoveaRenderingTimelineComponent {

	protected static get00Markup (): string {
		return `
			<rectangle-item-element accent><p>Page load</p></rectangle-item-element>
		`;
	}

	protected static get01Markup (): string {
		return `
			<rectangle-item-element accent><p>Register view</p></rectangle-item-element>
		`;
	}

	protected static get11Markup (): string {
		return `
			<rectangle-item-element accent><p>Map bindings</p></rectangle-item-element>
		`;
	}

	protected static get21Markup (): string {
		return `
			<rectangle-item-element accent><p>Upgrade bound values</p></rectangle-item-element>
		`;
	}

	protected static get31Markup (): string {
		return `
			<rectangle-item-element accent><p>Attach listeners</p></rectangle-item-element>
		`;
	}

	protected static get41Markup (): string {
		return `
			<rectangle-item-element accent><p>Append to DOM</p></rectangle-item-element>
		`;
	}

	protected static get02Markup (): string {
		return `
			<rectangle-item-element primary><p>First paint</p></rectangle-item-element>
		`;
	}

}