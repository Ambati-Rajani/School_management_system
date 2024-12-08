import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentNavComponent } from "./components/student-nav/student-nav.component";

@Component({
  selector: 'app-student',
  imports: [RouterOutlet, StudentNavComponent],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

}
