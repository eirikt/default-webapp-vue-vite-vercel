/* eslint-disable no-duplicate-imports */
import type {ConfigEnv, PluginOption, ServerOptions, UserConfig} from 'vite'
import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import {Temporal} from 'temporal-polyfill'
import {prettyprint} from './src/scripts/iso8601'

export default defineConfig(
    (configEnv: Readonly<ConfigEnv>): Readonly<UserConfig> => {
        const
            env: Record<string, string> =
                loadEnv(
                    configEnv.mode,
                    process.cwd(),
                    ''
                ),

            /* eslint-disable sort-keys */
            /* eslint-disable @typescript-eslint/naming-convention */
            define: Record<string, string> = {
                APP_MODE: (configEnv.mode === 'production')
                    ? JSON.stringify('')
                    : JSON.stringify(`${configEnv.mode} (builder: ${env.COMPUTERNAME})`),

                APP_BUILD_TIME: JSON.stringify(prettyprint(Temporal.Now.instant()))
            },

            plugins: PluginOption[] = [
                vue()
            ],

            server: ServerOptions = {
                hmr: {
                    overlay: true,
                },
                port: 9090,
                strictPort: true
            }

        /* eslint-disable capitalized-comments */
        //console.log('env: ')
        //console.log(env) // Coloured :-)

        return {
            define,
            plugins,
            server
        }
    }
)
