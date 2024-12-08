import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';
import { AuthService } from '../../../auth/services/auth.service';
import { ActivatedRoute, Route } from '@angular/router';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mark-attendance',
  imports: [NgFor,FormsModule],
  templateUrl: './mark-attendance.component.html',
  styleUrl: './mark-attendance.component.css'
})
export class MarkAttendanceComponent implements OnInit {
  teacherId: string | null = null
  classId: string | null = null
  classDetails: any = {}
  students:any[] =[]
  selectedDate: string = new Date().toISOString().split('T')[0];
  attendanceList: any[] = [];
  isSubmitted:boolean = false
  constructor(
    private teacherService:TeacherService,
    private authService: AuthService,
    private route:ActivatedRoute,
    private toastr:ToastrService
  ) {}

  ngOnInit(): void {
      this.teacherId = this.authService.currentUser.userId;
      this.classId = this.route.snapshot.paramMap.get('classId')
      this.loadClassByClassId()
      this.loadAttendanceByClassId()
  }

  markAllPresent() {
    this.students.forEach((student) => {
      student.isPresent = true;
    });
  }


  async loadClassByClassId() {
    try {
      if (this.classId) {
        const res: any = await this.teacherService.getClassByClassId(this.classId);
        this.classDetails = res.data;
        this.students = res.data.students.map((student: any) => ({
          ...student,
          isPresent: false, // Default value until we map attendance
          attendanceId: null // Default no attendance record
        }));
      }
    } catch (e) {
      console.error(e);
    }
  }

  async loadAttendanceByClassId() {
    try {
      if (this.classId) {
        const res: any = await this.teacherService.getAttendanceByClassId(this.classId);
        this.attendanceList = res.data;

        // Map attendance data to students
        this.students = this.students.map((student) => {
          const attendanceRecord = this.attendanceList.find(
            (attendance) => attendance.student.studentId === student.studentId
          );
          if (attendanceRecord) {
            return {
              ...student,
              isPresent: attendanceRecord.status === 'Present',
              attendanceId: attendanceRecord.attendanceId
            };
          }
          return student;
        });
      }

      // Freeze submission if attendance already exists for the selected date
      this.isSubmitted = this.attendanceList.some(
        (attendance) =>
          new Date(attendance.date).toISOString().split('T')[0] === this.selectedDate
      );
    } catch (e) {
      console.error(e);
    }
  }

  async submitAttendance() {
    try {
      const attendancePayload = this.students.map((student) => ({
        studentId: student.enrollmentNumber,
        classId: this.classId,
        date: this.selectedDate,
        status: student.isPresent ? 'Present' : 'Absent',
        comments: '', // Optional comments field
        attendanceId: student.attendanceId 
      }));

      await this.teacherService.markClassAttendance(attendancePayload);
      this.isSubmitted = true;
      this.toastr.success('Attendance submitted successfully!');
    } catch (e) {
      console.error(e);
      alert('Failed to submit attendance.');
    }
  }
}
