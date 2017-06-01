export interface IComponent extends HTMLElement {
}

export interface IComponentConstructor {
	new (): IComponent;
	styles (): string|null;
	markup (): string|null;
	template: HTMLTemplateElement|null;
}