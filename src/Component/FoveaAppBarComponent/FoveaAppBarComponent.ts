import "../../Component/IconComponent/IconComponent";
import "../AppBarComponent/AppBarComponent";
import "../AppBarItemComponent/AppBarItemComponent";
import "../AnchorComponent/AnchorComponent";
import "../ButtonComponent/ButtonComponent";

import {Component, selector} from "../Component/Component";
import {IFoveaAppBarComponent} from "./Interface/IFoveaAppBarComponent";
import {wordpressPageStore} from "../../Service/Services";
import {IAppBarComponent} from "../AppBarComponent/Interface/IAppBarComponent";
import {IWordpressPage} from "../../Model/WordpressPage/Interface/IWordpressPage";
import {IAppBarItemComponent} from "../AppBarItemComponent/Interface/IAppBarItemComponent";
import {IAnchorComponent} from "../AnchorComponent/Interface/IAnchorComponent";

@selector("fovea-app-bar-element")
export class FoveaAppBarComponent extends Component implements IFoveaAppBarComponent {
	public role = "navigation";

	public static styles (): string {
		return `
		
			#githubItem {
				width: 46px;
				margin-left: var(--distance-minimum);
				display: none;
			}
			
			#logoItem {
				margin-left: var(--distance-minimum);
				width: 46px;
			}
			
			#logoItem > p {
				display: none;
			}
			
			app-bar-item-element {
				width: 80px;
			}
			
			@media screen and (min-width: 427px) {
				#githubItem {
					display: block;
				}
			}
			
			
			@media screen and (min-width: 440px) {
			
				#logoItem {
					width: 110px;
					margin-left: 0;
				}
				
				#logoItem > p {
					display: block;
				}
				
				#logoItem > icon-element {
					margin-right: var(--distance-minimum);
				}
			}
		`;
	}

	public static markup (): string {
		return `
			<app-bar-element primary>
				<anchor-element href="/" target="_self" slot="title">
					<app-bar-item-element id="logoItem" large-text>
						<icon-element icon="fovea-logo" light medium></icon-element>
						<p>Fovea</p>
					</app-bar-item-element>
				</anchor-element>
				<anchor-element href="https://github.com/wessberg/" target="_blank" slot="rightIcon">
					<app-bar-item-element id="githubItem" round>
						<icon-element icon="github-logo" light medium></icon-element>
					</app-bar-item-element>
				</anchor-element>
			</app-bar-element>
		`;
	}

	protected connectedCallback (): void {
		super.connectedCallback();
		this.addPages();
	}

	private getMenuItem (page: IWordpressPage): IAnchorComponent {
		const link = <IAnchorComponent> document.createElement("anchor-element");
		link.setAttribute("href", page.name);
		link.setAttribute("target", "_self");
		link.setAttribute("slot", "menuItem");

		const appBarItem = <IAppBarItemComponent> document.createElement("app-bar-item-element");
		const text = <HTMLParagraphElement> document.createElement("p");
		text.innerText = page.title;
		appBarItem.appendChild(text);
		link.appendChild(appBarItem);
		return link;
	}

	private addPages (): void {
		const appBar = <IAppBarComponent> this.element("app-bar-element");
		wordpressPageStore.pages.forEach(page => appBar.appendChild(this.getMenuItem(page)));
	}

}