import {IComponent, IComponentConstructor} from "./IComponent";
import {define} from "../define/define";

export class Component extends HTMLElement implements IComponent {
	public static template: HTMLTemplateElement|null = null;

	constructor () {
		super();
		this.injectTemplate();
	}

	public static styles (): string|null {
		return null;
	}

	public static markup (): string|null {
		return null;
	}

	injectTemplate () {
		const ctor = <IComponentConstructor>(<any>this.constructor);
		if (ctor.template == null) return;

		const root = this.attachShadow({mode: 'open'});
		const temp = document.importNode(ctor.template.content, true);

		root.appendChild(temp);
	}
}

define("root-component", Component);