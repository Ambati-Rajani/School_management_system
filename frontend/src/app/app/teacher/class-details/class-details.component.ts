import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-class-details',
  imports: [NgFor],
  templateUrl: './class-details.component.html',
  styleUrl: './class-details.component.css'
})
export class ClassDetailsComponent implements OnInit {
  classId:string | null = null;
  constructor(
    private teacherService:TeacherService,
    private route:ActivatedRoute,
    private router:Router
  ) {}

  classDetails:any = {}
  classStudents:any[] = []

  ngOnInit(): void {
      this.classId = this.route.snapshot.paramMap.get('classId')
      this.loadClassDetails()
  }

  async loadClassDetails(){
    try{
      if(this.classId){
        const res:any = await this.teacherService.getClassByClassId(this.classId)
        this.classDetails = res.data;
        this.classStudents = res.data.students;
      }
    }catch(e){
      console.log(e);
    }
  }

  navigateToGradePage(studentId: string) {
    this.router.navigate([`/teacher/student/${studentId}/grade`]);
  }



}
