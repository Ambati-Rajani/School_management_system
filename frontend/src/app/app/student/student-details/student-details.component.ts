import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { AuthService } from '../../../auth/services/auth.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-details',
  imports: [NgIf,FormsModule],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit {

  studentId: string | null = null;
  isEditing:boolean = false
  student: any = {

  }
  constructor(
    private studentService:StudentService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
      this.studentId = this.authService.currentUser.userId
      this.loadStudentDetails()
  }

  async loadStudentDetails(){
    try{
      if(this.studentId){
        const res:any = await this.studentService.getStudentDetailsById(this.studentId)
        this.student = {
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
