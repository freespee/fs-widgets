const {FuseBox, TypeScriptHelpers, Sparky} = require('fuse-box');

Sparky.task('default', () => {
  return Sparky.watch('index.html', {base: './src/'}).dest('./dist/');
});

const fuse = FuseBox.init({
  homeDir: './src/',
  output: './dist/',
  tsConfig: './tsconfig.json',
  plugins: [
    TypeScriptHelpers(),
  ]
});

fuse
  .bundle('dist/index.js')
  .instructions('[index.ts]')
  .watch();

fuse.run();