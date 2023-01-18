module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
        browser: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-essential', 'airbnb', 'prettier'],
    plugins: ['prettier'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'vue/multi-word-component-names': [
            'error',
            {
                // Vue 컴포넌트의 이름은 여러 개의 단어를 섞어서 지어야 하지만 ignores에 적힌 이름들은 무시함.
                ignores: ['index'],
            },
        ],
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
};
