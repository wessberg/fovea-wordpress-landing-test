import "../../Component/FoveaAppBarComponent/FoveaAppBarComponent";
import {Component, selector} from "../../Component/Component/Component";
import {IFrame} from "./Interface/IFrame";
import {eventUtil} from "../../Service/Services";
import {GlobalObject} from "@wessberg/globalobject";

@selector("frame-element")
export class Frame extends Component implements IFrame {
	public static readonly READY_EVENT_NAME = "ATTACHED_FRAME";
	public role = "application";

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
				height: 100vh;
			}
		`;
	}

	public static markup (): string {
		return `
			<fovea-app-bar-element></fovea-app-bar-element>
			<slot></slot>
		`;
	}

	connectedCallback (): void {
		super.connectedCallback();
		eventUtil.fire(Frame.READY_EVENT_NAME, GlobalObject, this);
	}
}