import "../IconComponent/IconComponent";
import "../HeroComponent/HeroComponent";
import "../AnchorComponent/AnchorComponent";
import "../CardComponent/CardComponent";
import "../ImageComponent/ImageComponent";
import {IAboutHeroComponent} from "./Interface/IAboutHeroComponent";
import {Component, selector} from "../Component/Component";
import {Resource} from "../../Static/Resource/Resource";

@selector("about-hero-element")
export class AboutHeroComponent extends Component implements IAboutHeroComponent {
	public role = "banner";

	public static markup (): string {
		return `
			<hero-element center>
				<div id="builtWithHeartContainer">
					<h4 class="headline">Built with</h4>
					<icon-element icon="heart-fill" larger warning></icon-element>
				</div>
				<h4 class="headline">For developers.</h4>
				<h4 class="headline">And for our users.</h4>
				
				<section id="cards">
					<card-element id="descriptionCard">
						<h6>Use the platform.</h6>
						<p>
							Fovea was built to prove a point: A great development experience doesn’t have to mean a bad user experience.
						</p>
						<p>
							In 2016, things were looking down for web development. Since browserify, web apps had become larger and larger and grown to a point where several megabytes of JavaScript code needed to be fetched and parsed by the client before first paint.
						</p>
						<p>
							The first step in attempting to solve this problem was to recognize that the browser can do lots of cool things on its own. The second step was to recognize that more often than not, libraries and frameworks add a lot of overhead to web applications on runtime. The third step was to recognize that by leveraging native browser APIs on runtime and shifting the complexities of parsing and upgrading elements to compile-time, the problem could be solved.
						</p>
						<p>
							And so, Fovea was born.
						</p>
						</p>
					</card-element>
					<card-element id="authorCard">
						<image-element width="321" height="321" cover autoload src="${Resource.path.lib.asset.img.author}"></image-element>
						<h6 id="authorName">FREDERIK WESSBERG</h6>
						<p>
							Frederik is the creator of Fovea and the technical lead of the project. He has open-sourced more than 30 projects, works at <anchor-element href="https://ideanote.io" target="_blank">Ideanote</anchor-element> and is a student at the <anchor-element href="https://itu.dk" target="_blank">IT-University of Copenhagen</anchor-element>.
						</p>
						
						<section id="links">
						
							<anchor-element href="https://npmjs.com/~wessberg" target="_blank">
								<button-element no-background round>
									<icon-element icon="npm-logo" medium></icon-element>
								</button-element>
							</anchor-element>
							
							<anchor-element href="https://github.com/wessberg" target="_blank">
								<button-element no-background round>
									<icon-element icon="github-logo" medium></icon-element>
								</button-element>
							</anchor-element>
							
							<anchor-element href="https://twitter.com/FredWessberg" target="_blank">
								<button-element no-background round>
									<icon-element icon="twitter-logo" medium></icon-element>
								</button-element>
							</anchor-element>
							
						</section>
					</card-element>
				</section>
			</hero-element>
		`;
	}

	public static styles (): string {
		return `
			#builtWithHeartContainer,
			#links {
				display: inline-flex;
				flex-direction: row;
			}

			#builtWithHeartContainer {
				align-content: center;
				justify-content: center;
			}
			
			#links {
				margin-top: var(--distance-regular);
				align-content: flex-end;
				justify-content: flex-end;
			}
			
			#builtWithHeartContainer > .headline {
				margin-bottom: 0;
				line-height: 1.5;
				margin-right: var(--distance-minimum);
			}
		
			.headline {
				color: var(--color-primary-text-light);
				font-weight: var(--font-weight-bold);
			}
			
			.headline,
			card-element > p,
			card-element > strong,
			card-element > h6,
			card-element > anchor-element {
				user-select: text;
			}
			
			#descriptionCard > p:not(:last-of-type) {
				margin: var(--distance-minimum) 0;
			}
			
			#authorCard > image-element {
				max-width: 321px;
				max-height: 321px;
			}
			
			card-element {
				margin: var(--distance-minimum) auto;
				width: 100%;
				height: 100%;
			}
			
			#descriptionCard {
				max-width: 546px;
				flex-grow: 2;
			}
			
			#authorCard {
				flex-grow: 1;
				max-width: 321px;
			}
			
			#authorName {
				margin: 20px 0;
			}
			
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
			
			#links button-element {
				width: var(--width-icon-medium);
				height: var(--height-icon-medium);
			}
			
			@media screen and (min-width: 700px) {
			
				#cards {
					flex-direction: row;
				}

				card-element {
					margin: 0 var(--distance-minimum);
		
					/*max-width: calc((100% / 2) - (var(--distance-minimum) * 2));*/
				}
			}

		`;
	}
}