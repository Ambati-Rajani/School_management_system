import { Component } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-course-form',
  imports: [FormsModule,NgFor],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.css'
})
export class CourseFormComponent {
  courses: any[] = [];
  newCourse = { 
    courseName: '',
    description: '', 
    prerequisites: [] as string[], 
    schedule: { day: '', time: '' } 
  };

  prerequisitesInput: string = '';

  constructor(
    private courseService: CourseService,
    private toastr:ToastrService
  ) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  async loadCourses() {
    try{
      const res:any = await this.courseService.getAllCourses()
      this.courses = res.data;
    }catch(e){
      console.log(e);
    }
  }

  async createCourse() {
    try{
      this.newCourse.prerequisites = this.prerequisitesInput
      .split(',')
      .map((item) => item.trim());
      const res:any = await this.courseService.createCourse(this.newCourse)
      if(res.data){
        this.toastr.success("Course created successfully")
      }
    }catch(e){
      console.log(e);
    }
  }

  async deleteCourse(id: string) {
    try{
       await this.courseService.deleteCourse(id)
       this.toastr.success("Course deleted successfully")
       this.loadCourses()
    }catch(e){
      console.log(e);
    }
  }
}
