import { Component, OnInit } from '@angular/core';
import { Chart} from 'chart.js';
import { VocabService } from '../services/vocab.service'
import { StudentService } from '../services/student.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  top:any;
  topWord: any[] = [];
  semester: any;
  course: any;
  students$: Observable<any>;
  constructor(private apiVocab:VocabService,private apiStudent:StudentService) { }

  ngOnInit() {
    this.apiStudent.getSemster()
      .subscribe(data => {this.semester = data

      this.apiStudent.getEnrollStudent(this.semester[0])
        .subscribe(data => {this.course = data
        if(this.course.length == 3){
            var ctx = document.getElementById("myChart");
            var myChart = new Chart(ctx, {
              type: 'bar',
              data:{
                datasets: [{
                    label: 'รายวิชา',
                    data: [ this.course[0].enrolled_student, this.course[1].enrolled_student, this.course[2].enrolled_student],
                    backgroundColor: [ 'rgb(255, 87, 51)','rgba(255, 138, 101)','rgba(192, 202, 51 )']  
                }],
                labels: [this.course[0].Course.id, this.course[1].Course.id, this.course[2].Course.id]
              }
          })
        }else if(this.course.length == 2){
            var ctx = document.getElementById("myChart");
            var myChart = new Chart(ctx, {
              type: 'bar',
              data:{
                datasets: [{
                    data: [ this.course[0].enrolled_student, this.course[1].enrolled_student],
                    backgroundColor: [ 'rgb(255, 87, 51)','rgba(255, 138, 101)']  
                }],
                labels: [this.course[0].Course.id, this.course[1].Course.id]
              }
          })
        }
        else{
            var ctx = document.getElementById("myChart");
            var myChart = new Chart(ctx, {
              type: 'bar',
              data:{
                datasets: [{
                    data: [ this.course[0].enrolled_student, this.course[1].enrolled_student, this.course[2].enrolled_student, this.course[3].enrolled_student],
                    backgroundColor: [ 'rgb(255, 87, 51)','rgba(255, 138, 101)','rgba(192, 202, 51 )','rgba(255, 193, 7)']  
                }],
                labels: [this.course[0].Course.id, this.course[1].Course.id, this.course[2].Course.id, this.course[3].Course.id]
              }
          })
        }
      })  


      this.students$ = this.apiStudent.getPlayedStudent(this.semester[0]);
    })
    this.apiVocab.getVocabTop()
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
