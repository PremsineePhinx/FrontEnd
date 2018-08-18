import { Component, OnInit } from '@angular/core';
import { Chart} from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var ctx = document.getElementById("myChart");
    var stackedBar = new Chart(ctx, {
      type: 'bar',
      data:{ 
        datasets: [{
          label: 'test',
          data: [{x:'2016-12-25', y:20}, {x:'2016-12-26', y:10}]}
        ]},
      options: {
          scales: {
              xAxes: [{
                  stacked: true
              }],
              yAxes: [{
                  stacked: true
              }]
          }
      }
  });
  
  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
          data: [10, 20, 30]
      }],
  
      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
          'Red',
          'Yellow',
          'Blue'
      ]
    }
  });
  }

}
