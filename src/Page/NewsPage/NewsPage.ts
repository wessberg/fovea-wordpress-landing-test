import "../../Component/FoveaFooterComponent/FoveaFooterComponent";
import "../../Component/MaterialTrianglesComponent/MaterialTrianglesComponent";
import "../../Component/PostSummaryComponent/PostSummaryComponent";
import "../../Component/ImageComponent/ImageComponent";
import "../../Component/LatestReleaseNotesComponent/LatestReleaseNotesComponent";
import "../../Component/SocialLinksCardComponent/SocialLinksCardComponent";

import {Page} from "../Page/Page";
import {selector} from "../../Component/Component/Component";
import {INewsPage} from "./Interface/INewsPage";
import {wordpressPostStore} from "../../Service/Services";

@selector("news-page-element")
export class NewsPage extends Page implements INewsPage {
	public static routeName = /\/news/;

	public static markup (): string {
		return `
			<article id="cards">
				<main id="posts"></main>
				<aside id="sidebar">
					<latest-release-notes-element></latest-release-notes-element>
					<social-links-card-element></social-links-card-element>
				</aside>
			</article>
			<section id="bottom">
				<material-triangles-element accent></material-triangles-element>
				<fovea-footer-element></fovea-footer-element>
			</section>
		`;
	}

	protected async connectedCallback(): Promise<void> {
		await super.connectedCallback();
		const postsElement = this.element("posts");
		wordpressPostStore.posts.forEach(post => {
			const postElement = document.createElement("post-summary-element");
			postElement.innerHTML = `
				<h6 slot="author">${post.author.name}</h6>
				<image-element cover width="60" height="60" src="${post.author.avatar}" slot="avatar" autoload></image-element>
				<small slot="date">${post.date}</small>
				<small slot="categories">${post.categories.join(",")}</small>
				${post.image == null ? "" : `<image-element cover src="${post.image}" slot="image" autoload></image-element>`}
				<h6 slot="title">${post.title}</h6>
				<div slot="content">${post.content}</div>
			`;
			postsElement.appendChild(postElement);
		});
	}

	public static styles () {
		return super.styles() + `

			#cards {
				position: relative;
				text-align: center;
				width: 100%;
				max-width: var(--width-frame-max);
				justify-content: center;
				align-content: center;
				display: flex;
				flex-direction: column;
				margin: 0 auto;
			}
			
			material-triangles-element {
				top: auto;
				bottom: 0;
			}
			
			#bottom {
				position: relative;
			}
			
			#posts {
				display: flex;
				flex-direction: column;
				max-width: 546px;
				flex-grow: 2;
				width: 100%;
				margin: 0 auto;
			}
			
			#posts > *,
			#sidebar > * {
				position: relative;
				display: block;
				user-select: text;
				width: 100%;
			}
			
			#sidebar {
				max-width: 321px;
				flex-grow: 1;
				width: 100%;
				margin: 0 auto;
			}
			
			#sidebar {
				margin-top: var(--distance-minimum);
			}
			
			#sidebar > * {
				margin-bottom: var(--distance-minimum);
			}
			
			#posts > post-summary-element:not(:first-of-type) {
				margin-top: var(--distance-regular);
			}
			
			#posts > post-summary-element > div * {
				user-select: text;
			}
			
			@media screen and (min-width: 700px) {
			
				#cards {
					flex-direction: row;
				}
				
				#sidebar {
					margin-top: 0;
				}

				#cards > * {
					margin: var(--distance-minimum);
				}
			}
		`;
	}

}