import eslintJs from '@eslint/js';
import eslintTs from 'typescript-eslint';
import eslintVue from 'eslint-plugin-vue';
import {includeIgnoreFile} from '@eslint/compat';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
const gitignorePath = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    '.gitignore'
);
/* eslint-enable @typescript-eslint/no-unsafe-member-access */
/* eslint-enable @typescript-eslint/no-unsafe-call */
/* eslint-enable @typescript-eslint/no-unsafe-assignment */

export default [

    // Ignore the same file paths as '.gitignore'
    /* eslint-disable @typescript-eslint/no-unsafe-argument */
    includeIgnoreFile(gitignorePath),
    /* eslint-enable @typescript-eslint/no-unsafe-argument */

    // All JavaScript linting rules
    eslintJs.configs.all,

    // All TypeScript linting rules
    ...eslintTs.configs.all,
    {
        languageOptions: {
            parserOptions: {
                projectService: {
                    allowDefaultProject: [
                        'eslint.config.js',
                        'postcss.config.js'
                    ]
                }
            }
        },
        /* eslint-disable @typescript-eslint/naming-convention */
        /* eslint-disable @typescript-eslint/no-magic-numbers */
        rules: {
            '@typescript-eslint/no-use-before-define': 'off',
            'func-style': 'warn',
            'max-statements': ['error', 6, { 'ignoreTopLevelFunctions': true }],
            'no-console': 'warn',
            'no-ternary': 'off',
            'no-warning-comments': 'warn',
            'sort-imports': 'off',
            'sort-vars': 'off'
        }
        /* eslint-enable @typescript-eslint/naming-convention */
        /* eslint-enable @typescript-eslint/no-magic-numbers */
    },

    // Vue "essential" linting rules
    ...eslintVue.configs['flat/essential'],
    {
        languageOptions: {
            /* eslint-disable sort-keys */
            parserOptions: {
                parser: eslintTs.parser,
                extraFileExtensions: ['.vue']
            }
            /* eslint-enable sort-keys */
        },
        /* eslint-disable @typescript-eslint/naming-convention */
        rules: {
            'no-useless-assignment': 'off'
        }
        /* eslint-enable @typescript-eslint/naming-convention */
    }
];
