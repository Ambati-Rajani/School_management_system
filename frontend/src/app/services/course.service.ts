import { Injectable } from '@angular/core';
import { CustomHttpService } from './customhttp.service';
import API_ENDPOINTS from '../constants/apiEndpoints';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private customHttp:CustomHttpService
  ) { }

  createCourse(payload:any){
    try{
        const res = this.customHttp.post(API_ENDPOINTS.CREATE_COURSE_API,payload)
        return res;
    }catch(e){
      throw e;
    }
  }

  updateCourse(id:string,payload:any){
    try{
        const res = this.customHttp.patch(API_ENDPOINTS.UPDATE_COURSE_API(id),payload)
        return res;
    }catch(e){
      throw e;
    }
  }

  getAllCourses(){
    try{
        const res = this.customHttp.get(API_ENDPOINTS.GET_ALL_COURSES_API)
        return res;
    }catch(e){
      throw e;
    }
  }

  deleteCourse(id:string){
    try{
        const res = this.customHttp.delete(API_ENDPOINTS.DELETE_COURSES_API(id))
        return res;
    }catch(e){
      throw e;
    }
  }
}
