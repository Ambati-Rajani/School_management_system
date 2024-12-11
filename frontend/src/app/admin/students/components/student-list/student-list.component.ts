import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-list',
  imports: [NgFor,CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit{

  students:any[] = [];

  isAttendanceModalOpen = false;
  studentAttendance = [
    { date: '2024-12-01', status: 'Present' },
    { date: '2024-12-02', status: 'Absent' },
  ];

  constructor(
    private router:Router,
    private studentService : StudentService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
      this.loadAllStudents()
  }

  async loadAllStudents(){
    try{
      const res:any = await this.studentService.getAllStudents();
      this.students = res.data.map((student:any) => ({
        ...student,
        id: student.enrollmentNumber
      }));
    }catch(e){
      console.log(e);
    }
  }


  navigateToGrade(id:string){
    this.router.navigate([`/admin/students/${id}/grade`])
  }

  openStudentForm() {
    this.router.navigate(['/admin/students/student-form'])
  }

  editStudent(id: string) {
    this.router.navigate([`/admin/students/student-form/${id}`])
  }

  async deleteStudent(id: string) {
    try{
      await this.studentService.deleteStudentById(id)
      this.toastr.success("Student deleted successfully")
      this.loadAllStudents()
    }catch(e){
      console.log(e);
    }
  }

  async viewAttendance(id: string) {
    try{
      this.isAttendanceModalOpen = true;
      const res:any = await this.studentService.getAttendanceByStudentId(id)
      this.studentAttendance = res.data;
    }catch(e){
      console.log(e);
    }
  }

  closeAttendanceModal() {
    this.isAttendanceModalOpen = false;
  }

  downloadAttendance() {
    // Logic to download attendance record
  }

}
