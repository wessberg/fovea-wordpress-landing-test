import {Component, selector} from "../Component/Component";
import {IFoveaFooterComponent} from "./Interface/IFoveaFooterComponent";
import "../AppFooterComponent/AppFooterComponent";
import "../../Component/IconComponent/IconComponent";
import "../AnchorComponent/AnchorComponent";

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
					<anchor-element href="/learn" slot="row1">Your first component</anchor-element>
					<anchor-element href="/learn" slot="row1">Your first app</anchor-element>
					<anchor-element href="/learn" slot="row1">Tool integration</anchor-element>
					
					<h3 slot="row2">Help</h3>
					<anchor-element href="/learn" slot="row2">Report issue</anchor-element>
					<anchor-element href="/learn" slot="row2">Stack overflow</anchor-element>
					<anchor-element href="/learn" slot="row2">License</anchor-element>
					
					<h3 slot="row3">About</h3>
					<anchor-element href="/learn" slot="row3">Author</anchor-element>
					<anchor-element href="/learn" slot="row3">Motivation</anchor-element>
					<anchor-element href="/learn" slot="row3">Benchmarks</anchor-element>
					
					<h3 slot="row4">Resources</h3>
					<anchor-element href="/learn" slot="row4">Learn</anchor-element>
					<anchor-element href="/learn" slot="row4">Advanced</anchor-element>
					<anchor-element href="/learn" slot="row4">FAQ</anchor-element>
					
					<h3 slot="row5">News</h3>
					<anchor-element href="/learn" slot="row5">Releases</anchor-element>
					<anchor-element href="/learn" slot="row5">Blog</anchor-element>
					<anchor-element href="/learn" slot="row5">Press</anchor-element>
					
					<h3 slot="row6">Links</h3>
					<anchor-element href="/learn" slot="row6">Github</anchor-element>
					<anchor-element href="/learn" slot="row6">NPM</anchor-element>
					<anchor-element href="/learn" slot="row6">Twitter</anchor-element>
					
      </app-footer-element>
		`;
	}

}