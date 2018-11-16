const EXPRESS = require("express")
const MOTORCOMMANDS = require("../MotorCommands.js")
router = EXPRESS.Router();

router.get("/api/status", function(req, res){
  PWM = MOTORCOMMANDS.read();
  PWM["status"] = "good";
  res.end(JSON.stringify(PWM));
})
router.post("/api/write", function(req,res){
  let parameters = req.body;
  if(parameters.Motor1 != undefined && parameters.Motor2 != undefined && parameters.Motor3 != undefined){
    MOTORCOMMANDS.write(parameters.Motor1, parameters.Motor2, parameters.Motor3)
    console.log(JSON.stringify(parameters));
    PWM = MOTORCOMMANDS.read();
    PWM["status"] = "good";
    res.end(JSON.stringify(PWM));
  }
})

router.post("/api/reset", function(req,res){
  MOTORCOMMANDS.reset();
  PWM = MOTORCOMMANDS.read();
  PWM["status"] = "good";
  res.end(JSON.stringify(PWM));
})

router.post("/api/step", function(req,res){
  if(req.body.step != undefined && req.body.motor != undefined){
    MOTORCOMMANDS.step(req.body.step,req.body.motor)
    PWM = MOTORCOMMANDS.read();
    PWM["status"] = "good";
    res.end(JSON.stringify(PWM));
  }
})

module.exports = router;
