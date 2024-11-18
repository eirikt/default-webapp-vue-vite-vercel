<script setup lang='ts'>
const title = 'Default Webapp 2024'
const version = '0.3.0'

const notIntegrated = '✗'
const integrated = '✓'
</script>

<template>
    <h1>{{ title }}</h1>
    <p style="font-weight: bold;">Technology stack status:</p>
    <ul style="list-style-type: none;">
        <li>Git: <span style="font-size: larger;font-weight: bolder;color: green;">{{ integrated }}</span></li>
        <li><a href="https://github.com/eirikt/default-webapp-vue-vite-vercel" target="_blank">GitHub</a>: <span style="font-size: larger;font-weight: bolder;color: green;">{{ integrated }}</span></li>
        <li>GitHub: <span style="font-size: larger;font-weight: bolder;color: green;">{{ integrated }}</span></li>
        <li>Vercel: <span style="font-size: larger;font-weight: bolder;color: green;">{{ integrated }}</span></li>
        <li>Vite: <span style="font-size: larger;font-weight: bolder;color: green;">{{ integrated }}</span></li>
        <li>Vue: <span style="font-size: larger;font-weight: bolder;color: green;">{{ integrated }}</span></li>
        <li>TypeScript: <span style="font-size: larger;font-weight: bolder;color: green;">{{ integrated }}</span></li>
        <li>Tailwind: <span style="font-size: larger;color: red;">{{ notIntegrated }}</span></li>
        <li>Vitest: <span style="font-size: larger;color: red;">{{ notIntegrated }}</span></li>
        <li>Pinia: <span style="font-size: larger;color: red;">{{ notIntegrated }}</span></li>
        <li>HTTP APIs: <span style="font-size: larger;color: red;">{{ notIntegrated }}</span></li>
        <li>TSC/ESLint: <span style="font-size: larger;color: red;">{{ notIntegrated }}</span></li>
    </ul>
    <p style="padding-top: 8px;font-family: monospace;color: grey;">
        [
        v{{ version }} |
        <a href="https://github.com/eirikt/default-webapp-vue-vite-vercel/blob/main/README.md"
           style="font-family: monospace;color: grey;" target="_blank">Documentation</a>
        ]
    </p>
</template>
