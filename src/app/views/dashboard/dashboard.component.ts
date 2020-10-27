import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  today: Date;

  value = 45;

  constructor() {
    this.today = new Date();
  }

  lineChartData: ChartDataSets[] = [
    {
      data: [5000, 2200, 10000, 7500, 7700, 5900, 4000],
      label: 'Weekly sales',
    },
  ];

  lineChartLabels: Label[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  lineChartOptions = {
    responsive: true,
    animation: {
      duration: 3000,
    },
    // scales: {
    //   xAxes: [
    //     {
    //       gridLines: {
    //         display: false,
    //       },
    //     },
    //   ],
    //   yAxes: [
    //     {
    //       gridLines: {
    //         display: false,
    //       },
    //     },
    //   ],
    // },
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#17228e',
      backgroundColor: '#c8d4ff27',
      pointBorderColor: '#17228e',
      pointBackgroundColor: 'white',
      pointRadius: 5,
      pointBorderWidth: 2,
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';
  public doughnutChartColors: Color[] = [
    {
      backgroundColor: [
        'rgba(110, 114, 20,',
        'rgba(118, 183, 172, 1)',
        'rgba(0, 148, 97, 1)',
        'rgba(129, 78, 40, 1)',
        'rgba(129, 199, 111, 1)',
      ],
    },
  ];

  ngOnInit(): void {}
}
