import {Component, selector} from "../Component/Component";
import {IDataBindingExampleComponent} from "./Interface/IDataBindingExampleComponent";
import "../CodeExampleComponent/CodeExampleComponent";

@selector("data-binding-example-element")
export class DataBindingExampleComponent extends Component implements IDataBindingExampleComponent {

	public static styles (): string {
		return `
			:host {
				text-align: center;
				width: 100%;
				justify-content: center;
				align-content: center;
				position: relative;
				display: inline-flex;
				flex-direction: column;
				margin: 0;
			}
			
			card-element > p {
				margin: 20px 0;
			}
			
			card-element > button-element {
				width: 120px;
			}
			
			card-element > p,
			card-element > strong,
			card-element > h6 {
				user-select: text;
			}
			
			card-element,
			code-example-element {
				max-height: 450px;
				margin: var(--distance-minimum) auto;
			}
			
			@media screen and (min-width: 700px) {
			
				:host {
					flex-direction: row;
				}
				
				card-element,
				code-example-element {
					margin: var(--distance-minimum);
				}
			}
		`;
	}

	public static markup (): string {

		return `
			<code-example-element></code-example-element>
			<card-element>
				<h6>Data-binding has never been easier</h6>
				<p>
					Enjoy binding your data to the DOM will full autocompletion support from your editor. Bindings persist and change immediately when your model changes.
				</p>
				<strong>You can bind to anything</strong>
				<p>
					Not only can you bind complex data to elements and text nodes. Fovea comes with groundbreaking support for binding data to the CSS styles of individual view component instances. No serializing is going on. Instead, the values or references are passed directly. It just works!
				</p>
				<button-element>
					<p>Learn more</p>
				</button-element>
			</card-element>
		`;
	}
}