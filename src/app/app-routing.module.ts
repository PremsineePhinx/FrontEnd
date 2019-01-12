import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,ExtraOptions} from '@angular/router';
import { StudentComponent } from './student/student.component';
import { VocabComponent } from './vocab/vocab.component';
import { VocabByCourseComponent } from './vocab-by-course/vocab-by-course.component';
import { HomeComponent } from './home/home.component';
import { CoureInsectionComponent } from './coure-insection/coure-insection.component';
import { LoginComponent } from './login/login.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AuthGuard } from './auth.guard.service';

const routes: Routes = [
  {path:'', redirectTo: 'home',pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'VocabStats', component: VocabComponent},
  { path: 'VocabStatByCourse/:course', component: VocabByCourseComponent},
  { path: 'Course', component: CoureInsectionComponent},
  { path: 'students/:semester/:year/:courseID/:section/:subsection', component: StudentComponent},
  { path: 'login', component: LoginComponent },

  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    OAuthModule.forRoot({
      resourceServer: {
          allowedUrls: ['localhost:4200'],
          sendAccessToken: true
      }
  })
  ],
  exports:[RouterModule],
  declarations: [],
  providers: [ AuthGuard ]
})
export class AppRoutingModule { }
