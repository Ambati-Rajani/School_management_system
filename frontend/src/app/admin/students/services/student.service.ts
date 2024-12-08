import { Injectable } from '@angular/core';
import { CustomHttpService } from '../../../services/customhttp.service';
import API_ENDPOINTS from '../../../constants/apiEndpoints';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private http:CustomHttpService,
  ) { }

  async addStudent(payload:any){
    try{
      const res = this.http.post(API_ENDPOINTS.ADMIN_ADD_STUDENT_API,payload)
      return res;
    }catch(e){
      throw e
    }
  }

  async updateStudent(id:string,payload:any){
    try{
      const res = this.http.patch(API_ENDPOINTS.ADMIN_UPDATE_STUDENT_API(id),payload)
      return res;
    }catch(e){
      throw e
    }
  }

  async getAllStudents(){
    try{
      const res = this.http.get(API_ENDPOINTS.ADMIN_GET_ALL_STUDENT_API)
      return res;
    }catch(e){
      throw e
    }
  }

  async getAttendanceByStudentId(id:string){
    try{
      const res = this.http.get(API_ENDPOINTS.ADMIN_GET_ATTENDANCE_BY_STUDENT_ID(id))
      return res;
    }catch(e){
      throw e
    }
  }

  async getStudentById(id:string){
    try{
      const res = this.http.get(API_ENDPOINTS.ADMIN_GET_STUDENT_BY_ID(id))
      return res;
    }catch(e){
      throw e
    }
  }

  async deleteStudentById(id:string){
    try{
      const res = this.http.delete(API_ENDPOINTS.ADMIN_DELETE_STUDENT_API(id))
      return res;
    }catch(e){
      throw e
    }
  }
}
