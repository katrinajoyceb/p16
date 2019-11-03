import { Component, OnInit, Input } from '@angular/core';
import { Activity } from '../mirror' ;
import { MirrorService } from '../mirror.service';


@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  public now: Date = new Date();
  CurrentTime: any;
  activityList: Activity[];
  stepsList: Number[]

  constructor(private mirrorService: MirrorService) {
      setInterval(() => {
        this.now = new Date();
      }, 1);
  }

  ngOnInit() {}

}



