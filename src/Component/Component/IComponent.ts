export interface IComponent extends HTMLElement {
	role: string;
	tabindex: string;
	element (selector: string): HTMLElement;
	domRoot: ShadowRoot|HTMLElement;
}

export interface IComponentConstructor {
	new (): IComponent;
	styles (): string|null;
	markup (): string|null;
	template: HTMLTemplateElement|null;
}