import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScheduleService } from '../../services/schedule.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-room',
  imports: [FormsModule,NgFor],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {
  roomPayload:any = {
    roomNumber: '',
    capacity:0,
    availableTimeslots: null
  }
  rooms:any[] = []

  constructor(
    private scheduleService:ScheduleService,
    private toastr:ToastrService,
  ) {}

  ngOnInit(): void {
      this.loadAllRooms()
  }


  async createRoom(){
    try{
      const res:any = await this.scheduleService.createRoom(this.roomPayload)
      if(res.data){
        this.toastr.success("room created successfully")
        this.loadAllRooms()
      }
    }catch(e){
      console.log(e);
    }
  }

  async loadAllRooms(){
    try{
      const res:any = await this.scheduleService.getAllRooms()
      this.rooms = res.data;
    }catch(e){
      console.log(e);
    }
  }
}
