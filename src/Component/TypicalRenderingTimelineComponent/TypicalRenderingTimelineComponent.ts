import {RenderingTimelineComponent} from "../RenderingTimelineComponent/RenderingTimelineComponent";
import "../RectangleItemComponent/RectangleItemComponent";
import {ITypicalRenderingTimelineComponent} from "./Interface/ITypicalRenderingTimelineComponent";
import {selector} from "../Component/Component";

@selector("typical-rendering-timeline-element")
export class TypicalRenderingTimelineComponent extends RenderingTimelineComponent implements ITypicalRenderingTimelineComponent {

	protected static get00Markup (): string {
		return `
			<rectangle-item-element accent><p>Page load</p></rectangle-item-element>
		`;
	}

	protected static get01Markup (): string {
		return `
			<rectangle-item-element accent><p>UI library ready</p></rectangle-item-element>
		`;
	}

	protected static get02Markup (): string {
		return `
			<rectangle-item-element accent><p>Register view</p></rectangle-item-element>
		`;
	}

	protected static get12Markup (): string {
		return `
			<rectangle-item-element accent><p>Parse code</p></rectangle-item-element>
		`;
	}

	protected static get03Markup (): string {
		return `
			<rectangle-item-element accent><p>Upgrade code</p></rectangle-item-element>
		`;
	}

	protected static get13Markup (): string {
		return `
			<rectangle-item-element accent><p>Map bindings</p></rectangle-item-element>
		`;
	}

	protected static get04Markup (): string {
		return `
			<rectangle-item-element accent><p>Upgrade bound values</p></rectangle-item-element>
		`;
	}

	protected static get14Markup (): string {
		return `
			<rectangle-item-element accent><p>Attach listeners</p></rectangle-item-element>
		`;
	}

	protected static get24Markup (): string {
		return `
			<rectangle-item-element accent><p>Append to DOM</p></rectangle-item-element>
		`;
	}

	protected static get05Markup (): string {
		return `
			<rectangle-item-element primary><p>First paint</p></rectangle-item-element>
		`;
	}
}