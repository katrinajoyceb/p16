import { Component, OnInit } from '@angular/core';
import { trigger,
  transition,
  query,
  style,
  animate,
  animateChild,
  group,
} from '@angular/animations';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css'],
  animations: [
    trigger('panelSwitch', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '500px'
          })
        ], { optional: true }),
        query(':enter', [
          style({ left: '-300%'})
        ], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
        query(':leave', [
          animate('500ms ease-out', style({ left: '300%'}))
        ], { optional: true }),
        query(':enter', [
          animate('500ms ease-out', style({ left: '0%'}))
        ], { optional: true }),
        query(':enter', animateChild(), { optional: true }), 
        ])
      ])
    ])
  ]
})
export class HealthComponent implements OnInit {
  visible: boolean = false;
  name: string;

  constructor() { }

  ngOnInit() {
  }

  show(name: string){
    this.visible = !this.visible;
    this.name = name;
    
   
  }

}
