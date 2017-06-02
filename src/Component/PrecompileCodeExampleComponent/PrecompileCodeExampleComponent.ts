import {Component, selector} from "../Component/Component";
import {IPrecompileCodeExampleComponent} from "./Interface/IPrecompileCodeExampleComponent";

@selector("precompile-code-example-element")
export class PrecompileCodeExampleComponent extends Component implements IPrecompileCodeExampleComponent {
	public static styles () {
		return `
			code-element {
				max-height: inherit;
				max-width: inherit;
				box-shadow: var(--shadow-level3);
				text-align: left;
			}
		`;
	}

	public static markup () {
		return `
			<code-element><!--
		 --><pre class="token"><</pre><!--
		 --><pre class="tagname">img</pre><!--
		 --><pre> </pre><!--
		 --><pre class="attribute_name">id=</pre><!--
		 --><pre class="attribute_value">"placeholderImage"</pre><!--
		 --><pre> </pre><!--
		 --><pre class="attribute_name">src=</pre><!--
		 --><pre class="attribute_value">"</pre><!--
		 --><pre class="token">$</pre><!--
		 --><pre class="brace">{</pre><!--
		 --><pre class="keyword">this</pre><!--
		 --><pre class="token">.</pre><!--
		 --><pre class="property">placeholderMedia</pre><!--
		 --><pre class="token">.</pre><!--
		 --><pre class="property">src</pre><!--
		 --><pre class="brace">}</pre><!--
		 --><pre class="attribute_value">"</pre><!--
		 --><pre> </pre><!--
		 --><pre class="attribute_name">onclick=</pre><!--
		 --><pre class="attribute_value">"</pre><!--
		 --><pre class="token">$</pre><!--
		 --><pre class="brace">{</pre><!--
		 --><pre class="keyword">this</pre><!--
		 --><pre class="token">.</pre><!--
		 --><pre class="property">onPlaceholderTapped</pre><!--
		 --><pre class="brace">}</pre><!--
		 --><pre class="attribute_value">"</pre><!--
		 --><pre class="token">/</pre><!--
		 --><pre class="token">></pre><!--
		 --><br><!--
		 --><pre class="token"><</pre><!--
		 --><pre class="tagname">img</pre><!--
		 --><pre> </pre><!--
		 --><pre class="attribute_name">alt=</pre><!--
		 --><pre class="attribute_value">"placeholderImage"</pre><!--
		 --><pre class="token">$</pre><!--
		 --><pre class="brace">{</pre><!--
		 --><pre class="keyword">this</pre><!--
		 --><pre class="token">.</pre><!--
		 --><pre class="property">currentMedia</pre><!--
		 --><pre class="token">.</pre><!--
		 --><pre class="property">description</pre><!--
		 --><pre class="brace">}</pre><!--
		 --><pre class="attribute_value">"</pre><!--
		 --><pre> </pre><!--
		 --><pre class="attribute_name">id=</pre><!--
		 --><pre class="attribute_value">"mainImage"</pre><!--
		 --><pre class="token">/</pre><!--
		 --><pre class="token">></pre><!--
	--></code-element>
		`;
	}
}