//npm packages
const EXPRESS = require("express")
const FILESYSTEM = require("fs")
const BODYPARSER = require("body-parser")

var endpoints = require("./endpoints/endpoints.js")

var webServer = EXPRESS();
var port = 8080;

webServer.use(BODYPARSER.json())
webServer.use(BODYPARSER.urlencoded({extended:true}))

webServer.use(function(req, res, next){
  console.log(req.url + " " + req.method +" | "+JSON.stringify(req.body));
  FILESYSTEM.appendFile(__dirname+'/Server.log',req.ip + " " + new Date() + " " + req.url + " " + req.method +" "+JSON.stringify(req.body) + " ||| " + JSON.stringify(req.query)+"\"\n",{flag:"a"},()=>{});
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, SEARCH, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //console.log(__dirname+"/website");
  if(req.method == "OPTIONS")
    {
      res.status(200);
      res.end();
    }
  else
    next();
});

webServer.use(endpoints)
webServer.use(EXPRESS.static(__dirname+"/website"))
webServer.listen(port, function(){
  console.log("webserver running on port " + port);
})
