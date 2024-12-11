import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScheduleService } from '../../services/schedule.service';
import { ToastrService } from 'ngx-toastr';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-class',
  imports: [FormsModule,NgFor],
  templateUrl: './class.component.html',
  styleUrl: './class.component.css'
})
export class ClassComponent implements OnInit{
  classPayload:any = {
    name: ''
  }
  classes:any[] = []

  constructor(
    private scheduleService:ScheduleService,
    private toastr:ToastrService,
  ) {}

  ngOnInit(): void {
      this.loadAllClasses()
  }


  async createClass(){
    try{
      const res:any = await this.scheduleService.createClass(this.classPayload)
      if(res.data){
        this.toastr.success("Class created successfully")
        this.loadAllClasses()
      }
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
}
