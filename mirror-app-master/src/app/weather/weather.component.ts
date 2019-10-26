import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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


      s.preload = () => {
        
        let url = "https:api.openweathermap.org/data/2.5/weather?q=Lubbock&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141";
        json = s.loadJSON(url);
       

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
        clouds = s.loadImage("https://i.imgur.com/NlLBaJ8.png");
        clear = s.loadImage("https://i.imgur.com/NndQos2.png");

    }

      s.setup = () => {
          var myCanvas = s.createCanvas(954, 398);
           temperature = s.int(json.main.temp);
           weather = json.weather[0].main;
           high = s.int(json.main.temp_max);
           low = s.int(json.main.temp_min);
           myCanvas.parent("weather");

      };

      s.draw = () => {
        s.background('rgba(255, 255, 255, 0.3)');
        s.fill(255);


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
           s.image(clouds, -20, 90, 340, 320);
         }
        else
         {
           s.image(clear, 30, 120, 240, 240);
         }
        

        s.textSize(100);
        s.stroke('#222222');
        s.strokeWeight(3);
        s.textFont('SF Pro Display - Bold');
        s.text("Today's weather", 60, 100);
        
        s.textSize(50);
        s.stroke('#FFFFFF');
        s.strokeWeight(1);
        s.textFont('SF Pro Display');
        s.text("Lubbock, TX", 300, 200);
        
        s.textSize(30);
        s.stroke('#FFFFFF');
        s.strokeWeight(0);
        s.textFont('SF Pro Display');
        s.text("Forecast: " + weather, 300, 250);
        s.text("H: "+ high + "\xB0" + " / " + "L: " + low + "\xB0", 300, 300);
        
        s.textSize(160);
        s.stroke('#FFFFFF');
        s.textFont('SF Pro Display - Semibold');
        s.text(temperature, 640, 290);
        
        s.textSize(160);
        s.stroke('#FFFFFF');
        s.textFont('SF Pro Display - Thin');
        s.text("\xB0", 810, 290);
        
        s.textSize(120);
        s.stroke('#FFFFFF');
        s.textFont('SF Pro Display ');
        s.text("F", 880, 290);

        //  s.background(0);
        //  s.rect(100, 100, 100, 100);
      };
    }

    let canvas = new p5(sketch);
  }

}
