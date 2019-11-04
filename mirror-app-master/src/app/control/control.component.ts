import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  constructor() { }


  ngOnInit() {
    const sketch = (s) => {
      let img_black_tint;
    
      let image_round;
      let images = [];
  

      s.preload = () => {
        images[0] = s.loadImage('assets/sun.png');
        images[1] = s.loadImage('assets/settings.png');
        images[2] = s.loadImage('assets/rotation_lock.png');
        images[3] = s.loadImage('assets/camera.png');
        img_black_tint = s.loadImage('assets/black_tint.png');
        image_round = s.loadImage('assets/round.png');  
    }

      s.setup = () => {
        var myCanvas = s.createCanvas(480, 70);
        myCanvas.parent("control");
       

      };

      s.draw = () => {
       
        s.strokeWeight(0);
        let c = s.color(120,120,120,100);
        s.fill(c);    
        s.image(image_round, 10,5 ,60,60);
        s.textSize(14);
        s.fill(255, 255, 255);

        s.image(img_black_tint, 80, 5, 60, 60);
        s.image(images[0], 93, 18, 35, 35);

        s.image(img_black_tint, 2*80, 5, 60, 60);
        s.image(images[1], 173, 18, 35, 35);

        s.image(img_black_tint, 3*80, 5, 60, 60);
        s.image(images[2], 253, 18, 35, 35);

        s.image(img_black_tint, 4*80, 5, 60, 60);
      };

    }

    let canvas = new p5(sketch);
  }


}
