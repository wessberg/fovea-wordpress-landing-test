import {IStore} from "../../Store/Interface/IStore";
import {IWordpressPost} from "../../../Model/WordpressPost/Interface/IWordpressPost";

export interface IWordpressPostStore extends IStore {
	posts: IWordpressPost[];
	getPost (name: string): IWordpressPost|undefined;
}