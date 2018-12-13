import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatPaginator,MatTableDataSource, MatSort } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import * as XLSX from 'xlsx';
import { StudentService } from '../services/student.service';

export interface User {
 
  studentID: string,
  studentName: string,
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class StudentComponent implements OnInit {

  param: any;
  dataOfapi: any[] = [];
  columnsToDisplay = ['studentID', 'studentName','login','last_login'];
  expandedElement: User;
  dataSource: MatTableDataSource<User>;
  datas: any;
  json: any;
  students: any[] = [];
  temp: any;
  @ViewChild('TABLE') table: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: ActivatedRoute,private api: StudentService) { 
    this.route.params.subscribe(params => this.param = params)
  }

  ngOnInit() {

    //สร้าง json เพื่อนำไปขอข้อมูล
    this.dataOfapi.push({
      semester: this.param.semester+"/"+this.param.year,
      courseID: this.param.courseID,
      sectionID: this.param.section +"/"+this.param.subsection
    })

    this.json = Object.assign({},...this.dataOfapi);

    this.api.getStudent(this.json)
    .subscribe(data=> {this.datas = data
      for(let i = 0 ; i < this.datas.length; i++){
        var time
        if(this.datas[i].last_login == null){
          time = "-"
        }else{
          this.temp = this.datas[i].last_login
          time = new Date(this.temp);
          time = time.toDateString();
        }
            this.students.push({
              studentID:this.datas[i].studentID,
              studentName: this.datas[i].studentName,              
              login: this.datas[i].login,
              last_login: time,
              stage1:this.datas[i].Stage1,
              stage2:this.datas[i].Stage2,
              stage3:this.datas[i].Stage3,
              stage4:this.datas[i].Stage4,
              stage5:this.datas[i].Stage5,
              stage6:this.datas[i].Stage6,
              stage7:this.datas[i].Stage7,
              stage8:this.datas[i].Stage8
          })
      }
      console.log(this.students)
      this.dataSource = new MatTableDataSource(this.students);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource)
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ExportTOExcel()
  {
    this.api.getStudent(this.json)
    .subscribe(data=> {this.datas = data
    const ws: XLSX.WorkSheet=XLSX.utils.json_to_sheet(this.datas);
   
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    
    /* save to file */
    var nameFile =  "ข้อมูลนักศึกษา_" + this.param.courseID + "_" + this.param.section + "_" + this.param.semester + this.param.year +".xlsx"
    XLSX.writeFile(wb, nameFile );
    })
  }
}



