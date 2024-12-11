package com.school_management.management.controller.admin;

import com.school_management.management.dto.ReportRequestDto;
import com.school_management.management.helpers.ResponseHelper;
import com.school_management.management.model.Report;
import com.school_management.management.model.SClass;
import com.school_management.management.service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/reports")
public class ReportController {

    @Autowired
    private ReportService reportService;


    @PostMapping("/generate")
    public ResponseEntity<Object> generateReport(@RequestBody ReportRequestDto body) {
        try {
            Report data = reportService.generateReport(body.getType(),body.getData(),body.getCreatedBy());
            return ResponseHelper.createResponse(HttpStatus.OK, "Report generate successfully.", data, null);
        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), false, null);
        }
    }

    @GetMapping
    public ResponseEntity<Object> getAllReports() {
        try {
            List<Report> data = reportService.getAllReports();
            return ResponseHelper.createResponse(HttpStatus.OK, "Report generate successfully.", data, null);
        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), false, null);
        }
    }

    @GetMapping("/{createdBy}")
    public ResponseEntity<Object> getReportsByCreator(@PathVariable String createdBy) {
        try {
            List<Report> data = reportService.getReportsByCreator(createdBy);
            return ResponseHelper.createResponse(HttpStatus.OK, "Report generate successfully.", data, null);
        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), false, null);
        }
    }


}
