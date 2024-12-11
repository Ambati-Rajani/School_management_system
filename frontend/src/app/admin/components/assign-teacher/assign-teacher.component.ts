import { Component, Input, OnInit } from '@angular/core';
import { ScheduleService } from '../../services/schedule.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { TeacherService } from '../../teacher/services/teacher.service';

@Component({
  selector: 'app-assign-teacher',
  imports: [FormsModule,NgFor],
  templateUrl: './assign-teacher.component.html',
  styleUrl: './assign-teacher.component.css'
})
export class AssignTeacherComponent implements OnInit {
  @Input() classId:string = ''
  @Input() teacherId:string = ''
  classes:any[] = []
  teachers:any[] = [];
  constructor(
    private scheduleService:ScheduleService,
    private toastrService: ToastrService,
    private teacherService: TeacherService
  ) {}

  ngOnInit(): void {
      this.loadAllClasses()
      this.loadAllTeachers()
  }

  async assignTeacher(){
    try{
      const payload = {
        classId: this.classId,
        teacherId: this.teacherId
      }
      await this.scheduleService.assignTeacherToClass(payload)
      this.toastrService.success("Teacher assigned successfully")
    }catch(e){
      console.log(e);
    }
  }

  async loadAllClasses(){
    try{
      const res:any = await this.scheduleService.getAllClasses()
      this.classes = res.data;
    }catch(e){
      console.log(e);
    }
  }

  async loadAllTeachers(){
    try{
      const res:any = await this.teacherService.getAllTeachers()
      this.teachers = res.data;
    }catch(e){
      console.log(e);
    }
  }
}
