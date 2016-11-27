// spriterc example

module.exports = {
  aPadding: 5,
  aExtname: '.png',
  aAlgorithm: 'binary-tree',

  aFolder: process.cwd() + '/assets',
  styleFile: process.cwd() + '/assets/build/sprite.less',
  spriteFile: process.cwd() + '/assets/build/sprite.png',

  pieces: '*@px',
  prefix: 'icon',
  connector: '-',
  processor: "less",
  fix4Pieces: '@px: 320/750/16*1rem;@percent: 100/750*1%;'
}

module.exports = {
  aPadding: 5,
  aExtname: '.png',
  aAlgorithm: 'binary-tree',

  aFolder: process.cwd() + '/assets',
  styleFile: process.cwd() + '/assets/build/sprite.css',
  spriteFile: process.cwd() + '/assets/build/sprite.png',

  prefix: 'icon',
  connector: '-',
  processor: "css"
}

module.exports = {
  aPadding: 5,
  aExtname: '.png',
  aAlgorithm: 'binary-tree',

  aFolder: process.cwd() + '/assets',
  styleFile: process.cwd() + '/assets/build/sprite.sass',
  spriteFile: process.cwd() + '/assets/build/sprite.png',

  pieces: '*@px',
  prefix: 'icon',
  connector: '-',
  processor: "sass",
  fix4Pieces: '@px: 320/750/16*1rem;@percent: 100/750*1%;',
}