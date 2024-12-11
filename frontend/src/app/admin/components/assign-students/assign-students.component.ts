import { Component, Input } from '@angular/core';
import { ScheduleService } from '../../services/schedule.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../students/services/student.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-assign-students',
  imports: [FormsModule,NgFor],
  templateUrl: './assign-students.component.html',
  styleUrl: './assign-students.component.css'
})
export class AssignStudentsComponent {
  @Input() classId:string = ''
  @Input() studentId:string = ''
  classes:any[] = []
  students:any[] = [];
  constructor(
    private scheduleService:ScheduleService,
    private toastrService: ToastrService,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
      this.loadAllClasses()
      this.loadAllStudents()
  }

  async assignStudent(){
    try{
      const payload = {
        classId: this.classId,
        studentId: this.studentId
      }
      await this.scheduleService.assignStudentToClass(payload)
      this.toastrService.success("assigned successfully")
    }catch(e){
      console.log(e);
    }
  }

  async loadAllClasses(){
    try{
      const res:any = await this.scheduleService.getAllClasses()
      this.classes = res.data
    }catch(e){
      console.log(e);
    }
  }

  async loadAllStudents(){
    try{
      const res:any = await this.studentService.getAllStudents()
      this.students = res.data.filter((data:any) => data.s_class === null)
    }catch(e){
      console.log(e);
    }
  }
}
