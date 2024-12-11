import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from '../../services/teacher.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-teacher-list',
  imports: [FormsModule,NgFor,NgIf],
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.css'
})
export class TeacherListComponent implements OnInit {
  teacher:any[] = [];

  isAttendanceModalOpen = false;
  studentAttendance = [
    { date: '2024-12-01', status: 'Present' },
    { date: '2024-12-02', status: 'Absent' },
  ];

  constructor(
    private route:Router,
    private teacherService : TeacherService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
      this.loadAllTeacher()
  }

  async loadAllTeacher(){
    try{
      const res:any = await this.teacherService.getAllTeachers();
      this.teacher = res.data.map((student:any) => ({
        ...student,
        id: student.enrollmentNumber
      }));
    }catch(e){
      console.log(e);
    }
  }



  openStudentForm() {
    this.route.navigate(['/admin/teachers/teacher-form'])
  }

  editStudent(id: string) {
    this.route.navigate([`/admin/teachers/teacher-form/${id}`])
  }

  async deleteStudent(id: string) {
    try{
      await this.teacherService.deleteTeacherById(id)
      this.toastr.success("Student deleted successfully")
      this.loadAllTeacher()
    }catch(e){
      console.log(e);
    }
  }

  viewAttendance(id: string) {
    this.isAttendanceModalOpen = true;
    // Load attendance data for the student
  }

  closeAttendanceModal() {
    this.isAttendanceModalOpen = false;
  }

  downloadAttendance() {
    // Logic to download attendance record
  }
}
