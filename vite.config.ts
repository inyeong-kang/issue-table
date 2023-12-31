import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/issue-table',
    build: {
        rollupOptions: {
            output: {
                entryFileNames: '[name].js',
                assetFileNames: '[name].[ext]',
            },
        },
    },
    resolve: {
        alias: [
            { find: '@components', replacement: '/src/components' },
            { find: '@pages', replacement: '/src/pages' },
            { find: '@hooks', replacement: '/src/hooks' },
            { find: '@types', replacement: '/src/types' },
            { find: '@utils', replacement: '/src/utils' },
            { find: '@', replacement: '/src' },
        ],
    },
});
