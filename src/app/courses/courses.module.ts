import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import { HomeComponent } from './home/home.component';
import { LessonComponent } from './lesson/lesson.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import {CoursesService} from './serivices/courses.service';
import {CoursesRoutingModule} from './courses.routing.module';





@NgModule({
  declarations: [CourseComponent, CourseDialogComponent, CoursesCardListComponent, HomeComponent, LessonComponent, LessonsListComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ],
  providers:[CoursesService]
})
export class CoursesModule { }
