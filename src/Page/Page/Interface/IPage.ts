import {IComponent} from "../../../Component/Component/IComponent";
import {IPathChangeSubscriber} from "../../../Discriminator/PathChangeSubscriber/Interface/IPathChangeSubscriber";

export interface IPage extends IComponent, IPathChangeSubscriber {
}

export interface IPageConstructor {
	new (): IPage;
	routeName: RegExp;
	testRoute (path: string): boolean;
}