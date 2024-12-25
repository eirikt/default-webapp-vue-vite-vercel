import type {ConfigEnv, PluginOption, ServerOptions, UserConfig} from 'vite'
import {loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import {Temporal} from 'temporal-polyfill'
import {prettyprint} from './src/scripts/iso8601'

export default function (configEnv: ConfigEnv): UserConfig {
    const env: Record<string, string> = loadEnv(configEnv.mode, process.cwd(), '')
    //console.log('env: ')
    //console.log(env) // Coloured :-)

    const plugins: PluginOption[] = [
        vue()
    ]
    const server: ServerOptions = {
        port: 9090,
        strictPort: true,
        hmr: {
            overlay: true,
        }
    }
    const define: Record<string, string> = {
        '__APP_MODE__': (configEnv.mode == 'production')
            ? JSON.stringify('')
            : JSON.stringify(configEnv.mode + ' (builder: ' + env.COMPUTERNAME + ')'),
        __APP_BUILD_TIME__: JSON.stringify(prettyprint(Temporal.Now.instant()))

    }
    return {
        plugins,
        server,
        define
    } satisfies UserConfig
}
