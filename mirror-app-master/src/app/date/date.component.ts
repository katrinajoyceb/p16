import { Component, OnInit, Input } from '@angular/core';
import * as p5 from 'p5';
 


@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  public now: Date = new Date();
  

  constructor() { }

  ngOnInit() {
  }

}



