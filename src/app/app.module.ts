import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { MaterialModule} from './/material.module';

//firebase
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
//enviroment
import { environment } from '../environments/environment';
//service
import { StudentService } from './services/student.service';
import { VocabService } from './services/vocab.service';
//component
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MyNavComponent } from './my-nav/my-nav.component';
import { MyTableComponent } from './my-table/my-table.component';
import { StudentComponent } from './student/student.component';
import { VocabComponent } from './vocab/vocab.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component'
import { CoureInsectionComponent } from './coure-insection/coure-insection.component';
import { LoginComponent } from './login/login.component';
import { VocabByCourseComponent } from './vocab-by-course/vocab-by-course.component';
import { VocabAllComponent } from './vocab-all/vocab-all.component';



firebase.initializeApp(environment.firebaseConfig);
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,
    ],
  declarations: [
    MyNavComponent,
    MyTableComponent,
    StudentComponent,
    VocabComponent,
    HomeComponent,
    FooterComponent,
    CoureInsectionComponent,
    LoginComponent,
    VocabByCourseComponent,
    VocabAllComponent,
    AppComponent,
  ],
  providers: [ StudentService, VocabService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
