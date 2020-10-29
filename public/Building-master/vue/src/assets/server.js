//加载模块
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path')
 

var server = http.createServer(function(req,res){
		
	var staticPath = path.join(__dirname,'act');   
	var pathObj = url.parse(req.url, true);
	
	if(pathObj.pathname =='/'){                 //如果没有后缀，默认他显示是index.html
		pathObj.pathname += 'index.html';	 
	}
	
	var filePath = path.join(staticPath,pathObj.pathname);
	
	//异步读取文件数据
	fs.readFile(filePath,'binary',function(err,fileContent){
		if(err){
			res.writeHead(404,"Not Found");
			res.end('<h1>404 Not Found!</h1>')	
		}else{
			res.writeHead(200,'ok');
			res.write(fileContent,'binary');
			res.end();	
		}
	});
});
 
server.listen(8888);


console.log('服务器已打开, 可以运行 http://localhost:8888');