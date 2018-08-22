import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyNavComponent } from './my-nav/my-nav.component';
import { MyTableComponent } from './my-table/my-table.component';
import { StudentComponent } from './student/student.component';
import { VocabComponent } from './vocab/vocab.component';
import { HomeComponent } from './home/home.component';
import { CoureInsectionComponent } from './coure-insection/coure-insection.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', redirectTo: 'home',pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'vocabs', component: VocabComponent},
  { path: 'course', component: CoureInsectionComponent},
  { path: 'students/:semester/:year/:courseID/:section/:subsection', component: StudentComponent},
  { path: 'login', component: LoginComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
