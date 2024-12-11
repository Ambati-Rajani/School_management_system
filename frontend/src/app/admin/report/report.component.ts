import { Component } from '@angular/core';
import { ReportService } from '../services/report.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-report',
  imports: [FormsModule,NgFor],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {
  reports: any[] = [];
  reportData = {
    type: 'Performance',
    data: '',
    createdBy: '', // Example; replace with actual userId
  };

  constructor(
    private reportService: ReportService,
    private toastr:ToastrService,
    private authService:AuthService
  ) {}

  ngOnInit(): void {
    this.loadReports();
    this.reportData.createdBy = this.authService.currentUser.username
  }

  async loadReports() {
    try{
      const res:any = await this.reportService.getAllReports()
      this.reports = res.data;
    }catch(e){
      console.log(e);
    }
  }

  async generateReport() {
    try{
      const res:any = await this.reportService.generateReport(this.reportData)
      this.toastr.success("Generated report")
      this.loadReports()
    }catch(e){
      console.log(e);
    }
  }

  viewReport(report: any) {
    alert(JSON.stringify(report.data, null, 2)); // Replace with a modal/dialog
  }
}
