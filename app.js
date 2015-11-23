var config = require('./config.js');
var fctrl=require('./fileCtrl.js');
var mainData=[];
console.log('开始构建目录文件_(:з」∠)_ ');
fctrl.readDir(config.root,mainData);
fctrl.buildFile(config.outMainPath,mainData);
