import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-coure-insection',
  templateUrl: './coure-insection.component.html',
  styleUrls: ['./coure-insection.component.css']
})
export class CoureInsectionComponent implements OnInit {

  datas: any;
  semesters: any;
  semester: any[] = [];
  semestertemp: any;

  constructor(private api: StudentService) { }

  ngOnInit() {
    this.api.getSemster()
    .subscribe(data => {this.semesters = data } )
    
  }
  getData(event){
    this.semestertemp = event.value;
    this.semester.push({
      semester: event.value
    })
    var json = Object.assign({},...this.semester);
    console.log(json)
    this.api.getCourse(json)
    .subscribe(data=> {this.datas = data})
  }
}
