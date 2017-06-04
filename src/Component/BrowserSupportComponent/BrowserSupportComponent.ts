import {Component, selector} from "../Component/Component";
import {IBrowserSupportComponent} from "./Interface/IBrowserSupportComponent";
import "../IconComponent/IconComponent";

@selector("browser-support-element")
export class BrowserSupportComponent extends Component implements IBrowserSupportComponent {
	public role = "complementary";

	public static styles (): string {
		return `

			:host {
				background: var(--color-black-70);
				box-sizing: border-box;
				text-align: center;
				width: 100%;
				justify-content: center;
				align-content: center;
				position: relative;
				display: flex;
				flex-direction: column;
				margin: 0;
			}
			
			h5 {
				color: var(--color-primary-text-light);
			}
			
			.row, #container, .item {
				display: flex;
			}
			
			.item {
				justify-content: flex-start;
				align-content: flex-start;
			}
			
			.item > icon-element {
				margin-right: var(--distance-minimum);
			}
			
			.row, #container {
				justify-content: space-around;
				align-content: space-around;
			}
			
			#container {
				flex-direction: column;
				max-width: 400px;
				width: 100%;
				margin: 0 auto;
			}
			
			.item, .row {
				flex-direction: row;
			}
			
			.row {
				margin-top: var(--distance-minimum);
				margin-bottom: var(--distance-minimum);
				padding: /*var(--distance-regular);*/ 0;
			}
			
		
		`;
	}

	public static markup (): string {
		return `
			<section id="container">
			
				<div class="row">
					<div class="item">
						<icon-element icon="chrome-logo" large></icon-element>
						<h5>Yes</h5>
					</div>
					<div class="item">
						<icon-element icon="ie-logo" large></icon-element>
						<h5>11+</h5>
					</div>
				</div>
				
				<div class="row">
					<div class="item">
						<icon-element icon="safari-logo" large></icon-element>
						<h5>7+</h5>
					</div>
					<div class="item">
						<icon-element icon="firefox-logo" large></icon-element>
						<h5>Yes</h5>
					</div>
				</div>
				
				<div class="row">
					<div class="item">
						<icon-element icon="edge-logo" large></icon-element>
						<h5>Yes</h5>
					</div>
					<div class="item">
						<icon-element icon="brave-logo" large></icon-element>
						<h5>Yes</h5>
					</div>
				</div>
				
			</section>
		`;
	}

}