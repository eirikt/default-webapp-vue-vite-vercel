export default {
    name: 'Default Webapp 2024',
    data() {
        return {
            title: 'Default Webapp 2024',
            version: '0.2.3',
        }
    },
    template: `
        <h1>{{this.title}}</h1>
        <h3>Technology stack status:</h3>
        <ul style="list-style-type: none;">
            <li>Git: <span style="font-size: larger;font-weight: bolder;color: green;">✓</span></li>
            <li><a href="https://github.com/eirikt/default-webapp-vue-vite-vercel" target="_blank">GitHub</a>: <span style="font-size: larger;font-weight: bolder;color: green;">✓</span></li>
            <li>Vercel: <span style="font-size: larger;font-weight: bolder;color: green;">✓</span></li>
            <li>Vue: <span style="font-size: larger;font-weight: bolder;color: darkseagreen;">(✓)</span></li>
            <li>Vite: <span style="font-size: larger;font-weight: bolder;color: green;">✓</span></li>
            <li>TypeScript: <span style="font-size: larger;font-weight: bolder;color: green;">✓</span></li>
            <li>Tailwind: <span style="font-size: larger;color: red;">✗</span></li>
            <li>Vitest: <span style="font-size: larger;color: red;">✗</span></li>
            <li>Pinia: <span style="font-size: larger;color: red;">✗</span></li>
            <li>HTTP APIs: <span style="font-size: larger;color: red;">✗</span></li>
            <li>TSC/ESLint: <span style="font-size: larger;color: red;">✗</span></li>
        </ul>
        <p style="padding-top: 8px;font-family: monospace;color: grey;">
          [
          v{{this.version}} |
          <a href="https://github.com/eirikt/default-webapp-vue-vite-vercel/blob/main/README.md" style="font-family: monospace;color: grey;" target="_blank">Documentation</a>
          ]
        </p>
    `
};
