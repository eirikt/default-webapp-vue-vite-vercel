<script setup lang='ts'>
import packageJson from '../../package.json'
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import GitIcon from "./components/GitIcon.vue";

const title = packageJson.title
const version = packageJson.version
const buildTimestamp = new Date()
</script>

<template>
    <article class="flex flex-col justify-between h-dvh p-6">
        <header class="mt-4">
            <h1>{{ title }}</h1>
        </header>

        <hr class="my-2"/>

        <section class="basis-full my-4">
            <div>
                <h2>Technology stack status</h2>

                <ul class="mt-2 ms-4">
                    <li class="checked flex items-center h-8">
                        <span class="code">[v0.0]</span>
                        <a href="//git-scm.com" class="ms-2">
                            <GitIcon
                                height="2rem"
                                width="2.5rem"
                            />
                        </a>
                    </li>

                    <li class="checked flex items-center h-8">
                        <span class="code">[v0.0]</span>
                        <a href="//github.com/eirikt/default-webapp-vue-vite-vercel" target="_blank">
                            <FontAwesomeIcon
                                v-bind:icon="faGithub"
                                class="text-xl translate-y-0.5 ms-2"
                            />
                        </a>
                        <span class="ms-1.5">GitHub</span>
                    </li>

                    <li class="checked flex items-center h-8">
                        <span class="code">[v0.0]</span>
                        <svg class="ms-2"
                             data-testid="geist-icon"
                             stroke-linejoin="round"
                             viewBox="0 0 16 16"
                             height="18px"
                             width="18px"
                             style="color: currentcolor;">
                            <path fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M8 1L16 15H0L8 1Z"
                                  fill="currentColor"
                            >
                            </path>
                        </svg>
                        <span class="ms-1">Vercel</span>
                    </li>

                    <li class="checked flex items-center h-8">
                        <span class="code">[v0.1]</span>
                        <span class="ms-2">Vue</span>
                    </li>

                    <li class="checked flex items-center h-8">
                        <span class="code">[v0.2]</span>
                        <span class="ms-2">Vite</span>
                    </li>

                    <li class="checked flex items-center h-8">
                        <span class="code">[v0.2]</span>
                        <span class="ms-2">TypeScript</span>
                    </li>

                    <li class="checked flex items-center h-8">
                        <span class="code">[v0.4]</span>
                        <span class="ms-2">Tailwind</span>
                    </li>

                    <li class="unchecked flex items-center h-8">Vitest</li>

                    <li class="unchecked flex items-center h-8">Pinia</li>

                    <li class="unchecked flex items-center h-8">Http APIs</li>

                    <li class="unchecked flex items-center h-8">TSC/ESLint</li>
                </ul>
            </div>
        </section>

        <hr class="my-2"/>

        <footer class="flex justify-between">
            <span class="flex items-center">
                <span class="code">v{{ version }}</span>
                <span>
                    <a href="//github.com/eirikt/default-webapp-vue-vite-vercel/blob/main/README.md" target="_blank">
                        <FontAwesomeIcon
                            v-bind:icon="faGithub"
                            class="mx-4 text-xl text-gray-400"
                        />
                    </a>
                </span>
            </span>

            <span>
                <span class="code">Built: {{ buildTimestamp }}</span>
            </span>
        </footer>
    </article>
</template>
