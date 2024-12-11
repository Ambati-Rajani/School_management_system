import { Component, OnInit } from '@angular/core';
import { ExamService } from '../services/exam.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeacherService } from '../teacher/services/teacher.service';
import { StudentService } from '../students/services/student.service';
import { ScheduleService } from '../services/schedule.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-exam',
  imports: [NgFor,NgIf,FormsModule],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.css'
})
export class ExamComponent implements OnInit{
  exams: any[] = [];
  exam: any = {};
  classes:any[] = []
  teachers:any[] = []

  constructor(
    private examService: ExamService,
    private teacherService:TeacherService,
    private scheduleService:ScheduleService,
    private toastr:ToastrService

  ) {}

  ngOnInit(): void {
    this.loadExams();
    this.loadAllClasses()
    this.loadAllTeachers()
  }

  async loadExams() {
    try{
        const res:any = await this.examService.getAllExams();
        this.exams = res.data;
    }catch(e){
      console.log(e);
    }
  }

  async saveExam() {
    try{
      const res:any = await this.examService.createExam(this.exam);
      this.toastr.success("Exam created successfully")
  }catch(e){
    console.log(e);
  }
  }

  editExam(exam: any) {
    this.exam = { ...exam };
  }

  async deleteExam(examId: string) {
    try{
      const res:any = await this.examService.deleteExam(examId);
      this.exams = res.data;
      this.loadExams()
      this.toastr.success("Exams deleted successfully")
  }catch(e){
    console.log(e);
  }
  }

  async loadAllClasses(){
    try{
      const res:any = await this.scheduleService.getAllClasses();
      this.classes = res.data;
    }catch(e){
      console.log(e);
    }
  }

  async loadAllTeachers(){
    try{
      const res:any = await this.teacherService.getAllTeachers();
      this.teachers = res.data;
    }catch(e){
      console.log(e);
    }
  }
}
