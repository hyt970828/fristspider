var http = require("http");
var cheerio = require("cheerio");
var url = "http://www.wru.edu.cn/";
http.get(url,function(res){
    var html = "";
    res.on("data",function(chunk){
        html += chunk;  
    });
    res.on("end",function(){
    var $ = cheerio.load(html);
     $("a").each(function(){
        var newUri = $(this).attr("title");  
        console.log(newUri);
     });    
    })
    console.log("该网站已经访问成功");
}).on("error",function(err){
    console.log(err.message);
})

                                                    