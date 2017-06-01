import {IComponent, IComponentConstructor} from "./IComponent";

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

	public static define (selector: string): void {
		customElements.define(selector, this);
		const styles = this.styles();
		const markup = this.markup();
		if (styles == null && markup == null) return;

		const actualStyles = styles == null ? "" : `
		<link rel="stylesheet" href="${WP.templateUrl}/shared.css?ver=${WP.version}" />
		<style>${styles}</style>`;
		const actualMarkup = markup == null ? "" : markup;

		const template = document.createElement("template");
		template.innerHTML = `
		${actualStyles}
		${actualMarkup}
	`;
		this.template = template;
	}

	injectTemplate () {
		const ctor = <IComponentConstructor>(<any>this.constructor);
		if (ctor.template == null) return;

		const root = this.attachShadow({mode: "open"});
		const temp = document.importNode(ctor.template.content, true);

		root.appendChild(temp);
	}

	protected connectedCallback () {
	}

	protected disconnectedCallback () {
	}
}

Component.define("component-element");