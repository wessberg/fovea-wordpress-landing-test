import "../../Component/FoveaFooterComponent/FoveaFooterComponent";
import "../../Component/MaterialTrianglesComponent/MaterialTrianglesComponent";
import "../../Component/AppDrawerComponent/AppDrawerComponent";
import "../../Component/AnchorComponent/AnchorComponent";
import "../../Component/AppDrawerSectionComponent/AppDrawerSectionComponent";
import "../../Component/IconComponent/IconComponent";
import "../../Component/ButtonComponent/ButtonComponent";
import "../../Component/SocialLinksComponent/SocialLinksComponent";

import {Page} from "../Page/Page";
import {selector} from "../../Component/Component/Component";
import {ILearnPage} from "./Interface/ILearnPage";
import {eventUtil, waitOperations} from "../../Service/Services";
import {EventName} from "../../Static/EventName/EventName";

@selector("learn-page-element")
export class LearnPage extends Page implements ILearnPage {
	public static routeName = /\/learn/;
	private static readonly ALWAYS_OPEN_THRESHOLD = 600;

	public static markup (): string {
		return `
			<app-drawer-element>
				<app-drawer-section-element>
					<h6>Getting started</h6>
					<hr>
					
					<anchor-element href="/learn/what-is-fovea">What is Fovea</anchor-element>
					<anchor-element href="/learn/installation">Installation</anchor-element>
					<anchor-element href="/learn/installation">Your first app</anchor-element>
					<anchor-element href="/learn/installation">Your first component</anchor-element>
					
					<hr>
					<h6>Features</h6>
					<hr>
					
					<anchor-element href="/learn/compilation-step">Compilation-step</anchor-element>
					<anchor-element href="/learn/data-binding">Data binding</anchor-element>
					<anchor-element href="/learn/event-listeners">Event listeners</anchor-element>
					<anchor-element href="/learn/styling">Styling</anchor-element>
					<anchor-element href="/learn/looping-and-conditionals">Looping and conditionals</anchor-element>
					<anchor-element href="/learn/referencing-elements">Referencing elements</anchor-element>
					<anchor-element href="/learn/declaring-properties">Declaring properties</anchor-element>
					
					<hr>
					<h6>Advanced</h6>
					<hr>
					
					<anchor-element href="/learn/registration-of-views-and-bindings-at-runtime">Registration of views and bindings at runtime</anchor-element>
					<anchor-element href="/learn/writing-efficient-code">Writing efficient code</anchor-element>
					<anchor-element href="/learn/composite-views">Composite views</anchor-element>
					
					<hr>
					<h6>Tools</h6>
					<hr>
					
					<anchor-element href="/learn/the-fovea-cli">The Fovea CLI</anchor-element>
					<anchor-element href="/learn/using-fovea-with-rollup">Using Fovea with Rollup</anchor-element>
					<anchor-element href="/learn/using-fovea-with-webpack">Using Fovea with Webpack</anchor-element>
				</app-drawer-section-element>
				<main>
					<header>
						<h4>Coming soon</h4>
						<h6>Documentation is still being written</h6>
						<h6>Read more on</h6>
						<social-links-element></social-links-element>
					</header>
				</main>
			</app-drawer-element>
			<section id="bottom">
				<material-triangles-element accent></material-triangles-element>
				<fovea-footer-element></fovea-footer-element>
			</section>
		`;
	}

	public static styles () {
		return super.styles() + `
			
			material-triangles-element {
				top: auto;
				bottom: 0;
			}
			
			#bottom {
				position: relative;
				z-index: 2;
			}
			
			header {
				background: var(--color-accent-100);
				width: 100%;
				position: relative;
				display: block;
				padding: var(--distance-regular);
			}
			
			header > h4, header > h6:first-of-type {
				color: var(--color-primary-text-light);
			}
			
			header > h6:last-of-type {
				margin-top: 100px;
				color: var(--color-black-54);
			}
			
		`;
	}

	public async didBecomeVisible (): Promise<void> {
		await super.didBecomeVisible();
		eventUtil.listen(this, EventName.RESIZE, window, this.onResize, true, true);
		await waitOperations.wait(0);
		this.onResize();
	}

	public async didBecomeInvisible (): Promise<void> {
		await super.didBecomeInvisible();
		eventUtil.unlisten(this, EventName.RESIZE, window, this.onResize);
		this.hideMenuIcon();
	}

	protected async connectedCallback (): Promise<void> {
		await super.connectedCallback();
		eventUtil.listen(this, EventName.MENU_ICON_CLICKED, window, this.onMenuClicked);
	}

	private onResize () {
		if (window.innerWidth < LearnPage.ALWAYS_OPEN_THRESHOLD) {
			this.closeMenu();
			this.showMenuIcon();
		} else {
			this.openMenu();
			this.hideMenuIcon();
		}
	}

	private showMenuIcon (): void {
		eventUtil.fire(EventName.SHOW_MENU_ICON, window);
	}

	private hideMenuIcon (): void {
		eventUtil.fire(EventName.HIDE_MENU_ICON, window);
	}

	private closeMenu (): void {
		const appDrawer = this.element("app-drawer-element");
		if (appDrawer.hasAttribute("open")) appDrawer.removeAttribute("open");
	}

	private openMenu (): void {
		const appDrawer = this.element("app-drawer-element");
		if (!appDrawer.hasAttribute("open")) appDrawer.setAttribute("open", "");
	}

	private onMenuClicked (): void {
		const appDrawer = this.element("app-drawer-element");
		const isOpen = appDrawer.hasAttribute("open");
		if (isOpen) this.closeMenu();
		else this.openMenu();
	}
}