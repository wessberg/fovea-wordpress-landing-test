import {Component, selector} from "../Component/Component";
import {IPostSummaryComponent} from "./Interface/IPostSummaryComponent";
import "../CardComponent/CardComponent";

@selector("post-summary-element")
export class PostSummaryComponent extends Component implements IPostSummaryComponent {

	public static styles (): string {
		return `
			#top {
				padding: var(--distance-regular);
			}
			
			#middle {
				padding: 0 var(--distance-regular) var(--distance-regular) var(--distance-regular);
			}
			
			#imageSlot::slotted(image-element),
			#imageSlot::slotted(img) {
				margin-bottom: var(--distance-regular) !important;
			}

			#top, #meta, #dateAndCategories {
				display: flex;
			}
			
			#top, #dateAndCategories {
				flex-direction: row;
			}
			
			#meta {
				flex-direction: column;
			}
			
			#top, #dateAndCategories {
				justify-content: flex-start;
				align-content: flex-start;
			}
			
			#meta {
				margin-left: var(--distance-regular);
				justify-content: space-around;
				align-content: space-around;
			}
			
			#avatarSlot::slotted(image-element),
			#avatarSlot::slotted(img){
				border-radius: 50%;
				width: 60px;
				height: 60px;
			}
			
			::slotted(h1),
			::slotted(h2),
			::slotted(h3),
			::slotted(h4),
			::slotted(h5),
			::slotted(h6),
			::slotted(span),
			::slotted(p),
			::slotted(small),
			::slotted(strong),
			#dateAndCategories > span {
				user-select: text !important;
			}
			
			#nameSlot::slotted(h1),
			#nameSlot::slotted(h2),
			#nameSlot::slotted(h3),
			#nameSlot::slotted(h4),
			#nameSlot::slotted(h5),
			#nameSlot::slotted(h6) {
				font-size: var(--font-size-title) !important;
				font-weight: var(--font-weight-medium) !important;
				margin-bottom: 0 !important;
			}
			
			#titleSlot::slotted(h1),
			#titleSlot::slotted(h2),
			#titleSlot::slotted(h3),
			#titleSlot::slotted(h4),
			#titleSlot::slotted(h5),
			#titleSlot::slotted(h6) {
				font-weight: var(--font-weight-regular) !important;
				color: var(--color-black-87) !important;
			}
			
			#dateSlot::slotted(*),
			#categoriesSlot::slotted(*),
			#dateAndCategories > span {
				color: var(--color-secondary-text-dark) !important;
			}
			
			#dateAndCategories > span {
				padding: 0 5px;
			}
			
			card-element {
				padding: 0;
				width: inherit;
				max-width: inherit;
			}
			
		`;
	}

	public static markup (): string {
		return `
			<card-element>
				<section id="top">
					<slot id="avatarSlot" name="avatar"></slot>
					<section id="meta">
						<slot id="nameSlot" name="author"></slot>
						<section id="dateAndCategories">
							<slot id="dateSlot" name="date"></slot><!--
					 --><span>&#8226;</span><!--
					 --><slot id="categoriesSlot" name="categories"></slot>
						</section>
					</section>
				</section>
				<slot id="imageSlot" name="image"></slot>
				<section id="middle">
					<slot id="titleSlot" name="title"></slot>
					<slot id="contentSlot" name="content"></slot>
				</section>
			</card-element>
		`;
	}
}