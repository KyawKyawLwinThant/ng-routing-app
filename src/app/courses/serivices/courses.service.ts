import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Course} from '../model/course';
import {environment} from '../../../environments/environment';
import {shareReplay} from 'rxjs/operators';

@Injectable()
export class CoursesService{
    constructor(private http:HttpClient) {
    }


    loadAllCourses():Observable<Course[]>{
      return this.http.get<Course[]>(environment.restUrl+'/api/courses')
        .pipe(
          shareReplay()
        );
    }
}



