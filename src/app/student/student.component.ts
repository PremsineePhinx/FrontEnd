import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatPaginator,MatTableDataSource } from '@angular/material';
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
  columnsToDisplay = ['studentID', 'studentName'];
  expandedElement: User;
  dataSource: MatTableDataSource<User>;
  datas: any;

  @ViewChild('TABLE') table: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private route: ActivatedRoute,private api: StudentService) { 
    this.route.params.subscribe(params => this.param = params)
  }

  ngOnInit() {

    this.dataOfapi.push({
      semester: this.param.semester+"/"+this.param.year,
      courseID: this.param.courseID,
      sectionID: this.param.section +"/"+this.param.subsection
    })

    var json = Object.assign({},...this.dataOfapi);

    this.api.getStudent(json)
    .subscribe(data=> {this.datas = data
      this.dataSource = new MatTableDataSource(this.datas);    console.log(this.dataSource)
      this.dataSource.paginator = this.paginator;
    })


  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ExportTOExcel()
  {
    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    
    /* save to file */
    XLSX.writeFile(wb, 'สถิติคำศัพท์.xlsx');
    
  }
}



