<script setup lang='ts'>
import packageJson from '../../package.json'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import GitLogo from './components/GitLogo.vue'
import VueLogo from './components/VueLogo.vue'
import ViteLogo from './components/ViteLogo.vue'

const {title, version} = packageJson
    , mode: string = APP_MODE
    , buildTimestamp: string = APP_BUILD_TIME
</script>

<template>
    <article class="flex flex-col justify-between h-dvh p-6">
        <header>
            <h1 class="
                    bg-clip-text text-transparent
                    bg-gradient-to-r from-red-600 to-green-600
                    w-12/12 sm:w-7/12 md:w-6/12 lg:w-4/12 xl:w-3/12 2xl:w-4/12
                    mt-6
            ">
                {{ title }}
            </h1>
        </header>

        <hr class="my-2"/>

        <section class="basis-full flex justify-between my-4">
            <div>
                <h2>Technology stack status</h2>

                <ul class="mt-2 ms-4">
                    <li class="checked flex items-center h-8">
                        <span class="code text-gray-400">[v0.0]</span>
                        <a href="https://git-scm.com" target="_blank">
                            <GitLogo height="2rem"
                                     width="2.5rem"
                                     class="ms-2"
                            />
                        </a>
                    </li>

                    <li class="checked flex items-center h-8">
                        <span class="code text-gray-400">[v0.0]</span>
                        <a href="https://github.com/eirikt/default-webapp-vue-vite-vercel" target="_blank">
                            <FontAwesomeIcon v-bind:icon="faGithub"
                                             class="text-xl translate-y-0.5 ms-2"
                            />
                            <span class="ms-1.5">GitHub</span>
                        </a>
                    </li>

                    <li class="checked flex items-center h-8">
                        <span class="code text-gray-400">[v0.0]</span>
                        <a href="https://vercel.com" class="flex items-center" target="_blank">
                            <svg class="ms-2"
                                 data-testid="geist-icon"
                                 stroke-linejoin="round"
                                 viewBox="0 0 16 16"
                                 height="18px"
                                 width="18px"
                                 style="color: currentcolor;"
                            >
                                <path fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M8 1L16 15H0L8 1Z"
                                      fill="currentColor"
                                />
                            </svg>
                            <span class="ms-1">Vercel</span>
                        </a>
                    </li>

                    <li class="checked flex items-center h-8">
                        <span class="code text-gray-400 me-2">[v0.1]</span>
                        <a href="https://vuejs.org" class="flex items-center" target="_blank">
                            <VueLogo/>
                            <span class="ms-1">Vue</span>
                        </a>
                    </li>

                    <li class="checked flex items-center h-8">
                        <span class="code text-gray-400 me-2">[v0.2]</span>
                        <a href="https://vite.dev" class="flex items-center" target="_blank">
                            <ViteLogo/>
                            <span class="ms-1">Vite</span>
                        </a>
                    </li>

                    <li class="checked flex items-center h-8">
                        <span class="code text-gray-400 me-2">[v0.2]</span>
                        <a href="https://www.typescriptlang.org" class="flex items-center" target="_blank">
                            <img src="/ts-logo-128.png" alt="TypeScript" width="22px"/>
                            <span class="ms-1.5">TypeScript</span>
                        </a>
                    </li>

                    <li class="checked flex items-center h-8">
                        <span class="code text-gray-400 me-2">[v0.4]</span>
                        <a href="https://tailwindcss.com" class="flex items-center" target="_blank">
                            <img src="/tailwindcss-logotype.svg" alt="Tailwind CSS" width="120px"/>
                        </a>
                    </li>

                    <li class="checked flex items-center h-8">
                        <span class="code text-gray-400 me-2">[v0.6]</span>
                        <a href="https://vitest.dev" class="flex items-center" target="_blank">
                            <img src="../assets/vitest-logo.svg" alt="Vitest" width="20px"/>
                            <span class="ms-1">Vitest</span>
                        </a>
                    </li>

                    <li class="checked flex items-center h-8">
                        <span class="code text-gray-400 me-2">[v0.6]</span>
                        <a href="https://eslint.org" class="flex items-center" target="_blank">
                            <img src="../assets/eslint-logo.svg" alt="TSC/ESLint" width="24px"/>
                            <span class="ms-1">TSC/ESLint</span>
                        </a>
                    </li>

                    <li class="unchecked flex items-center h-8">
                        <span class="code text-gray-300 me-2">[v0.?]</span>
                        <a href="https://pinia.vuejs.org" class="flex items-center" target="_blank">
                            <img src="../assets/pinia-logo.svg" alt="Pinia" width="14px"/>
                            <span class="ms-1.5">Pinia</span>
                        </a>
                    </li>

                    <li class="unchecked flex items-center h-8">
                        <span class="code text-gray-300 me-2">[v0.?]</span>
                        <img src="/http.png" alt="HTTP APIs" width="50"/>
                        <span>APIs</span>
                    </li>
                </ul>
            </div>

            <div class="todo">
                &lt;<b>TODO:</b><br/>background<br/>color<br/>picker&gt;
            </div>
        </section>

        <hr class="my-2"/>

        <footer class="flex justify-between">
            <span class="flex items-center">
                <span class="code text-gray-400">v{{ version }}</span>
                <span>
                    <a href="https://github.com/eirikt/default-webapp-vue-vite-vercel/blob/main/README.md" target="_blank">
                        <FontAwesomeIcon v-bind:icon="faGithub"
                                         class="mx-3 text-xl text-gray-400"
                        />
                    </a>
                </span>
            </span>
            <span v-if="mode" class="capitalized warning">{{ mode }}</span>
            <span v-if="buildTimestamp" class="code text-gray-400">built: {{ buildTimestamp }}</span>
        </footer>
    </article>
</template>
