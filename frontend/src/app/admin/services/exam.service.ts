import { Injectable } from '@angular/core';
import { CustomHttpService } from '../../services/customhttp.service';
import API_ENDPOINTS from '../../constants/apiEndpoints';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(
    private customHttp:CustomHttpService
  ) { }

  createExam(payload:string){
    try{
      return this.customHttp.post(API_ENDPOINTS.CREATE_EXAM_API,payload);
    }catch(e){
      throw e;
    }
  }

  updateExam(id:string,payload:string){
    try{
      return this.customHttp.patch(API_ENDPOINTS.UPDATE_EXAM_API(id),payload);
    }catch(e){
      throw e;
    }
  }


  getAllExams(){
    try{
      return this.customHttp.get(API_ENDPOINTS.GET_ALL_EXAMS_API);
    }catch(e){
      throw e;
    }
  }

  getExamsByClassId(classId:string){
    try{
      return this.customHttp.get(API_ENDPOINTS.GET_EXAMS_BY_CLASS_ID_API(classId));
    }catch(e){
      throw e;
    }
  }

  getExamsByTeacherId(teacherId:string){
    try{
      return this.customHttp.get(API_ENDPOINTS.GET_EXAMS_BY_TEACHER_ID_API(teacherId));
    }catch(e){
      throw e;
    }
  }

  deleteExam(examId:string){
    try{
      return this.customHttp.delete(API_ENDPOINTS.DELETE_EXAM_API(examId));
    }catch(e){
      throw e;
    }
  }
}
