import {IStore} from "../../Store/Interface/IStore";
import {IWordpressPage} from "../../../Model/WordpressPage/Interface/IWordpressPage";

export interface IWordpressPageStore extends IStore {
	pages: IWordpressPage[];
	getPage (name: string): IWordpressPage|undefined;
}