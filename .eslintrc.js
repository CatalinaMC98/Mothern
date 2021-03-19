// eslint-disable-next-line no-undef
module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks'],
    settings: {
        react: {
            version: '999.999.999',
        },
    },
    rules: {
        'react-hooks/exhaustive-deps': 0,
        'react/prop-types': 0,
        'no-unused-vars': 1,
        'react/react-in-jsx-scope': 0,
        'react/jsx-key': 1,
        'react/jsx-no-undef': 1,
        'react/no-this-in-sfc': 2,
        'react/function-component-definition': [
            'error',
            {
                namedComponents: 'function-declaration',
                unnamedComponents: 'arrow-function',
            },
        ],
    },
};
