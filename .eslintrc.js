module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    plugins: ['gridsome'],
    env: {
        node: true,
        browser: true,
        es6: true,
    },
    extends: ['plugin:gridsome/recommended', 'plugin:vue/essential', 'plugin:prettier/recommended', '@vue/prettier'],
    rules: {
        'max-len': ['error', { code: 120 }],
        'no-trailing-spaces': 0,
        'no-var': 1,
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-unused-vars': 0,
    },
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
            env: {
                jest: true,
            },
        },
    ],
}
