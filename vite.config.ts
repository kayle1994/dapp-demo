import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 8080,
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "@scss/variables.scss";',
				javascriptEnabled: true,
			},
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@scss': path.resolve(__dirname, 'src/assets/scss'),
			'@images': path.resolve(__dirname, 'src/assets/images'),
			'@views': path.resolve(__dirname, 'src/views'),
			'@services': path.resolve(__dirname, 'src/services'),
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@constants': path.resolve(__dirname, 'src/constants'),
		},
	},
});
