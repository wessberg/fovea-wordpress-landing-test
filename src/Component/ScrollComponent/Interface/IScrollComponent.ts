import {IComponent} from "../../Component/IComponent";

export enum ScrollDirectionKind {
	X, Y, BOTH
}

export interface IScrollComponent extends IComponent {
	direction: ScrollDirectionKind;
}