package com.school_management.management.repository;

import com.school_management.management.model.Grades;
import com.school_management.management.model.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface GradeRepository extends MongoRepository<Grades,String> {
    List<Grades> findByStudent(Student student);
}
