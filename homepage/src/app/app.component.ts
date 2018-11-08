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

  constructor(private http: HttpClient){
    this.getStatus().subscribe((data)=>{
      this.motor1PWMModifier = 1;
      this.motor2PWMModifier = 2;
      this.motor3PWMModifier = 3;
    })
  }

  getStatus(){
    return this.http.get('/status')
  }

}
