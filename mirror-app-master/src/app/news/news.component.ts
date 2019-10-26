import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  private p5: any;
  private sketch;
  private today;

  constructor() {
    this.today = new Date();
    let dd = (this.today.getDate())
    var mm = (this.today.getMonth() + 1)
    var yyyy = this.today.getFullYear();

    this.today = mm + '/' + dd + '/' + yyyy;

   }

  ngOnInit() {
    this.drawSketch();
  }

  public drawSketch(){
    let news1, news2, news3, closeButton;

    this.sketch = (s) => {

      s.preload = () => {
        s.frameRate(60);
      }

      s.setup = () => {
        s.createCanvas(390, 489).parent('news-canvas'); 
        s.fill('rgba(255, 255, 255, 0.3)');
        s.noStroke();
        s.rect(0, 0, 390, 489, 15); // draw background rectangle

        s.fill('rgba(0, 0, 0, 0.4)');
        s.noStroke();


        s.rect(20, 80, 350, 120, 15); //news story 1
        news1 = s.createImg('../../assets/news1.jpeg', "").parent('news-1');
        news1.position(30, 90);

        s.rect(20, 215, 350, 120, 15); //news story 2
        news2 = s.createImg('../../assets/news2.jpeg', "").parent('news-2');
        news2.position(30, 225);

        s.rect(20, 350, 350, 120, 15); //news story 3
        news3 = s.createImg('../../assets/news3.jpeg', "").parent('news-3');
        news3.position(30, 360);

        s.fill(255,255,255);
        s.textSize(28);
        s.textFont('SF-Pro');

        s.text('News for '+ this.today, 65, 50);

        s.textSize(22);
        s.text('Texas Tech Football 2020 Schedule Announced', 150, 100, 180, 80); // news title 1
        s.text('Texas Tech Basketball Is Awesome', 150, 235, 180, 80); // news title 2
        s.text('New Texas Tech Vet School To Open in 2021', 150, 370, 180, 80); // news title 3

        closeButton = s.createImg('../../assets/close.png', "play").parent('news-canvas'); // create close button
        closeButton.position(350,20);
        closeButton.mousePressed(s.selfDestruct); 
      };

      s.selfDestruct = () => {
        s.remove();
      }
        
    }

    let canvas = new p5(this.sketch);
  }

}
