import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GradesService } from '../../../../services/grades.service';
import { FormsModule } from '@angular/forms';
import { TeacherService } from '../../../teacher/services/teacher.service';
import { NgFor } from '@angular/common';
import { StudentService } from '../../../students/services/student.service';
import { AuthService } from '../../../../auth/services/auth.service';
import { CourseService } from '../../../../services/course.service';

@Component({
  selector: 'app-grades',
  imports: [FormsModule,NgFor],
  templateUrl: './grades.component.html',
  styleUrl: './grades.component.css'
})
export class GradesComponent implements OnInit {

  studentId: string | null = null;

  
  teacherId: string | null = null;
  teachers:any[] = []
  students:any[] = []
  grades:any[] = []
  courses:any[] = []
  constructor(
    private route:ActivatedRoute,
    private gradeService:GradesService,
    private toastr:ToastrService,
    private teacherService:TeacherService,
    private studentService:StudentService,
    private authservice:AuthService,
    private courseSerivce:CourseService
  ) {}

  ngOnInit(): void {
      this.studentId = this.route.snapshot.paramMap.get('studentId');
      // this.loadTeachers()
      this.teacherId = this.authservice.currentUser.userId;
      this.loadTeacher()
      this.loadStudentDetails()
      this.loadAllCourses()
      this.loadGradesByTeacherId()
  }

  gradePayload:any = {
    studentId: '',
    courseId: '',
    teacherId: '',
    gradeValue: ''
  }

  async addGrade(){
    try{
      await this.gradeService.addGrade(this.gradePayload)
      this.toastr.success("Grade added successfully")
    }catch(e){
      console.log(e);
    }
  }

  async loadTeacher(){
    try{
      if(this.teacherId){
        const res:any = await this.teacherService.getTeacherById(this.teacherId)
        this.teachers = [{...res.data}]
        this.gradePayload.teacherId = res.data.name
      }
    }catch(e){
      console.log(e);
    }
  }

  async loadStudentDetails(){
    try{
      if(this.studentId){
        const res:any = await this.studentService.getStudentById(this.studentId)
        this.students = res.data;
        this.gradePayload.studentId = res.data.enrollmentNumber;
      }
    }catch(e){
      console.log(e);
    }
  }

  async loadAllCourses(){
    try{
        const res:any = await this.courseSerivce.getAllCourses()
        this.courses = res.data;
    }catch(e){
      console.log(e);
    }
  }

  async loadGradesByTeacherId(){
    try{
        if(this.studentId){
          const res:any = await this.gradeService.getGradeByStudentId(this.studentId)
          this.grades = res.data;
        }
    }catch(e){
      console.log(e);
    }
  }

}
