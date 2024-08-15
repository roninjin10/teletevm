import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { vitePluginTevm as tevm } from "@tevm/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), basicSsl(), tevm()],
	build: {
		outDir: "./docs",
	},
	base: "/vite-boilerplate/",
});
