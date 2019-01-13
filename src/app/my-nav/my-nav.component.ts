import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSidenav } from '@angular/material'
@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver ) {}

  @ViewChild('sidenav') sidenav: MatSidenav;
  
  subMenu: boolean = false;

  showSubmenu(){
    if(this.subMenu==false){
      this.subMenu = true;
    }else{
      this.subMenu = false;
    }
  }

  getTitle(title ){
    title = title
  }
  
  logout(){

  }
}
