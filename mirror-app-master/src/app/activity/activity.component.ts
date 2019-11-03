import { Component, OnInit } from '@angular/core';

import * as pluginDataLabels from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})

export class ActivityComponent {

  constructor() {}

  ngOnInit() {}


  public colors = [
    {backgroundColor: 'rgb(54,51,255,0.4)',
    borderColor: 'rgb(54,51,255,0.8)',}
  ];

  public barChartPlugins = [pluginDataLabels];

  public barChartOptions = {
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
    title: {display: true, fontColor: 'white', fontSize: 18, text: '7 Day Step Stats'},
    legend: {display: false},
    scales: {
      yAxes: [{ scaleLabel: {display: true, labelString: 'Steps', fontColor: 'white'},
      ticks: { display: false, beginAtZero: true, stepValue: 1000, max: 12000, fontColor: 'white'}}],
      xAxes: [{ticks: {fontColor: 'white'}}]
    },
  };

  public barChartLabels = ['10/13', '10/14', '10/15', '10/16', '10/17', '10/18', '10/19'];
  public barChartType = 'bar';
  public barChartTitle = true;
  public barChartData = [
    {data: [6542, 4378, 8562, 7391, 2423, 10251, 7577]}
  ];

}
