import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-statistique',
  templateUrl: './dashboard-statistique.component.html',
  styleUrls: ['./dashboard-statistique.component.css']
})
export class DashboardStatistiqueComponent implements OnInit {

  constructor() { }


  // Option premier graphique (line) //
  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    elements: {
      line: {
        tension: 0
      },
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          min: 50,
          max: 250,
          stepSize: 50,
          fontColor: '#6271d2',
        },
        gridLines: {
          color: 'transparent'
        }
      }],
      xAxes : [{
          ticks: {
            fontColor: '#d28e62',
          },
        gridLines: {
          color: 'transparent',
        }
      }]
    }
  };



  public lineChartLabels = ['0', '', '5', '', '10', '', '15', '', '20', '', '25', ''];
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartData = [
    {
      data: [125, 170, 160, 170, 50, 200, 150, 165, 160, 200, 165, 200],
      label: 'A completer',
      borderColor: '#6271d2',
      backgroundColor: 'transparent',
      pointBackgroundColor: '#6271d2'
    },
  ];
  ngOnInit() {
  }

}
