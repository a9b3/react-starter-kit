# react-gulp-starter

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

### CLI tool
I also made a small little cli tool that scaffolds out a react component. You
can go into cli/ and npm link to use it.

```
// will create a folder App/ in cwd with
//      - app.component.js
//      - app.css
$ rcomp comp --name App
```
