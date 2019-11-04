import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('menuChoice', [
      state('health', style({
        transform: 'rotate(-108deg)',
      })),
      state('message',   style({
        transform: 'rotate(-144deg)',
      })),
      state('news',   style({
        transform: 'rotate(-72deg)',
      })),
      transition('* => *', animate('500ms ease')),
      state('social', style({
        transform: 'rotate(-180deg)',
      })),
      state('music',   style({
        transform: 'rotate(-36deg)',
      })),
      state('none',   style({
        transform: 'rotate(0deg)',
      })),
   
    ]),

    trigger('lights', [
      state('on', style({
        background: 'white'
      })),
      state('off',   style({
        background: 'black'
      })),
      transition('* => *', animate('500ms ease')),
   
    ]),

    trigger('touched', [
      state('on', style({
        background: 'white',
        filter: 'invert(.5)'
      })),
      state('off',   style({
        filter: 'invert(0)'
      })),
      transition('* => *', animate('500ms ease')),
   
    ])
  ]

  
})
export class AppComponent {
  title = 'mirror-app';
  control = false;
  public now: Date = new Date();
  health = false;
  message = false;
  social = false;
  music = false;
  news = false;
  visible = false;
  stateName: string = 'none';
  light: boolean = false;
  menu = true;
  isMenu = "hide"

  


  hideMenu(){
    this.menu = !this.menu;
    
  }

  turnLight(){
    this.light = !this.light;
  }


  show(choice: string){
    console.log(choice);

    this.visible = true;

    if(choice == 'health'){
      this.stateName = 'health';
      this.health = true;
      // this.message = false;
      // this.news = false;
      // this.social = false;
      // this.music = false; 
    }
    else if(choice == 'message'){
      this.stateName = 'message';
        this.message = true;
      //   this.health = false;
    
      // this.news = false;
      // this.social = false;
      // this.music = false; 
    }
    else if(choice == 'news'){
      this.stateName = 'news';
      
      this.news = true;
      // this.social = false;
      // this.music = false; 
      // this.health = false;
      // this.message = false;
    }
    else if(choice == 'social'){
      this.stateName = 'social';
    
      this.social = true;
      // this.music = false;  
      //  this.health = false;
      // this.message = false;
      // this.news = false;
    }
    else if(choice == 'music'){
      this.stateName = 'music';
      this.music = true; 
      // this.health = false;
      // this.message = false;
      // this.news = false;
      // this.social = false;
      
    }

    
  }


  hide(choice: string){
    console.log(choice);

    this.visible = true;

    if(choice == 'health'){
      this.stateName = 'none';
      this.health = false;
      // this.message = false;
      // this.news = false;
      // this.social = false;
      // this.music = false; 
    }
    else if(choice == 'message'){
      this.stateName = 'none';
        this.message = false;
      //   this.health = false;
    
      // this.news = false;
      // this.social = false;
      // this.music = false; 
    }
    else if(choice == 'news'){
      this.stateName = 'none';
      
      this.news = false;
      // this.social = false;
      // this.music = false; 
      // this.health = false;
      // this.message = false;
    }
    else if(choice == 'social'){
      this.stateName = 'none';
    
      this.social = false;
      // this.music = false;  
      //  this.health = false;
      // this.message = false;
      // this.news = false;
    }
    else if(choice == 'music'){
      this.stateName = 'none';
      this.music = false; 
      // this.health = false;
      // this.message = false;
      // this.news = false;
      // this.social = false;
      
    }

    
  }
}
