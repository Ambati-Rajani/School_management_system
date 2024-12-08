package com.school_management.management.repository;

import com.school_management.management.model.Report;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface ReportRepository extends MongoRepository<Report,String> {

    List<Report> findByCreatedBy(String createdBy);
}
