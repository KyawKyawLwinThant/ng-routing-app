import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},
  {path:'courses',loadChildren:()=>import('./courses/courses.module')
      .then(m => m.CoursesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
