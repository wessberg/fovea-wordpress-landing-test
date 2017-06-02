import {Component, selector} from "../Component/Component";
import {IToolsComponent} from "./Interface/IToolsComponent";
import "../FoveaRollupWebpackComponent/FoveaRollupWebpackComponent";
import "../CardComponent/CardComponent";
import "../IconComponent/IconComponent";

@selector("tools-element")
export class ToolsComponent extends Component implements IToolsComponent {

	public static styles (): string {
		return `
			:host {
				text-align: center;
				width: 100%;
				justify-content: center;
				align-content: center;
				position: relative;
				display: flex;
				flex-direction: column;
				margin: 0;
			}
			
			#row1 {
				flex-direction: column;
			}
			
			#row2 {
				flex-direction: column-reverse;
			}
			
			#row1, #row2 {
				display: inline-flex;
				justify-content: center;
				align-content: center;
				max-width: var(--width-frame-max);
				margin: 0 auto;
			}
			
			#row2 > icon-element {
				height: var(--height-icon-larger);
			}
			
			#row1 > fovea-rollup-webpack-element,
			#row2 > icon-element {
				align-self: center;
				margin-top: 15px;
			}
			
			#row1 > fovea-rollup-webpack-element,
			#row2 > icon-element {
				flex-grow: 1;
			}
			
			#row1,
			#row2 {
				transform: translate3d(0, -60px, 0);
				margin-top: 20px;
				margin-bottom: 20px;
			}
			
			#row1 > fovea-rollup-webpack-element {
				padding-right: var(--distance-minimum);
			}
			
			card-element > button-element {
				width: 120px;
			}
			
			card-element > p,
			card-element > h6,
			a {
				user-select: text;
			}
			
			card-element {
				max-height: 350px;
				margin: var(--distance-minimum) auto;
			}
			
			
			
			@media screen and (min-width: 700px) {
				
				card-element {
					margin: var(--distance-minimum);
				}
				
				#row1, #row2 {
					flex-direction: row;
					margin-top: 0;
					margin-bottom: 0;
				}
				
				#row1 > fovea-rollup-webpack-element,
				#row2 > icon-element {
					margin-top: 0;
				}
			}
		`;
	}

	public static markup (): string {
		return `
			<section id="row1">
				<card-element>
						<h6>Works with your existing build tools</h6>
						<p>
							Fovea won’t ask you to change your tools, habits or the way you write code. Instead, Fovea is a simple plugin for your favorite bundler such as <a href="https://rollupjs.org/" target="_blank">rollup</a> or <a href="https://webpack.js.org/" target="_blank">webpack</a>.
						</p>
						<button-element>
							<p>Learn more</p>
						</button-element>
				</card-element>
				<fovea-rollup-webpack-element></fovea-rollup-webpack-element>
			</section>
			
			<section id="row2">
				<icon-element icon="typescript-logo" extreme></icon-element>
				<card-element>
						<h6>Built with TypeScript</h6>
						<p>
							Fovea is built with TypeScript. Whether or not you annotate your code, you will have a great development experience!
						</p>
						<button-element>
							<p>Learn more</p>
						</button-element>
				</card-element>
			</section>
		`;
	}

}