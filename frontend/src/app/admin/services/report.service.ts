import { Injectable } from '@angular/core';
import { CustomHttpService } from '../../services/customhttp.service';
import API_ENDPOINTS from '../../constants/apiEndpoints';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(
    private customHttp: CustomHttpService
  ) { }

  generateReport(payload:any){
    try{
      return this.customHttp.post(API_ENDPOINTS.GENERATE_REPORT_API,payload);
    }catch(e){
      throw e;
    }
  }

  getAllReports(){
    try{
      return this.customHttp.get(API_ENDPOINTS.GET_ALL_REPORTS_API);
    }catch(e){
      throw e;
    }
  }

  getReportsByCreateBy(createdBy:string){
    try{
      return this.customHttp.get(API_ENDPOINTS.GET_REPORTS_BY_CREATOR_API(createdBy));
    }catch(e){
      throw e;
    }
  }
}
