import "../AnchorComponent/AnchorComponent";
import "../CodeComponent/CodeComponent";
import {Component, selector} from "../Component/Component";
import {IDataBindingExampleComponent} from "./Interface/IDataBindingExampleComponent";
import {DataBindingCodeExample} from "../../CodeExample/DataBinding/DataBinding";

@selector("data-binding-example-element")
export class DataBindingExampleComponent extends Component implements IDataBindingExampleComponent {

	public static styles (): string {
		return `
			:host {
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
			
			card-element > p {
				margin: 20px 0;
			}
			
			card-element > anchor-element > button-element {
				width: 120px;
			}
			
			card-element > p,
			card-element > strong,
			card-element > h6 {
				user-select: text;
			}
			
			card-element,
			code-element {
				margin: var(--distance-minimum) auto;
				width: 100%;
				max-width: 369px;
				height: 100%;
			}
			
			@media screen and (min-width: 700px) {
			
				:host {
					flex-direction: row;
				}

				card-element,
				code-element {
					margin: 0 var(--distance-minimum);
					height: 500px;
					max-width: calc((100% / 2) - (var(--distance-minimum) * 2));
				}
			}
			
			@media screen and (min-width: 825px) {
	
				card-element,
				code-element {
					max-height: 450px;
				}
			}

		`;
	}

	public static markup (): string {

		return `
			<code-element shadow>${DataBindingCodeExample}</code-element>
			<card-element>
				<h6>Data-binding has never been easier</h6>
				<p>
					Enjoy binding your data to the DOM will full autocompletion support from your editor. Bindings persist and change immediately when your model changes.
				</p>
				<strong>You can bind to anything</strong>
				<p>
					Not only can you bind complex data to elements and text nodes. Fovea comes with groundbreaking support for binding data to the CSS styles of individual view component instances. No serializing is going on. Instead, the values or references are passed directly. It just works!
				</p>
				<anchor-element href="/learn">
					<button-element>
						<p>Learn more</p>
					</button-element>
				</anchor-element>
			</card-element>
		`;
	}
}