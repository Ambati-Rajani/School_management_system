import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TeacherNavComponent } from "./components/teacher-nav/teacher-nav.component";

@Component({
  selector: 'app-teacher',
  imports: [RouterOutlet, TeacherNavComponent],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent {

}
