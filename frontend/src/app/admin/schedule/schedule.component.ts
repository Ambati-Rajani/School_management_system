import { Component } from '@angular/core';
import { AssignTeacherComponent } from "../components/assign-teacher/assign-teacher.component";
import { AssignStudentsComponent } from "../components/assign-students/assign-students.component";

@Component({
  selector: 'app-schedule',
  imports: [AssignTeacherComponent, AssignStudentsComponent],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent {

}
