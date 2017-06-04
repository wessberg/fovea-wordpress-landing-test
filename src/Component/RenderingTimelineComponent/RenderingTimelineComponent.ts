import {Component, selector} from "../Component/Component";
import {IRenderingTimelineComponent} from "./Interface/IRenderingTimelineComponent";
import "../ScrollComponent/ScrollComponent";

@selector("rendering-timeline-element")
export class RenderingTimelineComponent extends Component implements IRenderingTimelineComponent {

	public static styles (): string {
		return `

			:host {
				text-align: center;
				width: 100%;
				position: relative;
				display: block;
				margin: 0 auto;
				overflow: hidden;
			}
			
			:host, table {
				transform: translate3d(0,0,0);
				backface-visibility: hidden;
			}
			
			table {
				table-layout: fixed;
				border-collapse: collapse;
			}
			
			scroll-element {
				padding: 0;
				margin: 0;
				position: relative;
			}
			
			.row {
				position: relative;
				padding: 0;
				margin: 0;
			}
			
			scroll-element, .row {
				flex-direction: row;
			}
			
			scroll-element, .row, .tick {
				display: flex;
				align-content: space-around;
			}
			
			.tick {
				flex-direction: column;
			}
			
			.tick > p,
			.marker > h6 {
				user-select: text;
			}
			
			hr {
				border-radius: var(--box-radius);
				margin: auto;
			}
			
			.marker > h6 {
				margin-bottom: 2vw;
				color: var(--color-primary-text-light);
			}
			
			.tick {
				padding-top: 3px;
				height: 28px;
				margin: 0 1vw;
			}
			
			.tick > p {
				color: var(--color-white-26);
			}
			
			hr.vertical {
				width: 4px;
				height: 31px;
			}
			
			hr.horizontal {
				width: 31px;
				height: 6px;
			}
			
			tr {
				height: 55px;
			}
			
			rectangle-item-element {
				width: 130px;
			}
			
		`;
	}

	public static markup (): string {
		return `
			<scroll-element direction="both">
				<table>
				
					<tr>
						<td class="marker">
							<h6>0</h6>
						</td>
						<td class="row">
							<div class="tick">
								<p>0.2</p>
								<hr class="horizontal">
							</div>
							<div class="tick">
								<p>0.4</p>
								<hr class="horizontal">
							</div>
							<div class="tick">
								<p>0.6</p>
								<hr class="horizontal">
							</div>
							<div class="tick">
								<p>0.8</p>
								<hr class="horizontal">
							</div>
						</td>
						<td class="marker">
							<h6>1</h6>
						</td>
						<td class="row">
							<div class="tick">
								<p>1.2</p>
								<hr class="horizontal">
							</div>
							<div class="tick">
								<p>1.4</p>
								<hr class="horizontal">
							</div>
							<div class="tick">
								<p>1.6</p>
								<hr class="horizontal">
							</div>
							<div class="tick">
								<p>1.8</p>
								<hr class="horizontal">
							</div>
						</td>
						<td class="marker">
							<h6>2</h6>
						</td>
						<td class="row">
							<div class="tick">
								<p>2.2</p>
								<hr class="horizontal">
							</div>
							<div class="tick">
								<p>2.4</p>
								<hr class="horizontal">
							</div>
							<div class="tick">
								<p>2.6</p>
								<hr class="horizontal">
							</div>
							<div class="tick">
								<p>2.8</p>
								<hr class="horizontal">
							</div>
						</td>
						<td class="marker">
							<h6>3</h6>
						</td>
						<td class="row">
							<div class="tick">
								<p>3.2</p>
								<hr class="horizontal">
							</div>
							<div class="tick">
								<p>3.4</p>
								<hr class="horizontal">
							</div>
							<div class="tick">
								<p>3.6</p>
								<hr class="horizontal">
							</div>
							<div class="tick">
								<p>3.8</p>
								<hr class="horizontal">
							</div>
						</td>
						<td class="marker">
							<h6>4</h6>
						</td>
						<td class="row">
							<div class="tick">
								<p>4.2</p>
								<hr class="horizontal">
							</div>
							<div class="tick">
								<p>4.4</p>
								<hr class="horizontal">
							</div>
							<div class="tick">
								<p>4.6</p>
								<hr class="horizontal">
							</div>
							<div class="tick">
								<p>4.8</p>
								<hr class="horizontal">
							</div>
						</td>
						<td class="marker">
							<h6>5</h6>
						</td>
						<td class="row">
							<div class="tick">
								<p>5.2</p>
								<hr class="horizontal">
							</div>
							<div class="tick">
								<p>5.4</p>
								<hr class="horizontal">
							</div>
							<div class="tick">
								<p>5.6</p>
								<hr class="horizontal">
							</div>
							<div class="tick">
								<p>5.8</p>
								<hr class="horizontal">
							</div>
						</td>
						<td class="marker">
							<h6>6</h6>
						</td>
					</tr>
					
					<tr>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get00Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get01Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get02Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get03Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get04Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get05Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
					</tr>
					
					<tr>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get10Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get11Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get12Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get13Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get14Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get15Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
					</tr>
					
					<tr>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get20Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get21Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get22Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get23Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get24Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get25Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
					</tr>
					
					<tr>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get30Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get31Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get32Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get33Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get34Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get35Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
					</tr>
					
					<tr>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get40Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get41Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get42Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get43Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get44Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get45Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
					</tr>
					
					<tr>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get50Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get51Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get52Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get53Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get54Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
						<td class="column">
							${this.get55Markup()}
						</td>
						<td class="tick">
							<hr class="vertical">
						</td>
					</tr>
					
				</table>
			</scroll-element>
		`;
	}

	protected static get00Markup (): string {
		return "";
	}

	protected static get01Markup (): string {
		return "";
	}

	protected static get02Markup (): string {
		return "";
	}

	protected static get03Markup (): string {
		return "";
	}

	protected static get04Markup (): string {
		return "";
	}

	protected static get05Markup (): string {
		return "";
	}

	protected static get10Markup (): string {
		return "";
	}

	protected static get11Markup (): string {
		return "";
	}

	protected static get12Markup (): string {
		return "";
	}

	protected static get13Markup (): string {
		return "";
	}

	protected static get14Markup (): string {
		return "";
	}

	protected static get15Markup (): string {
		return "";
	}

	protected static get20Markup (): string {
		return "";
	}

	protected static get21Markup (): string {
		return "";
	}

	protected static get22Markup (): string {
		return "";
	}

	protected static get23Markup (): string {
		return "";
	}

	protected static get24Markup (): string {
		return "";
	}

	protected static get25Markup (): string {
		return "";
	}

	protected static get30Markup (): string {
		return "";
	}

	protected static get31Markup (): string {
		return "";
	}

	protected static get32Markup (): string {
		return "";
	}

	protected static get33Markup (): string {
		return "";
	}

	protected static get34Markup (): string {
		return "";
	}

	protected static get35Markup (): string {
		return "";
	}

	protected static get40Markup (): string {
		return "";
	}

	protected static get41Markup (): string {
		return "";
	}

	protected static get42Markup (): string {
		return "";
	}

	protected static get43Markup (): string {
		return "";
	}

	protected static get44Markup (): string {
		return "";
	}

	protected static get45Markup (): string {
		return "";
	}

	protected static get50Markup (): string {
		return "";
	}

	protected static get51Markup (): string {
		return "";
	}

	protected static get52Markup (): string {
		return "";
	}

	protected static get53Markup (): string {
		return "";
	}

	protected static get54Markup (): string {
		return "";
	}

	protected static get55Markup (): string {
		return "";
	}
}