import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';
 


@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {



  constructor() { }

  ngOnInit() {
    const sketch = (s) => {
      let date_time = 0;
      let json;
      let wifi_img;
      let twitter;
      let message;
      let health;
      let time;
      let date;
      let bold;
      let semi;
      let reg;
      let thin;
      let day;


      s.preload = () => {
        let url = 'https://worldtimeapi.org/api/timezone/America/Chicago';
        json = s.loadJSON(url);
        thin = s.loadFont('../../assets/SF-Pro-Display-Thin.otf');
        reg = s.loadFont('../../assets/SF-Pro-Text-Regular.otf');
        semi = s.loadFont('../../assets/SF-Pro-Display-Semibold.otf');
        bold = s.loadFont('../../assets/SF-Pro-Text-Regular.otf');   
    }

      s.setup = () => {
        var myCanvas = s.createCanvas(390, 307);
        day = new Date(json.utc_datetime);
        date = s.split(s.str(day), ' ');
        time = s.split(date[4], ':')
        wifi_img = s.loadImage("../../assets/wifi.png");
        twitter = s.loadImage("../../assets/twitter.png");
        message = s.loadImage("../../assets/message.png");
        health = s.loadImage("../../assets/health.png");
        myCanvas.parent("clock");

      };

      s.draw = () => {
        s.fill('rgba(255, 255, 255, 0.3)');
        s.image(wifi_img, 350, 7, 40, 27);
        s.rect(13, 172, 365, 40, 10);
        s.rect(13, 216, 365, 40, 10);
        s.rect(13, 260, 365, 40, 10);
        s.fill(255);
        

        s.textSize(100);
        s.stroke('#222222');
        s.strokeWeight(2);
        s.textFont(reg);
        if(time[0] > 12){
          if(time[1] < 10){
            s.text(time[0]-12 + ':0'+ time[1] + 'PM', 20, 100);
          }
          else{
            s.text(time[0]-12 + ':'+ time[1] + 'PM', 20, 100);
          }
        }
        else{
          if(time[1] < 10){
            s.text(time[0] + ':0' + time[1] + 'AM', 20, 100);
          }
          else{
            s.text(time[0] + ':' + time[1] + 'AM', 20, 100);
          }
        }
        s.textSize(40);
        s.text(date[0] + ' ' + date[1] + ' ' + date[2]+ ", " + date[3], 30, 150);
        
        s.textSize(20);
        s.strokeWeight(1);
        // s.textFont('SF Pro Display');
        s.text("New message from: Kat", 30, 200);
        s.image(message, 308, 172, 100, 35);
        
        s.textSize(20);
        // s.textFont('SF Pro Display');
        s.text("Retweet from: ", 30, 243);
        s.image(twitter, 335, 222, 42, 30);
        
        s.textSize(20);  
        // s.textFont('SF Pro Display');
        s.text("You slept 8 hours today!", 30, 286);
        s.image(health, 340, 265, 35, 27);
        
      };


      s.selfDestruct = () => {
        s.remove();
      };
    }

    let canvas = new p5(sketch);
  }

}
