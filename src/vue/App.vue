<script setup lang='ts'>
import packageJson from '../../package.json'

const title = packageJson.title
const version = packageJson.version

const notIntegrated = '✗'
const integrated = '✓'
</script>

<template>
    <h1>{{ title }}</h1>
    <p>Technology stack status:</p>
    <ul>
        <li>Git: {{ integrated }}</li>
        <li><a href="https://github.com/eirikt/default-webapp-vue-vite-vercel" target="_blank">GitHub</a>: {{ integrated }}</li>
        <li>GitHub: {{ integrated }}</li>
        <li>Vercel: {{ integrated }}</li>
        <li>Vite: {{ integrated }}</li>
        <li>Vue: {{ integrated }}</li>
        <li>TypeScript: {{ integrated }}</li>
        <li>Tailwind: {{ integrated }}</li>
        <li>Vitest: {{ notIntegrated }}</li>
        <li>Pinia: {{ notIntegrated }}</li>
        <li>HTTP APIs: {{ notIntegrated }}</li>
        <li>TSC/ESLint: {{ notIntegrated }}</li>
    </ul>
    <p>
        [ v{{ version }} | <a href="https://github.com/eirikt/default-webapp-vue-vite-vercel/blob/main/README.md" target="_blank">Documentation</a> ]
    </p>
</template>
