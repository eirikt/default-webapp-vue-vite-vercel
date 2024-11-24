<script setup lang='ts'>
import packageJson from '../../package.json'

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
                <ul class="ms-4">
                    <li class="checked">Git</li>
                    <li><a href="https://github.com/eirikt/default-webapp-vue-vite-vercel" target="_blank">GitHub</a><span class="{{ checked }}"></span></li>
                    <li class="checked">Vercel</li>
                    <li class="checked">Vite</li>
                    <li class="checked">Vue</li>
                    <li class="checked">TypeScript</li>
                    <li class="checked">Tailwind</li>
                    <li class="unchecked">Vitest</li>
                    <li class="unchecked">Pinia</li>
                    <li class="unchecked">Http APIs</li>
                    <li class="unchecked">TSC/ESLint</li>
                </ul>
            </div>
        </section>
        <hr class="my-2"/>
        <footer class="flex flex-row justify-between">
            <span>
                <span class="code">v{{ version }}</span>
                <span class="text-gray-400 mx-2"> | </span>
                <span class="text-sm text-gray-400"><a href="https://github.com/eirikt/default-webapp-vue-vite-vercel/blob/main/README.md" target="_blank">Documentation</a></span>
            </span>
            <span>
                <span class="code">Built: {{ buildTimestamp }}</span>
            </span>
        </footer>
    </article>
</template>
