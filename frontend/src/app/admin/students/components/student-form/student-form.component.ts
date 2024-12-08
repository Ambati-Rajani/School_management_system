import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-form',
  imports: [CommonModule,FormsModule],
templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent implements OnInit{
  studentId:string|null= null;
  constructor(
    private studentService: StudentService,
    private toastrService:ToastrService,
    private route: ActivatedRoute
  ) {}

  

  isEdit : boolean = false;
  student:any = {
    name: '',
    dateOfBirth: '',
    address: '',
    enrollmentNumber: '',
    phone: '',
  }

  classes: any[] = [
    { name: 'Nursery' },
    { name: 'LKG' },
    { name: 'UKG' },
    { name: 'Class 1' },
    { name: 'Class 2' },
    { name: 'Class 3' },
    { name: 'Class 4' },
    { name: 'Class 5' },
    { name: 'Class 6' },
    { name: 'Class 7' },
    { name: 'Class 8' },
    { name: 'Class 9' },
    { name: 'Class 10' }
  ];
  
  generatedEmpIds:string[] = []

  ngOnInit(): void {
    this.studentId = this.route.snapshot.paramMap.get('studentId')
    this.isEdit = this.studentId ? true : false
    this.loadStudentById()
  }

  async loadStudentById(){
    try{
     if(this.studentId){
      const res:any = await this.studentService.getStudentById(this.studentId)
      this.student = res.data;
     }
    }catch(e){
      console.log(e);
    }
  }

  generateEnrollmentNumber(){
    let uniqueId:string;

    do{
      uniqueId = this.createRandomId()
    }while(this.generatedEmpIds.includes(uniqueId))
    
    this.student.enrollmentNumber = uniqueId;
  }
  
  createRandomId(){
    const randomId = Math.floor(100000 + Math.random() * 900000).toString(); // Generates a number between 100000 and 999999
    return randomId;
  }

  async onSubmit(){
    try{
      if(this.studentId){
        const res:any = await this.studentService.updateStudent(this.studentId,this.student)
        if(res.data){
          this.toastrService.success("Student updated successfully")
        }
        return;
      }
      const res:any = await this.studentService.addStudent(this.student)
      if(res.data){
        this.toastrService.success("Student added successfully")
      }
    }catch(e){
      console.log(e);
    }
  }
}
