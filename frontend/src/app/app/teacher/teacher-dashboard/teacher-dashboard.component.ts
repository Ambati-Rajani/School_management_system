import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { TeacherService } from '../../services/teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-dashboard',
  imports: [NgFor,NgIf],
  templateUrl: './teacher-dashboard.component.html',
  styleUrl: './teacher-dashboard.component.css'
})
export class TeacherDashboardComponent implements OnInit {
  teacherId: string = ''
  classes:any[] = []

  ngOnInit(): void {
      this.teacherId = this.authService.currentUser.userId
      this.loadAllClasessByTeacherEnrollment()
  }

  constructor(
    private authService: AuthService,
    private teacherService:TeacherService,
    private router:Router
  ) {}

  async loadAllClasessByTeacherEnrollment(){
    try{
        if(this.teacherId){
          const res :any = await this.teacherService.getAllClassesByTeacher(this.teacherId)
          this.classes = res.data.map((d:any) => ({
            ...d,
            studentCount: d.students.length,
          }));
        }
    }catch(e){
      console.log(e);
    }
  }
  async markAttendance(id:string){
    this.router.navigate([`/teacher/mark-attendance/${id}`])
  }

}
