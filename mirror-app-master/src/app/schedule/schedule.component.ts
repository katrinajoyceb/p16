import { Component, OnInit, Input } from '@angular/core';
import * as p5 from 'p5';
 


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  
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


      s.preload = () => {
        red = s.loadImage('assets/red.png');
        blue = s.loadImage('assets/blue.png');
        back = s.loadImage('assets/back.png');
    }

      s.setup = () => {
        var myCanvas = s.createCanvas(1440, 50);
        myCanvas.parent("schedule");

      };

      s.draw = () => {
        //s.background(220);
        //s.image(back, base_x, base_y, width + image_gap, height + (image_gap*4));
  
        s.textSize(20);
        s.fill(255, 255, 255);
  

       
          s.image(red, 400, 0, 400, 0);
          s.text("Intro to Artificial Intelligence", 540, 30); 
          s.text("2:00-2:50", 420, 30);
       
      
         s.textSize(20);
         s.image(blue, 810, 0, 400, 0);  
         s.text("4:00-10:00", 820, 30);
      
         s.text("Work", 950, 30);   
       
       
        
        
  
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
