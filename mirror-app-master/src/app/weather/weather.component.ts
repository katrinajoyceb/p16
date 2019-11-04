import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  temp: number;

  constructor() { }

  ngOnInit() {

    let temp;
    const sketch = (s) => {
      let temperature = 0;
      let weather = "";
      let high = "";
      let low = "";
      let json;
     
      let thunderstorm;
      let drizzle;
      let rain;
      let snow;
      let mist;
      let smoke;
      let haze;
      let dust;
      let fog;
      let sand;
      let ash;
      let squall;
      let tornado;
      let clouds;
      let clear;
      let bold;
      let semi;
      let reg;
      let thin;
      let back;


      s.preload = () => {
        
        let url = "https:api.openweathermap.org/data/2.5/weather?q=Lubbock&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141";
        json = s.loadJSON(url);
       
        thin = s.loadFont('../../assets/SF-Pro-Display-Thin.otf');
        reg = s.loadFont('../../assets/SF-Pro-Text-Regular.otf');
        semi = s.loadFont('../../assets/SF-Pro-Display-Semibold.otf');
        bold = s.loadFont('../../assets/SF-Pro-Display-Bold.otf');

        thunderstorm = s.loadImage("https://i.imgur.com/R7kd3Gu.png");
        drizzle = s.loadImage("https://i.imgur.com/ytCplOo.png");
        rain = s.loadImage("https://i.imgur.com/WvuDESn.png");
        snow = s.loadImage("https://i.imgur.com/qVI31r6.png");
        mist = s.loadImage("https://i.imgur.com/legLz93.png");
        smoke = s.loadImage("https://i.imgur.com/bRhsaSw.png");
        haze = s.loadImage("https://i.imgur.com/jaonwG8.png");
        dust = s.loadImage("https://i.imgur.com/gwWEybX.png");
        fog = s.loadImage("https://i.imgur.com/55eaPfx.png");
        sand = s.loadImage("https://i.imgur.com/K8y9Bwk.png");
        ash = s.loadImage("https://i.imgur.com/3q8k6g3.png");
        squall = s.loadImage("https://i.imgur.com/swjlqhL.png");
        tornado = s.loadImage("https://i.imgur.com/mHzgNau.png");
        clouds = s.loadImage("assets/clouds.png");
        clear = s.loadImage("assets/clear.png");
        back = s.loadImage('assets/back.png');

    }

      s.setup = () => {
          //var myCanvas = s.createCanvas(954, 398);
          var myCanvas = s.createCanvas(480, 360);
           temperature = s.int(json.main.temp);
           this.temp = temperature;
          
           weather = json.weather[0].main;
           high = s.int(json.main.temp_max);
           low = s.int(json.main.temp_min);
           myCanvas.parent("weather");
           

      };

      s.draw = () => {
        
        

        s.fill(255);
       
        //s.rect(100,50,200,60);


        if (weather === 'Thunderstorm')
         {
           s.image(thunderstorm, -10, 80, 320, 330);
         }
        else if(weather === 'Drizzle')
         {
           s.image(drizzle, 10, 70, 300, 300);
         }
        else if(weather === 'Rain')
         {
           s.image(rain, 10, 110, 280, 270);
         }
        else if(weather === 'Snow')
         {
           s.image(weather, 0, 90, 300, 300);
         }
        else if(weather === 'Mist')
         {
           s.image(mist, -50, 60, 420, 340);
         }
        else if(weather === 'Smoke')
         {
           s.image(smoke, -30, 100, 350, 250);
         }
        else if(weather === 'Haze')
         {
           s.image(haze, -40, 50, 400, 360);
         }
        else if(weather === 'Dust')
         {
           s.image(dust, 40, 130, 210, 210);
         }
        else if(weather === 'Fog')
         {
           s.image(fog, -10, 70, 320, 320);
         }
        else if(weather === 'Sand')
         {
           s.image(sand, -50, 70, 400, 400);
         }
        else if(weather === 'Ash')
         {
           s.image(ash, 50, 130, 220, 210);
         }
        else if(weather === 'Squall')
         {
           s.image(squall, 40, 130, 240, 180);
         }
        else if(weather === 'Tornado')
         {
           s.image(tornado, 50, 130, 230, 230);
         }
        else if(weather === 'Clouds')
         {
           s.image(clouds, 50, -30, 270, 250);
         }
        else
         {
           s.image(clear, 170, 10, 150, 150);
         }
        
        // s.textSize(90);
        // s.textSize(60);
         s.stroke('#222222');
        // s.textFont(reg);
        // // s.strokeWeight(2);
        // // s.textFont(thin);
       
        
        
       
        s.textSize(25);
        // // s.stroke('#FFFFFF');
        // // s.strokeWeight(3);
        
        
        // // s.stroke('#FFFFFF');
        // // s.strokeWeight(0);
        // // s.textFont('SF-Pro');
        
         s.text(weather, 330, 150);
         s.textSize(16);
         s.text("H: "+ high + "\xB0" + " / " + "L: " + low + "\xB0", 25, 150);
        

       
         s.textSize(90);
         s.strokeWeight(2);
        // // s.stroke('#FFFFFF');
        // // s.textFont('SF-Pro');
        s.fill(0);
         s.text(temperature + "\xB0", 30, 120);
        
         s.fill(255);
         s.text(temperature + "\xB0", 25, 115);
        
        // s.textSize(50);
        // s.stroke('#FFFFFF');
        // s.textFont('SF-Pro');
        // s.text("\xB0", 360, 125);
        
        // s.textSize(60);
        // // s.stroke('#FFFFFF');
        // // s.textFont('SF-Pro');
        // s.text("F", 330, 145);

        //  s.background(0);
        //  s.rect(100, 100, 100, 100);
        
      };
    }

    let canvas = new p5(sketch);
console.log(this.temp);
  }

}
