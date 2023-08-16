import { articleStats } from './src/lib/vite-plugins.ts';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), articleStats],
});
