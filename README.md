# sprite.plugin
Build sprite images and css sheets on the fly

## use

* if you use in command line

```
node nodu_modules/sprite-plugin/src/sprite -config=config.json
//config.json is not requied
```
* if you use in webpack

```
prerelease: 'node nodu_modules/sprite-plugin/src/sprite -config=config.json',
release: 'webpack --config webpack.release.js'
```
or you can this:

```
//sprite.plugin.js

function SpritePlugin() {}
SpritePlugin.prototype.apply = function(compiler) {
    var sprite = require('sprite.plugin');
	sprite.run({
		aPadding: 1,//默认值为空
	    aExtname: '.png',//默认值为.png|.jpg
	    aAlgorithm: 'top-down',//默认值为binary-tree
	
	    aFolder: process.cwd()+ '/src/assets',//icon资源文件夹
	    styleFile: process.cwd()+ '/src/sprite.less',//输出样式文件
	    spriteFile: process.cwd()+ '/src/sprites/sprite.png',//输入雪碧图文件
	
	    pieces: '*@px',//单位 默认值为空
	    prefix: 'icon',//class前缀 默认值为空
	    connector: '-',//class前缀连接 默认值为空
	    processor: "less",//样式编译语言 默认值为css
	    fix4Pieces: '@px: 320/750/16*1rem;@percent: 100/750*1%;',//样式文件前面需要加入 默认值为空
	});
}
module.exports = SpritePlugin;
```