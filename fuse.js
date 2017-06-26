const {FuseBox, TypeScriptHelpers} = require('fuse-box');

const fuse = FuseBox.inti({
  homeDir: './src/',
  output: './dist/',
  plugins: [
    TypeScriptHelpers(),
  ]
});

fuse
  .bundle('index.js')
  .instructions('> index.ts')
  .watch();