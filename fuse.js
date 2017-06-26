const {FuseBox, TypeScriptHelpers} = require('fuse-box');

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