import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VocabService {

  private apiURL = 'http://159.65.142.130/api/'

  constructor(private http:HttpClient) { }

  getVocabByType(){
    return this.http.get(this.apiURL + 'getVocabStatbyType/');
  }
  getVocabByCourse(course){
    return this.http.get(this.apiURL + 'getVocabStatbyCourse/' + course);
  }
  getVocabTop(){
    return this.http.get(this.apiURL + 'getTopVocabStat/6');
  }
}
