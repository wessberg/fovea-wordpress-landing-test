import {IComponent} from "../../Component/IComponent";

export interface IRenderingTimelineComponentConstructor {
	new (): IRenderingTimelineComponent;
	get00Markup (): string;
	get01Markup (): string;
	get02Markup (): string;
	get03Markup (): string;
	get04Markup (): string;
	get05Markup (): string;
	get10Markup (): string;
	get11Markup (): string;
	get12Markup (): string;
	get13Markup (): string;
	get14Markup (): string;
	get15Markup (): string;
	get20Markup (): string;
	get21Markup (): string;
	get22Markup (): string;
	get23Markup (): string;
	get24Markup (): string;
	get25Markup (): string;
	get30Markup (): string;
	get31Markup (): string;
	get32Markup (): string;
	get33Markup (): string;
	get34Markup (): string;
	get35Markup (): string;
	get40Markup (): string;
	get41Markup (): string;
	get42Markup (): string;
	get43Markup (): string;
	get44Markup (): string;
	get45Markup (): string;
	get50Markup (): string;
	get51Markup (): string;
	get52Markup (): string;
	get53Markup (): string;
	get54Markup (): string;
	get55Markup (): string;
}

export interface IRenderingTimelineComponent extends IComponent {
}