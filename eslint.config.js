import eslint from '@eslint/js';
import eslintTs from 'typescript-eslint';
import eslintVue from 'eslint-plugin-vue';

export default [
    // All JavaScript linting rules
    eslint.configs.all,

    // All TypeScript linting rules
    ...eslintTs.configs.all,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            }
        }
    },

    // Vue "essential" linting rules
    ...eslintVue.configs['flat/essential'],
    {
        languageOptions: {
            parserOptions: {
                parser: eslintTs.parser,
                extraFileExtensions: ['.vue']
            }
        }
    }
];
