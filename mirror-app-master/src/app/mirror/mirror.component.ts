import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-mirror',
  templateUrl: './mirror.component.html',
  styleUrls: ['./mirror.component.css']
})
export class MirrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const sketch = (s) => {

      s.preload = () => {
        // preload code
      }

      s.setup = () => {
        let constraints = {
          video: {
          },
          audio: false
        };
        var myCanvas = s.createCapture(constraints);
        myCanvas.size(1440,1080)
        myCanvas.parent("mirror");


      };

      s.draw = () => {
        s.background(255);
      };
    }

    let canvas = new p5(sketch);
  }

}
