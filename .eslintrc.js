module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "airbnb-base"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "indent": ["error", "tab"],
        "no-tabs": 0,
        "no-plusplus": 0,
        "object-curly-newline": 0,
        "func-names": 0,
        "no-use-before-define": 0,
        "strict": 0
    }
};