import { Component, OnInit } from '@angular/core';
import { Chart} from 'chart.js';
import { VocabService } from '../services/vocab.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  top:any;
  topWord: any[] = [];
  constructor(private api:VocabService) { }

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
    this.api.getVocabTop()
      .subscribe(data => {this.top = data

      

    var ctx = document.getElementById("myPieChart");
    var myPieChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
            data: [this.top[0].mistakeStatistic, this.top[1].mistakeStatistic, this.top[2].mistakeStatistic,this.top[3].mistakeStatistic,this.top[4].mistakeStatistic,this.top[5].mistakeStatistic],
            backgroundColor: [ 'rgb(255, 87, 51)','rgba(255, 138, 101)','rgba(192, 202, 51 )','rgba(255, 193, 7)','rgb(255, 215, 128)','rgba(144, 202, 249)']  }],
        labels: [
          this.top[0].hiragana, this.top[1].hiragana, this.top[2].hiragana,this.top[3].hiragana,this.top[4].hiragana,this.top[5].hiragana
          ]
        }
      });
    })
  }

}
