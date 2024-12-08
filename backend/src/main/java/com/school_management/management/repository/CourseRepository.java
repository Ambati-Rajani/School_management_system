package com.school_management.management.repository;

import com.school_management.management.model.Course;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CourseRepository extends MongoRepository<Course,String> {
}
