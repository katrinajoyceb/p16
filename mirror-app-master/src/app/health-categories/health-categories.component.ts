import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-health-categories',
  templateUrl: './health-categories.component.html',
  styleUrls: ['./health-categories.component.css'],
  animations: [
    trigger('clicked', [
      state('last-clicked', style({
        backgroundColor: 'rgb(155,51,255,0.6)',
      })),
      state('not-clicked', style({
        backgroundColor: 'rgb(0,0,0,0.5)',
      })),
      transition('last-clicked <=> not-clicked', [
        animate('.2s ease-in')
      ]),
    ])
  ]
})
export class HealthCategoriesComponent implements OnInit {
  overview: boolean = true;
  name: string;
  weight: boolean = false;
  sleep: boolean = false;
  activity: boolean = false;
  mirrortime: boolean  = false;

  lastClicked = '';

  constructor() {
    
  }

  setLastClicked(button: string) {
    this.lastClicked = button;
  }
  ngOnInit() {
  }

  show(name: string){
    if(name == 'overview'){
      this.overview = true;
      this.weight = false;
      this.activity = false;
      this.mirrortime =  false;
      this.sleep =  false;
    }
    else if(name == 'weight'){
      this.overview = false;
      this.weight = true;
      this.activity = false;
      this.mirrortime =  false;
      this.sleep =  false;
    }
    else if(name == 'activity'){
      this.overview = false;
      this.weight = false;
      this.activity = true;
      this.mirrortime =  false;
      this.sleep =  false;
    }
    else if(name == 'mirrortime'){
      this.overview = false;
      this.weight = false;
      this.activity = false;
      this.mirrortime =  true;
      this.sleep =  false;
    }
    else if(name == 'sleep'){
      this.overview = false;
      this.weight = false;
      this.activity = false;
      this.mirrortime =  false;
      this.sleep =  true;
    }
       
  }

 

}
