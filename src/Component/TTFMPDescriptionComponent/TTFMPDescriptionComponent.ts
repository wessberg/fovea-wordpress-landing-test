import {Component, selector} from "../Component/Component";
import {ITTFMPDescriptionComponent} from "./Interface/ITTFMPDescriptionComponent";
import "../IconComponent/IconComponent";

@selector("ttfmp-description-element")
export class TTFMPDescriptionComponent extends Component implements ITTFMPDescriptionComponent {
	public role = "complementary";

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
				margin: 0 auto;
				max-width: 650px;
			}
			
			.headline, .chunk > h6 {
				padding-top: var(--distance-regular);
				color: var(--color-primary-text-light);
				user-select: text;
			}
			
			#chunkContainer {
				display: flex;
				flex-direction: row;
				align-content: space-around;
				justify-content: space-around;
			}
			
			.chunk {
				display: flex;
				flex-direction: column;
				text-align: left;
				align-content: space-around;
				justify-content: space-around;
			}
			
			.chunk > h6 {
				margin: 0;
				padding: 0;
				line-height: 1.2;
			}
			
			#chunk1 > h6 {
				color: var(--color-white-12);
			}
			
			#chunk2 > h6 {
				color: var(--color-white-38);
			}
			
			#chunk3 > h6 {
				color: var(--color-white-50);
			}
			
			#chunk4 > h6 {
				color: var(--color-white-70);
			}
			
			#chunk5 > h6 {
				color: var(--color-white-100);
			}
			
			#browserFrameIcon {
				width: 712px;
				max-width: 100%;
				height: 402px;
				max-height: calc(100vw / 2);
				margin: var(--distance-minimum) auto 0 auto;
			}
			
		`;
	}

	public static markup (): string {

		return `
			<h5 class="headline">Reducing Time To First Meaningful Paint</h5>
			
			<article id="chunkContainer">
				<div class="chunk" id="chunk1">
					<h6>368kb</h6>
					<h6>200ms</h6>
				</div>
				<div class="chunk" id="chunk2">
					<h6>782kb</h6>
					<h6>800ms</h6>
				</div>
				<div class="chunk" id="chunk3">
					<h6>1.3mb</h6>
					<h6>2s</h6>
				</div>
				<div class="chunk" id="chunk4">
					<h6>2.6mb</h6>
					<h6>4.8s</h6>
				</div>
				<div class="chunk" id="chunk5">
					<h6>3.8mb+</h6>
					<h6>7s+</h6>
				</div>
			</article>
			<icon-element id="browserFrameIcon" icon="browser-frame"></icon-element>
			
			<h5 class="headline">Fovea <strong>drastically</strong> reduces the potential size of your app and produces much faster FMPs due to the compilation step:</h5>
		`;
	}
}