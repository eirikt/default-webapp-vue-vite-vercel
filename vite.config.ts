import type {UserConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

export default {
    plugins: [
        vue()
    ],
    server: {
        port: 9090,
        strictPort: true
    }
} satisfies UserConfig
