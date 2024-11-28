import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit {
  @Input({
    required: true
  })
 course: Course;

  @Input({required: true})
  index: number;

  @Output('courseSelected')
  courseSelected = new EventEmitter<Course>();

  onCourseViewed() {
    console.log('CLICKED');
    this.courseSelected.emit(this.course);
  }

  constructor() {
  }
  ngOnInit(): void {
  }

}
