package com.school_management.management.service;

import com.school_management.management.model.Report;
import com.school_management.management.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ReportService {

    @Autowired
    private ReportRepository reportRepository;

    public Report generateReport(String type, String data, String createdBy) {
        Report report = new Report();
        report.setType(type);
        report.setGeneratedDate(new Date().toString());
        report.setData(data);
        report.setCreatedBy(createdBy);
        return reportRepository.save(report);
    }

    public List<Report> getAllReports() {
        return reportRepository.findAll();
    }

    public List<Report> getReportsByCreator(String createdBy) {
        return reportRepository.findByCreatedBy(createdBy);
    }
}
