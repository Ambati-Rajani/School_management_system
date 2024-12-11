import { Injectable } from '@angular/core';
import { CustomHttpService } from '../../services/customhttp.service';
import API_ENDPOINTS from '../../constants/apiEndpoints';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(
    private customHttp:CustomHttpService
  ) { }

  getTeacherDetails(id:string){
    try{
      const res = this.customHttp.get(API_ENDPOINTS.GET_TEACHER_BY_ENROLLMENT_API(id))
      return res;
    }catch(e){
      throw e
    }
  }

  getAllClassesByTeacher(id:string){
    try{
      const res = this.customHttp.get(API_ENDPOINTS.GET_ALL_CLASSES_BY_TEACHER_ENROLLMENT_API(id))
      return res;
    }catch(e){
      throw e;
    }
  }

  getClassByClassId(id:string){
    try{
      const res = this.customHttp.get(API_ENDPOINTS.GET_CLASSE_BY_CLASS_ID_API(id))
      return res;
    }catch(e){
      throw e;
    }
  }

  markClassAttendance(payload:any){
    try{
      const res = this.customHttp.post(API_ENDPOINTS.MARK_ATTENDANCE_API,payload)
      return res;
    }catch(e){
      throw e;
    }
  }

  getAttendanceByClassId(classId:string){
    try{
      const res = this.customHttp.get(API_ENDPOINTS.GET_ATTENDANCE_BY_CLASS_ID_API(classId))
      return res;
    }catch(e){
      throw e;
    }
  }
}
