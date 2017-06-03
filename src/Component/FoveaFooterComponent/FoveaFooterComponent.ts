import {Component, selector} from "../Component/Component";
import {IFoveaFooterComponent} from "./Interface/IFoveaFooterComponent";
import "../AppFooterComponent/AppFooterComponent";
import "../../Component/IconComponent/IconComponent";

@selector("fovea-footer-element")
export class FoveaFooterComponent extends Component implements IFoveaFooterComponent {
	public role = "contentinfo";
	public static styles (): string {
		return ``;
	}

	public static markup (): string {
		return `
			<app-footer-element dark>
					<icon-element icon="fovea-logo" slot="logo" larger light></icon-element>
					<h3 slot="row1">Getting started</h3>
					<a href="/" target="_self" slot="row1">Your first component</a>
					<a href="/" target="_self" slot="row1">Your first app</a>
					<a href="/" target="_self" slot="row1">Tool integration</a>
					
					<h3 slot="row2">Help</h3>
					<a href="/" target="_self" slot="row2">Report issue</a>
					<a href="/" target="_self" slot="row2">Stack overflow</a>
					<a href="/" target="_self" slot="row2">License</a>
					
					<h3 slot="row3">About</h3>
					<a href="/" target="_self" slot="row3">Author</a>
					<a href="/" target="_self" slot="row3">Motivation</a>
					<a href="/" target="_self" slot="row3">Benchmarks</a>
					
					<h3 slot="row4">Resources</h3>
					<a href="/" target="_self" slot="row4">Learn</a>
					<a href="/" target="_self" slot="row4">Advanced</a>
					<a href="/" target="_self" slot="row4">FAQ</a>
					
					<h3 slot="row5">News</h3>
					<a href="/" target="_self" slot="row5">Releases</a>
					<a href="/" target="_self" slot="row5">Blog</a>
					<a href="/" target="_self" slot="row5">Press</a>
					
					<h3 slot="row6">Links</h3>
					<a href="/" target="_self" slot="row6">Github</a>
					<a href="/" target="_self" slot="row6">NPM</a>
					<a href="/" target="_self" slot="row6">Twitter</a>
					
      </app-footer-element>
		`;
	}

}