import {IAppDrawerSectionComponent} from "./Interface/IAppDrawerSectionComponent";
import {ScrollComponent} from "../ScrollComponent/ScrollComponent";
import {selector} from "../Component/Component";

@selector("app-drawer-section-element")
export class AppDrawerSectionComponent extends ScrollComponent implements IAppDrawerSectionComponent {

	public static styles (): string {
		return super.styles() + `

			:host {
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				background: var(--color-white-100);
				box-shadow: var(--shadow-level2);
				display: block;
				transform: translate3d(0, 0, 0);
				z-index: 2;
			}
			
			::slotted(:not(hr)) {
				padding: var(--distance-minimum) !important;
				color: var(--color-black-70);
				display: block;
				line-height: 1;
				font-weight: var(--font-weight-regular);
			}
			
			::slotted(:last-child) {
				padding-bottom: var(--distance-large) !important;
			}
			
			::slotted(hr) {
				margin: var(--distance-regular) 0 !important;
			}
			
			::slotted(anchor-element) {
				color: var(--color-primary-text-dark) !important;
			}
			
			::slotted(h1:not(:first-of-type)),
			::slotted(h2:not(:first-of-type)),
			::slotted(h3:not(:first-of-type)),
			::slotted(h4:not(:first-of-type)),
			::slotted(h5:not(:first-of-type)),
			::slotted(h6:not(:first-of-type)) {
				padding-top: 0 !important;
			}

			::slotted(h1),
			::slotted(h2),
			::slotted(h3),
			::slotted(h4),
			::slotted(h5),
			::slotted(h6) {
				margin: 0 !important;
				padding-bottom: 0 !important;
				font-size: var(--font-size-subheading) !important;
				color: var(--color-subheading-dark) !important;
			}
		`;
	}
}