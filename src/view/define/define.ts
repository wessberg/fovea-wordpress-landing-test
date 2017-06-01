import {IComponentConstructor} from "../component/IComponent";

export function define (selector: string, prototype: IComponentConstructor): void {
	customElements.define(selector, prototype);
	const styles = prototype.styles();
	const markup = prototype.markup();
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
	prototype.template = template;
}