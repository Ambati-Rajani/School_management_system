import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';
import { AuthService } from '../../../auth/services/auth.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-teacher-details',
  imports: [FormsModule,NgIf],
  templateUrl: './teacher-details.component.html',
  styleUrl: './teacher-details.component.css'
})
export class TeacherDetailsComponent implements OnInit {
  teacherId: string | null = null;
  isEditing:boolean = false
  teacher: any = {

  }
  constructor(
    private teacherService:TeacherService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
      this.teacherId = this.authService.currentUser.userId
      this.loadTeacherDetails()
  }

  async loadTeacherDetails(){
    try{
      if(this.teacherId){
        const res:any = await this.teacherService.getTeacherDetails(this.teacherId)
        this.teacher = {
          ...res.data,
          grade: res.data.grade ? res.data.grade : '-',
          class:res.data.s_class
        }
      }
    }catch(e){
      console.log(e);
    }
  }

  saveChanges(){
    try{

    }catch(e){

    }
  }

  toggleEdit(){
    this.isEditing = !this.isEditing
  }
}
