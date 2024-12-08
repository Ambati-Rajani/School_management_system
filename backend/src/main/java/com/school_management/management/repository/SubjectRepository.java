package com.school_management.management.repository;

import com.school_management.management.model.Subject;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SubjectRepository extends MongoRepository<Subject,String> {
}
