import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnInit {

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
    title: {display: true, fontColor: 'white', fontSize: 18, text: '7 Day Weight Stats'},
    legend: {display: false},
    scales: {
      yAxes: [{ scaleLabel: {display: true, labelString: 'Pounds', fontColor: 'white'},
      ticks: { display: false, stepValue: 20, min: 150, max: 190, fontColor: 'white'}}],
      xAxes: [{ticks: {fontColor: 'white'}}]
    },
  };

  public lineChartLabels = ['10/13', '10/14', '10/15', '10/16', '10/17', '10/18', '10/19'];
  public lineChartType = 'line';
  public lineChartData = [
    {data: [175, 171, 173, 173, 172, 174, 171], fill: false}
  ];

}
