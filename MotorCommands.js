const GPIO = require("pigpio").Gpio

var currentSpeeds = {
  Motor1:1500,
  Motor2:1500,
  Motor3:1500
}

var Motor1 = new GPIO(16, {mode:GPIO.OUTPUT})
var Motor2 = new GPIO(20, {mode:GPIO.OUTPUT})
var Motor3 = new GPIO(21, {mode:GPIO.OUTPUT})

function setPWM(Speed1, Speed2, Speed3){
  currentSpeeds.Motor1 = currentSpeeds.Motor1+Speed1;
  currentSpeeds.Motor2 = currentSpeeds.Motor2+Speed2;
  currentSpeeds.Motor3 = currentSpeeds.Motor3+Speed3;

  Motor1.servoWrite(currentSpeeds.Motor1);
  Motor2.servoWrite(currentSpeeds.Motor2);
  Motor3.servoWrite(currentSpeeds.Motor3);
}

function getPWM(){
  return {
    "motor1":currentSpeeds.Motor1,
    "motor2":currentSpeeds.Motor2,
    "motor3":currentSpeeds.Motor3
  }
}

function stepPWM(increment, motor){
  if(motor == 1)
    {
      currentSpeeds.Motor1 += increment;
      Motor1.servoWrite(currentSpeeds.Motor1);
    }
  if(motor == 2)
    {
      currentSpeeds.Motor2 += increment;
      Motor2.servoWrite(currentSpeeds.Motor2);
    }
  if(motor == 3)
    {
      currentSpeeds.Motor3 += increment;
      Motor3.servoWrite(currentSpeeds.Motor3);
    }

  Motor1.servoWrite(currentSpeeds.Motor1);
  Motor2.servoWrite(currentSpeeds.Motor2);
  Motor3.servoWrite(currentSpeeds.Motor3);
}

module.exports = {
  status:currentSpeeds,
  write:setPWM,
  read:getPWM,
  step:stepPWM
}
