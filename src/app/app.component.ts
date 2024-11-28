import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = [...COURSES];

  performPrefetch = false;
  display = false;


  onCourseSelected(course: Course) {
    console.log('onCardClicked click evet bubbled', course);
  }


  onPrefetch() {
    console.log(this.performPrefetch);
    this.performPrefetch = true;

  }

  onDisplay() {
    this.display = true;
  }
}
