package com.school_management.management.repository;

import com.school_management.management.model.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface StudentRepository extends MongoRepository<Student,String> {

    Optional<Student> findByEnrollmentNumber(String erpNo);

    List<Student> findAllByEnrollmentNumber(Iterable<String> erpNo);

    void deleteByEnrollmentNumber(String erpNo);
}
