var config = require('./config.js');
var fs = require('fs');
var de = (function DeFile() {
	var img = {
		".png": true,
		".jpg": true,
		".gif": true,
		".svg": true,
		".bmp": true,
		".jpeg": true,
		".apng": true
	};
	var ret = {
		getSuffix: function (filename) {
			var suffix = /\.[^\.]+/.exec(filename);
			return suffix[0].toLowerCase();
		},
		getFileType: function (filename) {
			var suffix = ret.getSuffix(filename);
			return img[suffix] ? 'img' : 'other';
		}
	}
	return ret;
})();
var fctrl = {
	readDir: function (path, data) {
		if (!fs.existsSync(path)) return console.log(path, ':路径不存在！');
		var files = fs.readdirSync(path);
		files.forEach(function (file) {
			var npath = path + '/' + file,
				sta = fs.statSync(npath);
			if (sta.isDirectory()) {
				console.log('遍历文件夹------------------------->:',npath);
				var index = data.push({
					name: file,
					type: 'folder',
					path: npath,
					mtime: sta.mtime+'',
					files: []
				});
				fctrl.readDir(npath, data[index - 1].files);
			} else {
				console.log('检查文件 --->:',npath);
				data.push({
					name: file,
					type: 'file-'+de.getFileType(file),
					path: npath,
					size: sta.size,
					mtime: sta.mtime+''
				});
			}
		});
	},
	buildFile: function (path, data) {
		if (!fs.existsSync(path)) return console.log(path, ':路径不存在！');
		var outputFile = path + '/' + config.outMainFileName;
		fs.writeFile(outputFile, JSON.stringify(data, null, 4), function (err) {
			if (err) return console.log('输出文件错误：', err);
			console.log('目录文件构建成功：', outputFile);
		})

	}
}
module.exports = fctrl;
