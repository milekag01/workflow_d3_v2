module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "standard-jsx"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
    },
    plugins: ["react", "prettier"],
    rules: {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        semi: ["error", "always"],
        quotes: ["error", "single"],
        "react/no-deprecated": ["error"],
        "react/no-unescaped-entities": [
            "error",
            {
                forbid: [">", "}"],
            },
        ],
    },
};
