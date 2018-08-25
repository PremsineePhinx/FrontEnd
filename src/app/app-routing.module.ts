import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,ExtraOptions} from '@angular/router';
import { StudentComponent } from './student/student.component';
import { VocabComponent } from './vocab/vocab.component';
import { VocabByCourseComponent } from './vocab-by-course/vocab-by-course.component';
import { HomeComponent } from './home/home.component';
import { CoureInsectionComponent } from './coure-insection/coure-insection.component';
import { LoginComponent } from './login/login.component';
import { VocabAllComponent } from './vocab-all/vocab-all.component';

const routes: Routes = [
  {path:'', redirectTo: 'home',pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'Subject', component: VocabComponent},
  { path: 'VocabStat', component: VocabAllComponent},
  { path: 'VocabStatByCourse/:course', component: VocabByCourseComponent},
  { path: 'course', component: CoureInsectionComponent},
  { path: 'students/:semester/:year/:courseID/:section/:subsection', component: StudentComponent},
  { path: 'login', component: LoginComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
