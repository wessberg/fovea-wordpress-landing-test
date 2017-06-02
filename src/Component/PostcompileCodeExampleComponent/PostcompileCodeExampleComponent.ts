import {Component, selector} from "../Component/Component";
import {IPostcompileCodeExampleComponent} from "./Interface/IPostcompileCodeExampleComponent";

@selector("postcompile-code-example-element")
export class PostcompileCodeExampleComponent extends Component implements IPostcompileCodeExampleComponent {
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
		 --><pre class="keyword">const</pre><!--
		 --><pre> </pre><!--
		 --><pre class="variable">_0</pre><!--
		 --><pre> </pre><!--
		 --><pre class="token">=</pre><!--
		 --><pre> </pre><!--
		 --><pre class="function">__createElementHelper</pre><!--
		 --><pre class="parenthesis">(</pre><!--
		 --><pre class="string">"img"</pre><!--
		 --><pre class="parenthesis">)</pre><!--
		 --><pre class="token">;</pre><!--
		 --><pre class="function">__addBindingHelper</pre><!--
		 --><pre class="parenthesis">(</pre><!--
		 --><pre class="keyword">this</pre><!--
		 --><pre class="token">,</pre><!--
		 --><pre> </pre><!--
		 --><pre class="variable">_0</pre><!--
		 --><pre class="token">,</pre><!--
		 --><pre> </pre><!--
		 --><pre class="string">"placeholderMedia"</pre><!--
		 --><pre class="token">,</pre><!--
		 --><pre> </pre><!--
		 --><pre class="bracket">[</pre><!--
		 --><pre class="string">"src"</pre><!--
		 --><pre class="bracket">]</pre><!--
		 --><pre class="token">,</pre><!--
		 --><pre> </pre><!--
		 --><pre class="string">"src"</pre><!--
		 --><pre class="parenthesis">)</pre><!--
		 --><pre class="token">,</pre><!--
		 --><br><!--
		 --><pre class="keyword">this</pre><!--
		 --><pre class="token">.</pre><!--
		 --><pre class="property">placeholderMedia</pre><!--
		 --><pre> </pre><!--
		 --><pre class="token">!==</pre><!--
		 --><pre> </pre><!--
		 --><pre class="keyword">void</pre><!--
		 --><pre> </pre><!--
		 --><pre class="number">0</pre><!--
		 --><pre> </pre><!--
		 --><pre class="token">&&</pre><!--
		 --><pre> </pre><!--
		 --><pre class="keyword">this</pre><!--
		 --><pre class="token">.</pre><!--
		 --><pre class="property">placeholderMedia</pre><!--
		 --><pre class="token">.</pre><!--
		 --><pre class="property">src</pre><!--
		 --><pre> </pre><!--
		 --><pre class="token">!==</pre><!--
		 --><pre> </pre><!--
		 --><pre class="keyword">void</pre><!--
		 --><pre> </pre><!--
		 --><pre class="number">0</pre><!--
		 --><pre class="comment">... // And so on</pre><!--
	--></code-element>
		`;
		// And so on
	}
}