import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VocabService {

  private apiURL = 'https://jap-api-uat.herokuapp.com/api/'

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
