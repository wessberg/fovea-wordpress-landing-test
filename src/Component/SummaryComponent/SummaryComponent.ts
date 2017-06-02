import {ISummaryComponent} from "./Interface/ISummaryComponent";
import {Component, selector} from "../Component/Component";
import "../CodeComponent/CodeComponent";

@selector("summary-element")
export class SummaryComponent extends Component implements ISummaryComponent {

	public static styles (): string {
		return `
			:host {
				height: var(--height-summary);
				width: 100%;
				display: block;
				position: relative;
				background: var(--color-primary-100);
				align-content: center;
				justify-content: center;
				text-align: center;
				margin: 0;
			}
			
			h4 {
				padding-top: var(--distance-regular);
				color: var(--color-primary-text-light);
			}
		`;
	}

	public static markup (): string {
		return `
			<h4>Summary</h4>
			<code-element><!--
		 --><pre class="keyword">class</pre><!--
		 --><pre> </pre><!--
		 --><pre class="identifier">MyView</pre><!--
		 --><pre> </pre><!--
		 --><pre class="keyword">extends</pre><!--
		 --><pre> </pre><!--
		 --><pre class="identifier">View</pre><!--
		 --><pre> </pre><!--
		 --><pre class="brace">{</pre><!--
		 --><br><pre>  </pre><!--
		 --><pre class="decorator">@prop</pre><!--
		 --><pre> </pre><!--
		 --><pre class="property">name</pre><!--
		 --><pre class="token">:</pre><!--
		 --><pre> </pre><!--
		 --><pre class="keyword">string</pre><!--
		 --><pre class="token">;</pre><!--
		 --><br><pre>  </pre><!--
		 --><pre class="decorator">@prop</pre><!--
		 --><pre> </pre><!--
		 --><pre class="property">media</pre><!--
		 --><pre class="token">:</pre><!--
		 --><pre> </pre><!--
		 --><pre class="type">IMedia</pre><!--
		 --><pre class="token">;</pre><!--
		 --><br><pre>  </pre><!--
		 --><pre class="decorator">@prop</pre><!--
		 --><pre> </pre><!--
		 --><pre class="property">numbers</pre><!--
		 --><pre class="token">:</pre><!--
		 --><pre> </pre><!--
		 --><pre class="keyword">number</pre><!--
		 --><pre class="bracket">[]</pre><!--
		 --><pre class="token">;</pre><!--
		 --><br><pre>  </pre><!--
		 --><pre class="decorator">@prop</pre><!--
		 --><pre> </pre><!--
		 --><pre class="property">myFavoriteColor</pre><!--
		 --><pre class="token">:</pre><!--
		 --><pre> </pre><!--
		 --><pre class="keyword">string</pre><!--
		 --><pre class="token">;</pre><!--
		 --><br><!--
		 --><br><pre>  </pre><!--
		 --><pre class="method">markup</pre><!--
		 --><pre> </pre><!--
		 --><pre class="parenthesis">()</pre><!--
		 --><pre> </pre><!--
		 --><pre class="brace">{</pre><!--
		 --><br><pre>  </pre><!--
		 
	--></code-element>
		`;
	}

}