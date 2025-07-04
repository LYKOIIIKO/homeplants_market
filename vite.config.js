import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import EnvironmentPlugin from "vite-plugin-environment"
import svgr from "vite-plugin-svgr"

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr(),
		EnvironmentPlugin([
			"VITE_FIREBASE_API_KEY",
			"VITE_FIREBASE_AUTH_DOMAIN",
			"VITE_FIREBASE_PROJECT_ID",
			"VITE_FIREBASE_STORAGE_BUCKET",
			"VITE_FIREBASE_MESSAGING_SENDER_ID",
			"VITE_FIREBASE_APP_ID",
			"VITE_FIREBASE_MEASUREMENT_ID",
		]),
	],
})
