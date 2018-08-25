import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import * as XLSX from 'xlsx';
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
  selector: 'app-vocab-all',
  templateUrl: './vocab-all.component.html',
  styleUrls: ['./vocab-all.component.css']
})
export class VocabAllComponent implements OnInit {
    
  dataSource: MatTableDataSource<Vocab>
  datas: any;
  displayedColumns: string[] = ['vocabID','hiragana', 'romanji', 'thai', 'QuestionStatistic','mistakeStatistic'];
  
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild('TABLE') table: ElementRef;
  
    constructor(private api: VocabService){}
  
    ngOnInit() {
      this.api.getVocabByType()
      .subscribe(data => {this.datas = data
      this.dataSource = new MatTableDataSource(this.datas);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
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
  
  