package com.school_management.management.repository;

import com.school_management.management.model.Teacher;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface TeacherRepository extends MongoRepository<Teacher,String> {

    Optional<Teacher> findByEnrollmentNumber(String enrollmentNumber);

    List<Teacher> findAllByEnrollmentNumber(Iterable<String> enrollmentNumber);

    void deleteByEnrollmentNumber(String enrollmentNumber);
}
