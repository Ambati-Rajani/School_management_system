import { Injectable } from '@angular/core';
import { CustomHttpService } from '../../../services/customhttp.service';
import API_ENDPOINTS from '../../../constants/apiEndpoints';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(
    private http:CustomHttpService,
  ) { }

  async addTeacher(payload:any){
    try{
      const res = this.http.post(API_ENDPOINTS.ADMIN_ADD_TEACHER_API,payload)
      return res;
    }catch(e){
      throw e
    }
  }

  async updateTeacher(id:string,payload:any){
    try{
      const res = this.http.patch(API_ENDPOINTS.ADMIN_UPDATE_TEACHER_API(id),payload)
      return res;
    }catch(e){
      throw e
    }
  }

  async getAllTeachers(){
    try{
      const res = this.http.get(API_ENDPOINTS.ADMIN_GET_ALL_TEACHER_API)
      return res;
    }catch(e){
      throw e
    }
  }

  async getTeacherById(id:string){
    try{
      const res = this.http.get(API_ENDPOINTS.ADMIN_GET_TEACHER_BY_ID(id))
      return res;
    }catch(e){
      throw e
    }
  }

  async deleteTeacherById(id:string){
    try{
      const res = this.http.delete(API_ENDPOINTS.ADMIN_DELETE_TEACHER_API(id))
      return res;
    }catch(e){
      throw e
    }
  }

  async assignSubjectsToTeacher(payload:{teacherId:string,subjectId:string}){
    try{
      const res = this.http.post(API_ENDPOINTS.ASSIGN_SUBJECT_TO_TEACHER_API,payload)
      return res;
    }catch(e){
      throw e
    }
  }

  async createSubject(subjectName:string){
    try{
      const res = this.http.post(API_ENDPOINTS.CREATE_SUBJECT_API,subjectName)
      return res;
    }catch(e){
      throw e
    }
  }
}
