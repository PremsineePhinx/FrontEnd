import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiURL = 'http://159.65.142.130/api/'

  constructor(private http:HttpClient) { }

  getSemster(){
    return this.http.get(this.apiURL + 'getSemester/');
  }
  getCourse(semester){
    return this.http.post(this.apiURL + 'getCourseInSemester/',semester);
  }
  getStudent(section){
    return this.http.post(this.apiURL + 'getStudentInSection/',section);
  }
  getEnrollStudent(semester){
    return this.http.post(this.apiURL + 'getEnrollStudent/',semester);
  }
  getPlayedStudent(semester):Observable<any>{
    return this.http.post(this.apiURL + 'getPlayedStudent/',semester);
  }
}
