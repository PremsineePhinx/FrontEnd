import { Component, OnInit } from '@angular/core';
import { Chart} from 'chart.js';
import { HomeService } from '../services/home.service'
import { routerNgProbeToken } from '../../../node_modules/@angular/router/src/router_module';

export interface people{
  subject1 : any,
  subject2 : any,
  subject3 : any,
  subject4 : any
}

var people: people[] = [];
@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

    students : any;
    others : any;   
    wordsID: any;
    words:any;
    wordsTop: any[] = [];
    temp: any;
    
  constructor(private http:HomeService) {  }

  ngOnInit() {

    this.http.numberpeople111()
      .subscribe((data111) => {
      this.http.numberpeople112()
        .subscribe((data112) => {
          this.http.numberpeople113()
          .subscribe((data113) =>{
            this.http.numberpeople114().subscribe((data114) =>{
              people.push({
                subject1 : data111,
                subject2 : data112,
                subject3 : data113,
                subject4 : data114
              })

              var ctx = document.getElementById("myChart");
              var myChart = new Chart(ctx, {
                
                  type: 'bar',
                  data: {
                      labels: ["018111", "018112", "018113", "018114"],
                      datasets: [{
                          label: 'Subject',
                          data: [people[0].subject1, people[0].subject2, people[0].subject3, people[0].subject4],
                          backgroundColor: [
                              'rgba(144, 202, 249)',
                              'rgba(192, 202, 51 )',
                              'rgba(255, 193, 7)',
                              'rgba(255, 138, 101)',
                          ]
                      }]
                  },
                  options: {
                      scales: {
                          yAxes: [{
                              ticks: {
                                  beginAtZero:true
                              }
                          }]
                      }
                  }
              });
            });
          });
        });
      });
    //data of stats card
    this.countUser();
    //Grap data of topword
    this.http.getTopWord()
    .subscribe((data) => {
      console.log(data)
    var ctx = document.getElementById("myPieChart");
    var myPieChart = new Chart(ctx,{
        type: 'doughnut',
        data: {
          labels: [data[0].hiragana, data[1].hiragana, data[2].hiragana, data[3].hiragana,data[4].hiragana],
          datasets: [{ data: [data[0].stu_wrong_freq, data[1].stu_wrong_freq,data[2].stu_wrong_freq, data[3].stu_wrong_freq,data[4].stu_wrong_freq],
          backgroundColor: [ 'rgba(144, 202, 249)','rgba(255, 138, 101)','rgba(192, 202, 51 )','rgba(255, 193, 7)','rgb(255, 215, 128)']  
        }]
        }           
      });
    });
  }
  

countUser(){
    this.http.getCountStudent().
    subscribe((data) => {this.students = data});
    this.http.getCountOther().
    subscribe((data) => {this.others = data});
  }
}