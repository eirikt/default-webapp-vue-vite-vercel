import eslintJs from '@eslint/js';
import eslintTs from 'typescript-eslint';
import eslintVue from 'eslint-plugin-vue';
import {includeIgnoreFile} from '@eslint/compat';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
const gitignorePath = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    '.gitignore'
);

export default [

    // Ignore the same file paths as '.gitignore'
    includeIgnoreFile(gitignorePath),

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
        rules: {
            '@typescript-eslint/no-use-before-define': 'off',
            'func-style': 'warn',
            'max-lines-per-function': ['error', {'max': 100}],
            'no-ternary': 'off',
            'no-warning-comments': 'warn',
            'sort-imports': 'off',
            'sort-vars': 'off'
        }
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
        },
        rules: {
            'no-useless-assignment': 'off',
            'no-undef': 'off'
        }
    }
];
