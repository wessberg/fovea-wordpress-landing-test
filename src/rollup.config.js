import typescriptPlugin from "rollup-plugin-typescript2";
import nodeResolve from "rollup-plugin-node-resolve";

export default {
	entry: "index.ts",
	dest: `../lib/elements.js`,
	moduleName: "fovea",
	format: "iife",
	sourceMap: false,
	plugins: [
		typescriptPlugin({clean: true}),
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
	],
	treeshake: true
};