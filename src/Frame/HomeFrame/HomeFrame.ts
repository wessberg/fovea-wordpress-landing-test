import "../../Component/FoveaAppBarComponent/FoveaAppBarComponent";
import "../../Page/HomePage/HomePage";
import {Frame} from "../Frame/Frame";
import {IHomeFrame} from "./Interface/IHomeFrame";
import {selector} from "../../Component/Component/Component";

@selector("home-frame-element")
export class HomeFrame extends Frame implements IHomeFrame {
	public static markup (): string {
		return `
			<fovea-app-bar-element></fovea-app-bar-element>
			<home-page-element></home-page-element>
		`;
	}
}