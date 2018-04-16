const GPIO = require("pigpio").Gpio

var currentSpeeds = {
  Motor1:1500,
  Motor2:1500,
  Motor3:1500
}

var Motor1 = GPIO(1, {mode:GPIO.OUTPUT})
var Motor2 = GPIO(1, {mode:GPIO.OUTPUT})
var Motor3 = GPIO(1, {mode:GPIO.OUTPUT})

function WriteSpeeds(Speed1, Speed2, Speed3){
  currentSpeeds.Motor1 = currentSpeeds.Motor1+Speed1;
  currentSpeeds.Motor2 = currentSpeeds.Motor2+Speed2;
  currentSpeeds.Motor3 = currentSpeeds.Motor3+Speed3;

  Motor1.servoWrite(currentSpeeds.Motor1);
  Motor2.servoWrite(currentSpeeds.Motor2);
  Motor3.servoWrite(currentSpeeds.Motor3);
}

module.exports = {
  status:currentSpeeds,
  write:WriteSpeeds
}
