import typescriptPlugin from "rollup-plugin-typescript2";

export default {
	entry: "index.ts",
	dest: `../lib/elements.js`,
	moduleName: "fovea",
	format: "iife",
	sourceMap: false,
	plugins: [
		typescriptPlugin({clean: true})
	],
	treeshake: true
};