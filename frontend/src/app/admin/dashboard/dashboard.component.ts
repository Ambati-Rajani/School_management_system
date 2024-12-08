import { Component, OnInit } from '@angular/core';
import { StudentService } from '../students/services/student.service';
import { TeacherService } from '../teacher/services/teacher.service';
import { ScheduleService } from '../services/schedule.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  data:any = {
    students: 0,
    teachers: 0,
    classses: 0,
    rooms: 0,
  }

  ngOnInit(): void {
      this.loadAllStudents()
  }

  constructor(
    private studentService:StudentService,
    private teacherService:TeacherService,
    private scheduleService:ScheduleService,
  ) {}

  async loadAllStudents(){
    try{
      const studentsRes:any = await this.studentService.getAllStudents()
      const teachersRes:any = await this.teacherService.getAllTeachers()
      const classesRes:any = await this.scheduleService.getAllClasses()
      const roomsRes:any = await this.scheduleService.getAllRooms();
      this.data.students = studentsRes.data.length
      this.data.teachers = teachersRes.data.length
      this.data.classes = classesRes.data.length
      this.data.rooms = roomsRes.data.length
    }catch(e){
      console.log(e);
    }
  }
  
}
