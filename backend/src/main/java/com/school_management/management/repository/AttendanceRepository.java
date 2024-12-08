package com.school_management.management.repository;

import com.school_management.management.model.Attendance;
import com.school_management.management.model.SClass;
import com.school_management.management.model.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface AttendanceRepository extends MongoRepository<Attendance,String> {

    List<Attendance> findByStudent(Student student);

    List<Attendance> findByClassId(SClass sclass);
}
