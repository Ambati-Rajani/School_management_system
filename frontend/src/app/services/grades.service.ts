import { Injectable } from '@angular/core';
import { CustomHttpService } from './customhttp.service';
import API_ENDPOINTS from '../constants/apiEndpoints';

@Injectable({
  providedIn: 'root'
})
export class GradesService {

  constructor(
    private customHttp: CustomHttpService
  ) { }

  addGrade(payload:any){
    try{
      const res = this.customHttp.post(API_ENDPOINTS.APP_ADD_GRADE_API,payload);
      return res;
    }catch(e){
      throw e
    }
  }

  updateGrade(id:string,payload:any){
    try{
      const res = this.customHttp.patch(API_ENDPOINTS.UPDATE_GRADE_API(id),payload);
      return res;
    }catch(e){
      throw e
    }
  }

  getGradeByStudentId(id:string){
    try{
      const res = this.customHttp.get(API_ENDPOINTS.GET_GRADE_BY_STUDENT_ID_API(id));
      return res;
    }catch(e){
      throw e
    }
  }

  getGradeByTeacherId(id:string){
    try{
      const res = this.customHttp.get(API_ENDPOINTS.GET_GRADES_BY_TEACHER_ID_API(id));
      return res;
    }catch(e){
      throw e
    }
  }
}
