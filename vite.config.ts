import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vercel from 'vite-plugin-vercel';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), vercel()],
	/* server: {
		proxy: {
			"/api": {
				target: "https://poke-api-p5qg.vercel.app/api/pokemon/",
				changeOrigin: true,
        		rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	} */
})
