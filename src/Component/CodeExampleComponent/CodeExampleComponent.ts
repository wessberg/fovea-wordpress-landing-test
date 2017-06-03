import {Component, selector} from "../Component/Component";
import {ICodeExampleComponent} from "./Interface/ICodeExampleComponent";
import "../CodeComponent/CodeComponent";

@selector("code-example-element")
export class CodeExampleComponent extends Component implements ICodeExampleComponent {

	public static styles () {
		return `
			code-element {
				position: relative;
				width: 100%;
				max-width: 369px;
				max-height: inherit;
				box-shadow: var(--shadow-level3);
			}
		`;
	}

	public static markup () {
		return `
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
		 --><br><pre>    </pre><!--
		 --><pre class="keyword">return</pre><!--
		 --><pre> </pre><!--
		 --><pre class="token">\`</pre><!--
		 --><br><pre>      </pre><!--
		 --><pre class="token"><</pre><!--
		 --><pre class="tagname">p</pre><!--
		 --><pre class="token">></pre><!--
		 --><pre class="string">Hello </pre><!--
		 --><pre class="token">$</pre><!--
		 --><pre class="brace">{</pre><!--
		 --><pre class="keyword">this</pre><!--
		 --><pre class="token">.</pre><!--
		 --><pre class="property">name</pre><!--
		 --><pre class="brace">}</pre><!--
		 --><pre class="string">!</pre><!--
		 --><pre class="token"><</pre><!--
		 --><pre class="token">/</pre><!--
		 --><pre class="tagname">p</pre><!--
		 --><pre class="token">></pre><!--
		 --><br><pre>      </pre><!--
		 --><pre class="token"><</pre><!--
		 --><pre class="tagname">img</pre><!--
		 --><pre> </pre><!--
		 --><pre class="attribute_name">src=</pre><!--
		 --><pre class="attribute_value">"</pre><!--
		 --><pre class="token">$</pre><!--
		 --><pre class="brace">{</pre><!--
		 --><pre class="keyword">this</pre><!--
		 --><pre class="token">.</pre><!--
		 --><pre class="property">media</pre><!--
		 --><pre class="token">.</pre><!--
		 --><pre class="property">src</pre><!--
		 --><pre class="brace">}</pre><!--
		 --><pre class="attribute_value">"</pre><!--
		 --><pre class="token">/</pre><!--
		 --><pre class="token">></pre><!--
		 --><br><pre>      </pre><!--
		 --><pre class="token"><</pre><!--
		 --><pre class="tagname">span</pre><!--
		 --><pre> </pre><!--
		 --><pre class="attribute_name">foreach=</pre><!--
		 --><pre class="attribute_value">"</pre><!--
		 --><pre class="token">$</pre><!--
		 --><pre class="brace">{</pre><!--
		 --><pre class="keyword">this</pre><!--
		 --><pre class="token">.</pre><!--
		 --><pre class="property">numbers</pre><!--
		 --><pre class="brace">}</pre><!--
		 --><pre class="attribute_value">"</pre><!--
		 --><pre class="token">></pre><!--
		 --><br><pre>        </pre><!--
		 --><pre class="token">$</pre><!--
		 --><pre class="brace">{</pre><!--
		 --><pre class="keyword">this</pre><!--
		 --><pre class="token">.</pre><!--
		 --><pre class="property">numbers</pre><!--
		 --><pre class="bracket">[</pre><!--
		 --><pre class="type">index</pre><!--
		 --><pre class="bracket">]</pre><!--
		 --><pre class="brace">}</pre><!--
		 --><br><pre>      </pre><!--
		 --><pre class="token"><</pre><!--
		 --><pre class="token">/</pre><!--
		 --><pre class="tagname">span</pre><!--
		 --><pre class="token">></pre><!--
		 --><br><pre>    </pre><!--
		 --><pre class="token">\`</pre><!--
		 --><pre class="token">;</pre><!--
		 --><br><pre>  </pre><!--
		 --><pre class="brace">}</pre><!--
		 --><br><!--
		 --><br><pre>  </pre><!--
		 --><pre class="method">styles</pre><!--
		 --><pre> </pre><!--
		 --><pre class="parenthesis">()</pre><!--
		 --><pre> </pre><!--
		 --><pre class="brace">{</pre><!--
		 --><br><pre>    </pre><!--
		 --><pre class="keyword">return</pre><!--
		 --><pre> </pre><!--
		 --><pre class="token">\`</pre><!--
		 --><br><pre>      </pre><!--
		 --><pre class="css_selector_name">p</pre><!--
		 --><pre> </pre><!--
		 --><pre class="brace">{</pre><!--
		 --><br><pre>        </pre><!--
		 --><pre class="css_property_name">color</pre><!--
		 --><pre class="token">:</pre><!--
		 --><pre> </pre><!--
		 --><pre class="token">$</pre><!--
		 --><pre class="brace">{</pre><!--
		 --><pre class="keyword">this</pre><!--
		 --><pre class="token">.</pre><!--
		 --><pre class="property">myFavoriteColor</pre><!--
		 --><pre class="brace">}</pre><!--
		 --><pre class="token">;</pre><!--
		 --><br><pre>        </pre><!--
		 --><pre class="css_property_name">font-size</pre><!--
		 --><pre class="token">:</pre><!--
		 --><pre> </pre><!--
		 --><pre class="token">$</pre><!--
		 --><pre class="brace">{</pre><!--
		 --><pre class="identifier">Text</pre><!--
		 --><pre class="token">.</pre><!--
		 --><pre class="property">DEFAULT_SIZE</pre><!--
		 --><pre class="brace">}</pre><!--
		 --><pre class="token">px</pre><!--
		 --><pre class="token">;</pre><!--
		 --><br><pre>      </pre><!--
		 --><pre class="brace">}</pre><!--
		 --><br><pre>    </pre><!--
		 --><pre class="token">\`</pre><!--
		 --><pre class="token">;</pre><!--
		 --><br><pre>  </pre><!--
		 --><pre class="brace">}</pre><!--
		 --><br><!--
		 --><pre class="brace">}</pre><!--
	--></code-element>
		`;
	}
}