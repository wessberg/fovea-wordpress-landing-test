import {Page} from "../Page/Page";
import {IHomePage} from "./Interface/IHomePage";

export class HomePage extends Page implements IHomePage {

	public static markup (): string {
		return `
			<section id="highlights">
				<card-element center>
						<h4>Tiny</h4>
						<p>The days of huge monolithic Javascript bundles are over. Our users deserve better. Fovea compiles your view components into DOM-instructions ahead-of-time and then gets out of the way. Completely.</p>
						<div class="flex"></div>
						<icon-element icon="fovea-tiny" largest primary></icon-element>
				</card-element>
		
				<card-element center>
						<h4>Super fast</h4>
						<p>No dirty checking. No DOM traversal or parsing. Instead, Fovea maps your bindings directly to nodes and does all the heavy lifting on compile time. When something changes, Fovea simply looks up the bound node and updates the value immediately.</p>
						<div class="flex"></div>
						<icon-element icon="fovea-fast" largest primary></icon-element>
				</card-element>
		
				<card-element center>
						<h4>Natural & Intuitive</h4>
						<p>Fovea is built on modern standards such as Custom Elements and declarative data binding through string interpolation. It believes that the DOM is fast as it is with no need to ship an entire virtual DOM implementation on runtime.</p>
						<div class="flex"></div>
						<icon-element icon="fovea-intuitive" largest primary></icon-element>
				</card-element>
			</section>
		`;
	}

	public static styles () {
		return super.styles() + `

			#highlights {
				width: 100%;
				justify-content: center;
				display: inline-flex;
			}
			
			#highlights > card-element > p,
			#highlights > card-element > h4 {
				user-select: text;
			}
			
			#highlights > card-element > icon-element {
				margin-top: var(--distance-regular);
			}
			
			.flex {
			flex-grow: 1;
			}
		`;
	}

}

HomePage.define("home-page-element");