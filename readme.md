# react-starter-kit
##Gulp
#### `gulp`
Starts webpack dev server on port 8080 or given env PORT.
#### `gulp build`
Compiles into `/build/`.
#### `gulp serve:dist`
Serves the build folder.
#### `gulp lint`
Runs lint.

##Release
`npm version [major | minor | patch]`

## CSS
Use absolute paths when using url().

```css
.foo {
  background: url(~assets/images/foo.png);
}
```

## Todo
- add tests
- fix linting for js and scss
- make use of flow