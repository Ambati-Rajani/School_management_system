import { Injectable } from '@angular/core';
import { CustomHttpService } from '../../services/customhttp.service';
import API_ENDPOINTS from '../../constants/apiEndpoints';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(
    private customHttp:CustomHttpService
  ) { }

  assignTeacherToClass(payload:{classId:string,teacherId:string}){
    try{
      const res = this.customHttp.post(API_ENDPOINTS.ASSIGN_TEACHER_API,payload)
      return res;
    }catch(e){
      throw e;
    }
  }

  assignStudentToClass(payload:{classId:string,studentId:string}){
    try{
      const res = this.customHttp.post(API_ENDPOINTS.ASSIGN_STUDENT_API,payload)
      return res;
    }catch(e){
      throw e;
    }
  }

  generateTimeTable(classId:string){
    try{
      const res = this.customHttp.get(API_ENDPOINTS.GENERATE_TIME_TABLE_API(classId))
      return res;
    }catch(e){
      throw e;
    }
  }

  createClass(payload:any){
    try{
      const res = this.customHttp.post(API_ENDPOINTS.CREATE_CLASS_API,payload)
      return res;
    }catch(e){
      throw e;
    }
  }

  getAllClasses(){
    try{
      const res = this.customHttp.get(API_ENDPOINTS.GET_ALL_CLASSES_API)
      return res;
    }catch(e){
      throw e;
    }
  }

  createRoom(payload:any){
    try{
      const res = this.customHttp.post(API_ENDPOINTS.CREATE_ROOM_API,payload)
      return res;
    }catch(e){
      throw e;
    }
  }

  getAllRooms(){
    try{
      const res = this.customHttp.get(API_ENDPOINTS.GET_ALL_ROOMS_API)
      return res;
    }catch(e){
      throw e;
    }
  }
}
