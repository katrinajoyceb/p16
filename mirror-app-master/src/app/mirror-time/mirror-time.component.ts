import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-mirror-time',
  templateUrl: './mirror-time.component.html',
  styleUrls: ['./mirror-time.component.css']
})
export class MirrorTimeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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
    title: {display: true, fontColor: 'white', fontSize: 18, text: '7 Day Mirror Time Stats'},
    legend: {display: false},
    scales: {
      yAxes: [{ scaleLabel: {display: true, labelString: 'Minutes', fontColor: 'white'},
      ticks: { display: false, beginAtZero: true, stepValue: 5, max: 80, fontColor: 'white'}}],
      xAxes: [{ticks: {fontColor: 'white'}}]
    },
  };

  public barChartLabels = ['10/13', '10/14', '10/15', '10/16', '10/17', '10/18', '10/19'];
  public barChartType = 'bar';
  public barChartTitle = true;
  public barChartData = [
    {data: [33, 45, 22, 60, 28, 31, 16]}
  ];

}
