import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-sleep',
  templateUrl: './sleep.component.html',
  styleUrls: ['./sleep.component.css']
})
export class SleepComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  public colors = [
    {backgroundColor: 'rgb(54,51,255,0.4)',
    borderColor: 'rgb(54,51,255,0.8)',
    pointBackgroundColor: 'rgb(54,51,255,0.4)'}
  ];

  public lineChartPlugins = [pluginDataLabels];

  public lineChartOptions = {
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
        color: 'white',
        opacity: .7,
        font: {
          size: 16,
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    title: {display: true, fontColor: 'white', fontSize: 18, text: '7 Day Sleep Stats'},
    legend: {display: false},
    scales: {
      yAxes: [{ scaleLabel: {display: true, labelString: 'Hours', fontColor: 'white'},
      ticks: { display: false, beginAtZero: true, stepValue: 2, max: 14, fontColor: 'white'}}],
      xAxes: [{ticks: {fontColor: 'white'}}]
    },
  };

  public lineChartLabels = ['10/13', '10/14', '10/15', '10/16', '10/17', '10/18', '10/19'];
  public lineChartType = 'line';
  public lineChartTitle = true;
  public lineChartData = [
    {data: [8, 7.2, 7.6, 6.2, 7, 8.1]},
  ];


}
