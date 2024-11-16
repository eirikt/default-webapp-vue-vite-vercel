import type {UserConfig} from 'vite'

export default {
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
