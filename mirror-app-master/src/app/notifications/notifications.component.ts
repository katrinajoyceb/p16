import { Component, OnInit, Input } from '@angular/core';
import * as p5 from 'p5';
 


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  
  time: string;
  event: string;
 


  constructor() { }

  ngOnInit() {
    const sketch = (s) => {
      let red;
      let blue;
      let back
      
      let height = 150;
      let width = 400;
      
      let base_x = 10;
      let base_y =10;
      
      let image_gap =5;
      let message;
      let twitter;
      let health;


      s.preload = () => {
        red = s.loadImage('assets/red.png');
        blue = s.loadImage('assets/blue.png');
        back = s.loadImage('assets/back.png');
        message = s.loadImage('assets/text.png');
        twitter = s.loadImage('assets/twitter.png');
        health = s.loadImage('assets/health.png');
    }

      s.setup = () => {
        var myCanvas = s.createCanvas(1440, 50);
        myCanvas.parent("notifications");

      };

      s.draw = () => {
        //s.background(220);
        //s.image(back, base_x, base_y, width + image_gap, height + (image_gap*4));
  
        s.textSize(20);
        s.fill(255, 255, 255);
  

       
        s.image(blue, 300, 0, 350, 0);
        s.image(message, 310, 10, 30, 30);
        s.text("New Message From: Cat", 360, 30); 
          
       
        
         s.image(red, 660, 0, 350, 0);  
         s.image(twitter, 670, 10, 30, 30);
         s.text("@twitterbot posted a tweet", 710, 30);  
         
   
         s.image(blue, 1020, 0, 350, 0);  
         s.image(health, 1030, 10, 30, 30);
         s.text("You slept for 8 hours today!", 1070, 30);  
       
       
        
        
  
        // s.image(blue, base_x+ (width/3), base_y + image_gap*2 + height/3, width* (2/3), height/3);
        // s.text('10:00 - 2:00', base_x+ (width/15), (base_y + height/4 + height/3 + image_gap));
        // s.text('Work', base_x+ (width/3) + image_gap*3, base_y + height/4 + height/3 );
  
  
        // s.image(red, base_x+ (width/3), base_y + image_gap*3 + (height/3) * 2, width* (2/3), height/3);
        // s.text('3:00 - 3:50', base_x+ (width/15), ( base_y + height/4 + (height/3)*2) + image_gap) ;
        // s.text('Human Computer Interaction', base_x+ (width/3) + image_gap*3, (base_y + height/4 + (height/3)*2 + image_gap) );
        
        
      };


      s.selfDestruct = () => {
        s.remove();
      };
    }

    let canvas = new p5(sketch);
  }

}
