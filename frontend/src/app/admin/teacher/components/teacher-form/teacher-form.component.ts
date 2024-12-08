import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TeacherService } from '../../services/teacher.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacher-form',
  imports: [FormsModule],
  templateUrl: './teacher-form.component.html',
  styleUrl: './teacher-form.component.css'
})
export class TeacherFormComponent {
  teacherId:string|null= null;
  constructor(
    private teacherService: TeacherService,
    private toastrService:ToastrService,
    private route: ActivatedRoute
  ) {}

  

  isEdit : boolean = false;

  teacher:any = {
    name: '',
    dateOfBirth: '',
    email: '',
    department: '',
    enrollmentNumber: '',
    phone: '',
    s_class: ''
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
    this.teacherId = this.route.snapshot.paramMap.get('teacherId')
    this.isEdit = this.teacherId ? true : false
    this.loadTeacherById()
  }

  async loadTeacherById(){
    try{
     if(this.teacherId){
      const res:any = await this.teacherService.getTeacherById(this.teacherId)
      this.teacher = res.data;
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
    
    this.teacher.enrollmentNumber = uniqueId;
  }
  
  createRandomId(){
    const randomId = Math.floor(100000 + Math.random() * 900000).toString(); // Generates a number between 100000 and 999999
    return randomId;
  }

  async onSubmit(){
    try{
      if(this.teacherId){
        const res:any = await this.teacherService.updateTeacher(this.teacherId,this.teacher)
        if(res.data){
          this.toastrService.success("Teacher updated successfully")
        }
        return;
      }
      const res:any = await this.teacherService.addTeacher(this.teacher)
      if(res.data){
        this.toastrService.success("Teacher added successfully")
      }
    }catch(e){
      console.log(e);
    }
  }
}
