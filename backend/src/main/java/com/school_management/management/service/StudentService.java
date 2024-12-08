package com.school_management.management.service;

import com.school_management.management.model.Attendance;
import com.school_management.management.model.Student;
import com.school_management.management.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private AttendanceService attendanceService;

    public Student addStudent(Student student){
        try{
            return studentRepository.save(student);
        }catch (Exception e){
            throw e;
        }
    }

    public List<Student> getAllStudents(){
        try{
            return studentRepository.findAll();
        }catch (Exception e){
            throw e;
        }
    }

    public List<Attendance> getAttendanceByStudentId(String erpNo){
        try{
            return attendanceService.getAttendanceByStudentId(erpNo);
        }catch (Exception e){
            throw e;
        }
    }

    public Student getStudentById(String studentId){
        try{
            return studentRepository.findById(studentId)
                    .orElseThrow(() -> new RuntimeException("Student not found"));
        }catch (Exception e){
            throw e;
        }
    }

    public Student getStudentByEnrollment(String erpNo){
        try{
            return studentRepository.findByEnrollmentNumber(erpNo)
                    .orElseThrow(() -> new RuntimeException("Student not found"));
        }catch (Exception e){
            throw e;
        }
    }

    public Student updateStudent(String erpNo,Student newStudent){
        try{
            return studentRepository.findByEnrollmentNumber(erpNo)
                    .map(student -> {
                        student.setName(newStudent.getName());
                        student.setDateOfBirth(newStudent.getDateOfBirth());
                        student.setAddress(newStudent.getAddress());
                        student.setS_class(newStudent.getS_class());
                        student.setPhone(newStudent.getPhone());
                        return studentRepository.save(student);
                    })
                    .orElseThrow(() -> new RuntimeException("Student not found"));
        }catch (Exception e){
            throw e;
        }
    }

    public void deleteStudent(String studentId){
        try{
            studentRepository.deleteByEnrollmentNumber(studentId);
        }catch (Exception e){
            throw e;
        }
    }
}
