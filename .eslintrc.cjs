module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
        browser: true,
        es2021: true,
    },
    // airbnb의 JS 스타일 가이드를 따른다
    extends: ['eslint:recommended', 'plugin:vue/vue3-essential', 'airbnb', 'prettier'],
    plugins: ['prettier'],
    parserOptions: {
        // 타입스크립트 프로젝트에서 tsconfig 내용을 eslint가 알아먹게끔 하기
        project: './tsconfig.json',
    },
    // https://chinsun9.github.io/2021/08/29/tsconfig-baseUrl-eslint/
    // https://github.com/import-js/eslint-plugin-import/issues/1485#issuecomment-535351922
    settings: {
        // eslint-import-resolver-typescript는 tsconfig에서 path alias를 사용할 수 있도록 해주는 패키지다
        'import/resolver': {
            typescript: {},
        },
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'vue/multi-word-component-names': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
};
