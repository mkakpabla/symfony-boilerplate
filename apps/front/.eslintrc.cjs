require("@rushstack/eslint-patch/modern-module-resolution")
module.exports = {
    root: true,
    extends: [
      //  "eslint:recommended",
    //    "@nuxt/eslint-config",
        "plugin:vue/vue3-recommended",
        "@nuxtjs/eslint-config-typescript",
        "@vue/eslint-config-airbnb-with-typescript",
    //    "plugin:@typescript-eslint/eslint-recommended",
     //   "plugin:@typescript-eslint/recommended",
    ],
    rules: {
        'semi': ["error", "always"],
        'comma-dangle': "off", // covered by eslint-config-airbnb-with-typescript
        'space-before-function-paren': "off" // covered by eslint-config-airbnb-with-typescript
    }
};