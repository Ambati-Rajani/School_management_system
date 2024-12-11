import { Component } from '@angular/core';
import { TeacherService } from '../../teacher/services/teacher.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-assign-subject',
  imports: [FormsModule,NgFor],
  templateUrl: './assign-subject.component.html',
  styleUrl: './assign-subject.component.css'
})
export class AssignSubjectComponent {
  teacherId: string = '';
  subjectId: string = '';

  subjects: any[] = [];

  constructor(
    private teacherService:TeacherService,
    private toastr:ToastrService
  ) {}


  async assingSubject(){
    try{
      const payload = {
        teacherId: this.teacherId,
        subjectId: this.subjectId
      }
      await this.teacherService.assignSubjectsToTeacher(payload)
      this.toastr.success("Successfully assigned")
    }catch(e){
      console.log(e);
    }
  }

}
