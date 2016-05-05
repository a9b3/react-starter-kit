# react-starter-kit
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