import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import * as XLSX from 'xlsx';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { VocabService } from '../services/vocab.service';

export interface Vocab {
  vocabID:string,
  hiragana:string,
  romanji:string,
  thai:string,
  QuestionStatistic:string,
  mistakeStatistic:string
}

@Component({
  selector: 'app-vocab-by-course',
  templateUrl: './vocab-by-course.component.html',
  styleUrls: ['./vocab-by-course.component.css']
})
export class VocabByCourseComponent implements OnInit {

  dataSource: MatTableDataSource<Vocab>
  datas: any;
  param: any;
  datasExport: any;
  displayedColumns: string[] = ['vocabID','hiragana', 'romanji', 'thai', 'QuestionStatistic','mistakeStatistic'];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('TABLE') table: ElementRef;

  constructor(private api: VocabService,private route: ActivatedRoute){
    this.route.params.subscribe(params => {this.param = params})
  }

  ngOnInit() {
    //get data from API
    this.api.getVocabByCourse(this.param.course)
    .subscribe(data => {this.datas = data
    this.dataSource = new MatTableDataSource(this.datas);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    })
  }
  //filter table
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ExportTOExcel()
  {
    this.api.getVocabByCourse(this.param.course)
    .subscribe(data => {this.datasExport = data
    const ws: XLSX.WorkSheet=XLSX.utils.json_to_sheet(this.datasExport);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    
    /* save to file */
    var nameFile = "สถิติคำศัพท์_" + this.param.course + ".xlsx"
    XLSX.writeFile(wb, nameFile);
    })
  }

}

