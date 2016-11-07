var sprite = require('./src/sprite');
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
