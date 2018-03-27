//npm packages
const EXPRESS = require("express")
const FS = require("fs")
const BODYPARSER = require("body-parser")

var endpoints = require("./endpoints/endpoints.js")
//
var webServer = EXPRESS();
var port = 80;

webServer.use(BODYPARSER.json())
webServer.use(BODYPARSER.urlencoded({extended:true}))
webServer.use(endpoints)

webServer.use(function(req, res, next){
  console.log(req.url + " " + req.method +" | "+JSON.stringify(req.body));
  FILESYSTEM.appendFile('Server.log', " "+req.ip + " " + new Date() + " " + req.url + " " + req.method +" "+JSON.stringify(req.body) + "\"\n");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, SEARCH, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  if(req.method == "OPTIONS")
    {
      res.status(200);
      res.end();
    }
  else
    next();
});

webServer.listen(port, function(){
  console.log("webserver running on port " + port);
})
