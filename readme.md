# react-starter-kit
[![Build
Status](https://travis-ci.org/esayemm/react-starter-kit.svg?branch=master)](https://travis-ci.org/esayemm/react-starter-kit)

##Gulp
#### `gulp [PORT=number]`
Starts webpack dev server on port 8080 or given env PORT.
#### `gulp build`
Compiles into `/build/`.
#### `gulp serve:dist`
Serves the build folder.
#### `gulp lint`
Runs eslint.

##Release
`npm version [major | minor | patch]`

## CSS
Use absolute paths when using url().

```css
.foo {
  background: url(~assets/images/foo.png);
}
```

##Lint
Install eslint globally and babel-eslint

## Docker

Build the docker image after you run gulp build. The default dockerfile simply runs a nginx server that serves the `build/` files.

```sh
// inside project root dir
docker build -t <docker username>/<docker hub repo> .

// run docker image
docker run -d --name <custom name> -p <host port>:80 <docker username>/<docker hub repo>
```
