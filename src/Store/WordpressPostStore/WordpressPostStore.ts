import {Store} from "../Store/Store";
import {IWordpressPostStore} from "./Interface/IWordpressPostStore";
import {IWordpressPost} from "../../Model/WordpressPost/Interface/IWordpressPost";
import {Resource} from "../../Static/Resource/Resource";

export class WordpressPostStore extends Store implements IWordpressPostStore {
	public posts: IWordpressPost[] = this.formatWordpressPosts();

	public getPost (name: string): IWordpressPost|undefined {
		return this.posts.find(page => page.name.toLowerCase() === name.toLowerCase());
	}

	private formatWordpressPosts (): IWordpressPost[] {
		return WP.posts
			.filter(post => post.post_type === "post")
			.map(post => {
				return {
					name: `${Resource.path.pathname}${post.post_name}`,
					title: post.post_title,
					content: post.post_content,
					date: post.post_date,
					categories: post.categories,
					author: {
						avatar: /*post.author.avatar,*/ post.author.avatar.replace("http", "https"),
						name: post.author.display_name,
						email: post.author.user_email
					},
					image: post.image == null ? undefined : /*post.image[0]*/ post.image[0].replace("http", "https")
				};
			});
	}
}