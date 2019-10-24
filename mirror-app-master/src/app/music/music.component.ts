import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';
import "p5/lib/addons/p5.sound";

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  private p5: any;
  private sketch;

  constructor() { }

  ngOnInit() {
    this.drawSketch();
  }

  drawSketch(){
    let song;
    let playButton;
    let pauseButton;
    let closeButton;
    let next;
    let prev;
    let title;

    this.sketch = (s) => {

      s.preload = () => {
        s.soundFormats('mp3');
        song = s.loadSound('../../assets/TruthHurts.mp3');
        s.frameRate(60);
      }

      s.setup = () => {
        s.createCanvas(390, 163).parent('music-canvas'); 
        s.fill('rgba(0, 0, 0, 0.4)');
        s.noStroke();
        s.rect(0, 0, 390, 163, 15);

        s.fill(255,255,255);
        s.textSize(32);
        s.textFont('SF-Pro');
        title = s.text('Truth Hurts - Lizzo', 50, 40);

        s.createPlayButton();
        s.createPauseButton();
        pauseButton.hide();

        prev = s.createImg('../../assets/previous-track.png', "").parent('next');
        prev.position(65,70);

        next = s.createImg('../../assets/play-next-button.png', "").parent('prev');
        next.position(280,70);

        closeButton = s.createImg('../../assets/close.png', "play").parent('music-canvas'); // create close button
        closeButton.position(350,20);
        closeButton.mousePressed(s.selfDestruct); 

      };

      s.createPlayButton = () => {
        playButton = s.createImg('../../assets/play-arrow.png', "play").parent('button');
        playButton.position(175,70);
        playButton.mousePressed(s.playMusic); 
      }

      s.createPauseButton = () => {
        pauseButton = s.createImg('../../assets/pause-button.png', "pause").parent('button');
        pauseButton.position(175,70);
        pauseButton.mousePressed(s.playMusic); 
      }

      s.selfDestruct = () => {
        s.remove();
      }

      s.draw = () => {
        //s.background(255, 255, 255, 2);
      };


      s.playMusic = () => {
        if (song.isPlaying()) {
          playButton.show();
          pauseButton.hide();
          song.stop();
        } else {
          pauseButton.show();
          playButton.hide();
          song.play();
        }
        
      }
    }

    let canvas = new p5(this.sketch);
  }

}
