import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  private p5: any;
  private sketch;

  constructor() { }

  ngOnInit() {
    this.drawSketch();
  }

  drawSketch(){
    let title, button;

    this.sketch = (s) => {

      s.preload = () => {

        s.frameRate(60);
      }

      s.setup = () => {
        s.createCanvas(380, 360).parent('messages-canvas'); 
        s.fill('rgba(0, 0, 0, 0.4)');
        s.noStroke();
        s.rect(0, 0, 380, 360, 15);

        s.fill('rgba(0, 0, 0, 0.4)');

        s.stroke(255);
        s.rect(20, 60, 340, 80, 15); //message 1

        s.noStroke();

        s.rect(20, 160, 340, 80, 15); //message 2

        s.rect(20, 260, 340, 80, 15); //message 3

        s.fill(255,255,255);
        s.textSize(28);
        title = s.text('Messages', 120, 40);

        button = s.createImg('../../assets/close.png', "play").parent('messages-canvas'); // create close button
        button.position(340,20);
        button.mousePressed(s.selfDestruct); 

        s.textSize(18);
        s.text('Can you pick up eggs at the store?', 40, 120);
        s.text('Hey!', 40, 220);
        s.text('I love you! Have a great day!', 40, 320);

        s.textStyle(s.BOLD);
        s.textSize(22);
        s.text('Kat', 40, 90); // message sender 1
        s.text('1-555-555-5555', 40, 190); // message sender 2
        s.text('Mom', 40, 290); // message sender 3

      };


      s.selfDestruct = () => {
        s.remove();
      };
        
    }

    let canvas = new p5(this.sketch);
  }

}
