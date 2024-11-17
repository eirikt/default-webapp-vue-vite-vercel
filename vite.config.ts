import type {UserConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

export default {
    plugins: [
        vue()
    ],
    build: {
        minify: false,
        terserOptions: {
            compress: false,
            mangle: false,
        },
        emptyOutDir: false
    },
    server: {
        port: 9090,
        strictPort: true
    }
} satisfies UserConfig
