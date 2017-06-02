import {Component, selector} from "../../Component/Component/Component";
import {IFrame} from "./Interface/IFrame";

@selector("frame-element")
export class Frame extends Component implements IFrame {
	public static styles (): string {
		return `
			:host {
				transform: translate3d(0,0,0);
				backface-visibility: hidden;
				box-sizing: border-box;
				contain: content;
				position: relative;
				display: block;
				width: 100%;
				height: 100%;
			}
		`;
	}

}