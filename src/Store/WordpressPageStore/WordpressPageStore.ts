import {Store} from "../Store/Store";
import {IWordpressPageStore} from "./Interface/IWordpressPageStore";
import {IWordpressPage} from "../../Model/WordpressPage/Interface/IWordpressPage";
import {Resource} from "../../Static/Resource/Resource";

export class WordpressPageStore extends Store implements IWordpressPageStore {
	public pages: IWordpressPage[] = this.formatWordpressPages();

	public getPage (name: string): IWordpressPage|undefined {
		return this.pages.find(page => page.name.toLowerCase() === name.toLowerCase());
	}

	private formatWordpressPages (): IWordpressPage[] {
		return WP.pages
			.filter(page => page.post_type === "page")
			.map(page => {
				return {
					name: `${Resource.path.pathname}${page.post_name}`,
					title: page.post_title,
					order: page.menu_order
				};
			});
	}
}