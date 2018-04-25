const EXPRESS = require("express")
const MOTORCOMMANDS = require("../MotorCommands.js")
router = EXPRESS.Router();

router.get("/api/status", function(req, res){
  res.end(JSON.stringify({"status":"good"}))
})
router.post("/api/write", function(req,res){
  let parameters = req.body;
  if(parameters.Motor1 != undefined && parameters.Motor2 != undefined && parameters.Motor3 != undefined){
    //MOTORCOMMANDS.write(parameters.Motor1, parameters.Motor2, parameters.Motor3)
    console.log(JSON.stringify(parameters));
    res.end(JSON.stringify({"status":"good"}))
  }
})

module.exports = router;
