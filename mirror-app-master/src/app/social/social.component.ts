import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  private p5: any;
  private sketch;

  constructor() { }

  ngOnInit() {
    this.drawSketch();
  }

  drawSketch(){
    let title, button, img1, img2;

    this.sketch = (s) => {

      s.preload = () => {
        s.frameRate(60);
      }

      s.setup = () => {
        s.createCanvas(400, 300).parent('social-canvas'); 
        s.fill('rgba(255, 255, 255, 0.3)');
        s.noStroke();
        s.rect(0, 0, 400, 300, 15); // create background rectangle

        s.fill('rgba(0, 0, 0, 0.4)');

        s.rect(20, 60, 360, 100, 15); //tweet 1
        img1 = s.createImg('../../assets/cheeto.png', "").parent('social-canvas');
        img1.position(35, 80);

        s.rect(20, 180, 360, 100, 15); //tweet 2
        img2 = s.createImg('../../assets/bot.png', "").parent('social-canvas');
        img2.position(35, 200);

        s.fill(255,255,255);
        s.textSize(28);
        s.textFont('SF-Pro');
        title = s.text('Twitter', 160, 40);

        s.textSize(18);
        s.text('Despite the constant negative press covfefe', 110, 100, 250, 80); // social message 1
        s.text('Beep boop I am a bot', 110, 220, 250, 80); // social message 2

        s.textStyle(s.BOLD);
        s.textSize(20);
        s.text('Donald J. Trump', 110, 90); // social sender 1
        s.text('Twitter Bot', 110, 210); // social sender 2

        // button = s.createImg('../../assets/close.png', "close").parent('social-canvas'); // create close button
        // button.position(340,20);
        // button.mousePressed(s.selfDestruct); 
      };


      s.selfDestruct = () => {
        s.remove();
      };
        
    }

    let canvas = new p5(this.sketch);
  }

}
