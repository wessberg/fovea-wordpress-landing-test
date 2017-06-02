import typescriptPlugin from "rollup-plugin-typescript2";
import nodeResolve from "rollup-plugin-node-resolve";
import babili from "rollup-plugin-babili";
import gzip from "rollup-plugin-gzip";
import {Config} from "@wessberg/environment";

const PRODUCTION_PLUGINS = Config.PRODUCTION ? [
	babili({
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
	}),
	gzip({
		options: {
			level: 9
		}
	})
] : [];

export default {
	entry: "index.ts",
	dest: `../lib/elements.js`,
	moduleName: "fovea",
	format: "iife",
	sourceMap: false,
	plugins: [
		typescriptPlugin({clean: true, abortOnError: false}),
		nodeResolve({
			// use "module" field for ES6 module if possible
			module: true, // Default: true

			// use "jsnext:main" if possible
			// – see https://github.com/rollup/rollup/wiki/jsnext:main
			jsnext: true,  // Default: false

			// use "main" field or index.js, even if it's not an ES6 module
			// (needs to be converted from CommonJS to ES6
			// – see https://github.com/rollup/rollup-plugin-commonjs
			main: true,  // Default: true
		}),
		...PRODUCTION_PLUGINS
	],
	treeshake: true
};