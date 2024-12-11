import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { AuthService } from '../../../auth/services/auth.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-attendance',
  imports: [NgClass,NgFor,NgIf],
  templateUrl: './student-attendance.component.html',
  styleUrl: './student-attendance.component.css'
})
export class StudentAttendanceComponent implements OnInit {
  studentId:string | null = null;

  constructor(
    private authService:AuthService,
    private studentService:StudentService,
    private router:Router
  ) {}

  attendanceList: any[] = [];
  attendanceData: any;
  ngOnInit(): void {
      this.studentId = this.authService.currentUser.userId;
      this.loadAllAttendanceByStudentId()
  }

  async loadAllAttendanceByStudentId(){
    try{
      if(this.studentId){
        const res:any = await this.studentService.getAttendanceByStudentId(this.studentId);
        this.attendanceList = res.data;
        console.log(res.data);
        if (res.data.length > 0) {
          this.attendanceData = res.data[0];
        }
      }
    }catch(e){
      console.log(e);
    }
  }

  goBack() {
    this.router.navigate(['/student/me']);
  }
}
