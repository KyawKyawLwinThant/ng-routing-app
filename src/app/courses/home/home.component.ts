import { Component, OnInit } from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {Course} from '../model/course';
import {CoursesService} from '../serivices/courses.service';
import {map, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private coursesService:CoursesService) { }

  beginnerCourses:Course[]=[];
  advancedCourses:Course[]=[];

  ngOnInit(): void {
    this.reloadCourses();
  }
  reloadCourses(){
    const course$=this.coursesService.loadAllCourses();
    this.filterByCategory(course$,'BEGINNER')
      .subscribe(
        data => this.beginnerCourses=data,
         error=>console.log(error.message)
      );
    this.filterByCategory(course$,'ADVANCED')
      .subscribe(
        data => this.advancedCourses=data
      )
  }

  filterByCategory(courses$:Observable<Course[]>,category:string):Observable<Course[]>{
    return courses$
      .pipe(
        map(courses => courses.filter(course => course.category == category))
      );
  }

}
