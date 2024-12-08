package com.school_management.management.repository;

import com.school_management.management.model.Exam;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ExamRepository extends MongoRepository<Exam,String> {
    List<Exam> findByClassId(String classId);
    List<Exam> findByTeacherId(String teacherId);
}
