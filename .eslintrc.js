module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react"
  ],
  "parser": "babel-eslint",
  "ecmaFeatures": {
    "spread": true,
    "restParams": true,
    "experimentalObjectRestSpread": true,
  },
  "rules": {
    "semi": [2, "never"],
    "quotes": [0],
    "no-unused-vars": [2, {
      "argsIgnorePattern": "^_",
    }],
    "consistent-return": [0],
    "no-param-reassign": [0],
    "no-undef": [0],
    "arrow-body-style": [0],
    "new-cap": [0],
  },
};
