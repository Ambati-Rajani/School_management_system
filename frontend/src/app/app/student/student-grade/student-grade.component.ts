import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { TeacherService } from '../../services/teacher.service';
import { AuthService } from '../../../auth/services/auth.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-student-grade',
  imports: [NgIf,NgFor],
  templateUrl: './student-grade.component.html',
  styleUrl: './student-grade.component.css'
})
export class StudentGradeComponent implements OnInit {
  studentId:string | null = null
  constructor(
    private studentService:StudentService,
    private teacherService:TeacherService,
    private authService:AuthService
  ) {}

  grades:any = {}

  ngOnInit(): void {
      this.studentId = this.authService.currentUser.userId
      this.loadGradesByStudentId()
  }

  async loadGradesByStudentId(){
    try{
      if(this.studentId){
        const res:any = await this.studentService.getGradesByStudentId(this.studentId)
        this.grades = res.data
      }
    }catch(e){
      console.log(e);
    }
  }

}
