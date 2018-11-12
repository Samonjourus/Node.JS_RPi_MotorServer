import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homepage';
  motor1PWMModifier=0;
  motor2PWMModifier=0;
  motor3PWMModifier=0;
  host:string = "http://127.0.0.1:8080";

  constructor(private http: HttpClient){
    this.getStatus().subscribe((data)=>{
      this.motor1PWMModifier = data["motor1"];
      this.motor2PWMModifier = data["motor2"];
      this.motor3PWMModifier = data["motor3"];
    })
  }

  step(number, motor){
    console.log("changing motor " + motor + " PWM by " + number);
    this.writeStep({"step":number,"motor":motor}).subscribe((data)=>{
      this.motor1PWMModifier = data["motor1"];
      this.motor2PWMModifier = data["motor2"];
      this.motor3PWMModifier = data["motor3"];
    });
  }

  getStatus(){
    return this.http.get(this.host+'/api/status')
  }

  writeStep(data){
    return this.http.post(this.host+'/api/step', data)
  }

}
