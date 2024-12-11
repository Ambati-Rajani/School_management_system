package com.school_management.management.repository;

import com.school_management.management.model.SClass;
import com.school_management.management.model.Teacher;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface SClassRepository extends MongoRepository<SClass,String> {

    SClass findBysclassId(String sclassId);

    List<SClass> findByTeachersContaining(Teacher teacher);
}
