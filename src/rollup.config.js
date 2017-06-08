import typescriptPlugin from "rollup-plugin-typescript2";
import nodeResolve from "rollup-plugin-node-resolve";
import babili from "rollup-plugin-babili";
import EnvironmentPlugin from "@wessberg/rollup-plugin-environment";
import Styler from "./Tool/Compiled/Styler";
import gzip from "rollup-plugin-gzip";
import {Config} from "@wessberg/environment";


// These plugins will only be used in the production environment.
const PRODUCTION_PLUGINS = Config.PRODUCTION ? [
	{
		order: 4,
		plugin: babili({
			comments: false,
			evaluate: true,
			deadcode: true,
			infinity: true,
			mangle: true,
			numericLiterals: true,
			replace: true,
			simplify: true,
			mergeVars: true,
			booleans: true,
			regexpConstructors: true,
			removeConsole: true,
			removeDebugger: true,
			removeUndefined: true,
			undefinedToVoid: true
		})
	},
	{
		order: 5,
		plugin: gzip({
			options: {
				level: 9
			}
		})
	}
] : [];

// These plugins will always be used.
const BASE_PLUGINS = [
	{
		order: 0,
		plugin: Styler()
	},
	{
		order: 1,
		// Inject environment variables into the bundle.
		plugin: EnvironmentPlugin()
	},
	{
		order: 2,
		// Transpile with Typescript
		plugin: typescriptPlugin()
	},
	{
		order: 3,
		// Inline module dependencies
		plugin: nodeResolve({
			module: true,
			jsnext: true,
			browser: true,
			main: true
		})
	}
];

// Sort the plugins by order
const sortPlugins = (a, b) => {
	if (a.order < b.order) return -1;
	if (a.order > b.order) return 1;
	return 0;
};

// Sort the plugins by order and take only the plugins from the nested objects.
const PLUGINS = [...BASE_PLUGINS, ...PRODUCTION_PLUGINS]
	.sort(sortPlugins)
	.map(plugin => plugin.plugin);

export default {
	entry: "index.ts",
	dest: `../lib/elements.${Config.MOBILE ? "mobile" : "desktop"}.js`,
	moduleName: "fovea",
	format: "iife",
	sourceMap: false,
	plugins: PLUGINS,
	treeshake: true
};