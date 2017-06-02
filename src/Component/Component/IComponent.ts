export interface IComponent extends HTMLElement {
	role: string;
	tabindex: string;
}

export interface IComponentConstructor {
	new (): IComponent;
	styles (): string|null;
	markup (): string|null;
	template: HTMLTemplateElement|null;
}