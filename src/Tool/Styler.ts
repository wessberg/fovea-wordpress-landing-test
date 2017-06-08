import {CodeAnalyzer} from "@wessberg/codeanalyzer";
import {Marshaller} from "@wessberg/marshaller";
import {TypeDetector} from "@wessberg/typedetector";
import {FileLoader} from "@wessberg/fileloader";
import {Config} from "@wessberg/environment";
import PostCSS from "postcss";
import CSSRemoveHover from "postcss-hover";
import CSSNext from "postcss-cssnext";
import MagicString from "magic-string";
import CSSNano from "cssnano";

let rollupOptions: IRollupOptions;

export interface IRollupOptions {
	dest: string;
	entry: string|string[];
	moduleName?: string;
	format?: string;
	sourceMap?: string;
	treeshake?: boolean;
}

export interface ITransformResult {
	code: string;
	map: string|{ mappings: string };
}

const typeDetector = new TypeDetector();
const analyzer = new CodeAnalyzer(new Marshaller(typeDetector), new FileLoader());
const extraPlugins = Config.MOBILE ? [CSSRemoveHover] : [];
const basePlugins = [CSSNext({warnForDuplicates: false})];
const productionPlugins = Config.PRODUCTION ? [CSSNano] : [];
const transpiler = PostCSS([...extraPlugins, ...basePlugins, ...productionPlugins]);

/**
 * This guy simply just minifies the inline CSS, autoprefixes variables and removes :hover pseudo-selectors if required.
 * @constructor
 */
export default function Styler () {

	return {
		name: "Styler",

		options (opts: IRollupOptions): void {
			rollupOptions = opts;
		},

		async transform (code: string, id: string): Promise<ITransformResult|null> {
			let hasAltered = false;

			try {
				const classes = analyzer.getClassDeclarationsForFile(id);
				const keys = Object.keys(classes);
				if (keys.length < 1) return null;

				const magicString = new MagicString(code);

				await Promise.all(keys.map(async key => {
					const method = classes[key].methods["styles"];
					if (method == null || method.returnStatement == null || method.returnStatement.contents == null) return;
					const cssStartsAtIndex = method.returnStatement.contents.indexOf("`") +1;
					const cssEndsAtIndex = method.returnStatement.contents.lastIndexOf("`") - 1;
					const endDiff = method.returnStatement.contents.length - cssEndsAtIndex - 1;
					const changeStartsAtIndex = method.returnStatement.startsAt + cssStartsAtIndex;
					const changeEndsAtIndex = method.returnStatement.endsAt - endDiff;
					const cssContents = code.slice(changeStartsAtIndex, changeEndsAtIndex);
					const {css} = await transpiler.process(cssContents, {from: id, to: id});

					magicString.overwrite(changeStartsAtIndex, changeEndsAtIndex, css);
					hasAltered = true;
				}));

				if (!hasAltered) return null;
				return {
					code: magicString.toString(),
					map: rollupOptions.sourceMap ? magicString.generateMap({hires: true}) : {mappings: ""}
				}

			} catch (ex) {
				return null;
			}
		}
	};
}