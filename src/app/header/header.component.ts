import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  num: any;
  title: any;
  temp: any;
  temp1: any;
  temp2: any
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.num = this.route.snapshot.url.length;
    if(this.num == 1){
      this.title = this.route.snapshot.url;
    }else if(this.num == 2){
      this.temp = this.route.snapshot.url;
      this.title = this.temp.join(" ");
    }else{
      // this.temp = this.route.snapshot.url;
      // this.temp1 = this.temp.join("/");
      this.title = "Semester " + this.route.snapshot.url[1] + "/" + this.route.snapshot.url[2] + " Course " + this.route.snapshot.url[3] + " Section " + this.route.snapshot.url[4]
    }
  }
  
  
}
