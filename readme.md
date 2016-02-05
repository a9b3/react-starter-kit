# react-starter-kit

### Instructions
```
$ npm install
$ gulp // dev server
$ gulp build // build into dist folder
```

### Overview
The app is being served from an express server using webpack dev and hot middleware.
Uses webpack for bundling and babel for transpiling es2015 code. Application
code is in /src the entry file is in index.js

*note*
Using [sw-precache](https://github.com/GoogleChrome/sw-precache) to generate
service worker.

### Usage

Create services that export reducer and actions, interact with models through
these services' actions.
Use [react-router-redux](https://github.com/rackt/react-router-redux) to
redirect from services.

### CLI tool
companion cli tool available at [react-starter-kit-cli](https://github.com/esayemm/react-starter-kit-cli).
helps with creating projects and scaffolding component/container files.
