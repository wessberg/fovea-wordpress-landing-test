import "../../Component/IconComponent/IconComponent";
import "../AppBarComponent/AppBarComponent";
import "../AppBarItemComponent/AppBarItemComponent";
import "../AnchorComponent/AnchorComponent";
import "../ButtonComponent/ButtonComponent";

import {Component, selector} from "../Component/Component";
import {IFoveaAppBarComponent} from "./Interface/IFoveaAppBarComponent";
import {eventUtil, wordpressPageStore} from "../../Service/Services";
import {IAppBarComponent} from "../AppBarComponent/Interface/IAppBarComponent";
import {IWordpressPage} from "../../Model/WordpressPage/Interface/IWordpressPage";
import {IAppBarItemComponent} from "../AppBarItemComponent/Interface/IAppBarItemComponent";
import {IAnchorComponent} from "../AnchorComponent/Interface/IAnchorComponent";
import {EventName} from "../../Static/EventName/EventName";

@selector("fovea-app-bar-element")
export class FoveaAppBarComponent extends Component implements IFoveaAppBarComponent {
	public role = "navigation";

	public static styles (): string {
		return `

			#menuItem, #githubItem, #logoItem {
				width: 46px;
			}
			
			#githubItem, #logoItem {
				margin-left: 0;
			}
			
		
			#githubItem {
				display: none;
			}
			
			:host(:not([menu])) #menuItem {
				display: none;
			}
			
			#logoItem > p {
				display: none;
			}
			
			app-bar-item-element {
				width: 60px;
			}
			
			@media screen and (min-width: 368px) {
			
				app-bar-item-element {
					width: 80px;
				}
				
				#githubItem, #logoItem {
					margin-left: var(--distance-minimum);
				}
			}
			
			@media screen and (min-width: 427px) {
			
				:host(:not([menu])) #githubItem {
					display: block;
				}
			}
			
			@media screen and (min-width: 507px) {
			
				:host([menu]) #githubItem {
					display: block;
				}
			}
			
			
			@media screen and (min-width: 440px) {
			
				:host(:not([menu])) #logoItem {
					width: 110px;
					margin-left: 0;
				}
				
				:host(:not([menu])) #logoItem > icon-element {
					margin-right: var(--distance-minimum);
				}
				
				:host(:not([menu])) #logoItem > p {
					display: block;
				}
			}
			
			@media screen and (min-width: 520px) {
			
				:host([menu]) #logoItem {
					width: 110px;
					margin-left: 0;
				}
				
				:host([menu]) #logoItem > icon-element {
					margin-right: var(--distance-minimum);
				}
				
				:host([menu]) #logoItem > p {
					display: block;
				}
			}
			
		`;
	}

	public static markup (): string {
		return `
			<app-bar-element primary>
				<app-bar-item-element id="menuItem" slot="menuIcon" round no-underline>
						<icon-element icon="menu" light medium></icon-element>
				</app-bar-item-element>
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
		this.listenForMenuEvents();
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

	private listenForMenuEvents (): void {
		console.log("began listening");
		eventUtil.listen(this, EventName.CLICK, this.element("menuItem"), this.onMenuClicked);
		eventUtil.listen(this, EventName.SHOW_MENU_ICON, window, this.onMenuItemShow);
		eventUtil.listen(this, EventName.HIDE_MENU_ICON, window, this.onMenuItemHide);
	}

	private onMenuItemShow (): void {
		if (!this.hasAttribute("menu")) this.setAttribute("menu", "");
	}

	private onMenuItemHide (): void {
		if (this.hasAttribute("menu")) this.removeAttribute("menu");
	}

	private onMenuClicked (): void {
		eventUtil.fire(EventName.MENU_ICON_CLICKED, window);
	}

}