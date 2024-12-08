import { Injectable } from '@angular/core';
import { CustomHttpService } from '../../services/customhttp.service';
import API_ENDPOINTS from '../../constants/apiEndpoints';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private customHttp:CustomHttpService
  ) { }

  getStudentDetailsById(enrollment:string){
    try{
      const res:any = this.customHttp.get(API_ENDPOINTS.GET_STUDENT_BY_ENROLLMENT_API(enrollment));
      return res
    }catch(e){
      throw e;
    }
  }

  getGradesByStudentId(enrollment:string){
    try{
      const res:any = this.customHttp.get(API_ENDPOINTS.APP_GET_GRADE_BY_STUDENT_ID_API(enrollment));
      return res
    }catch(e){
      throw e;
    }
  }

  getAttendanceByStudentId(enrollment:string){
    try{
      const res:any = this.customHttp.get(API_ENDPOINTS.GET_ATTENDANCE_BY_STUDENT_ENROLLMENT_API(enrollment));
      return res
    }catch(e){
      throw e;
    }
  }
}
