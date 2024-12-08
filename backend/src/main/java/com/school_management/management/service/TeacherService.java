package com.school_management.management.service;

import com.school_management.management.model.Subject;
import com.school_management.management.model.Teacher;
import com.school_management.management.repository.SubjectRepository;
import com.school_management.management.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherService {

    @Autowired
    private TeacherRepository teacherRepository;

    @Autowired
    private SubjectRepository subjectRepository;

    public Teacher addteacher(Teacher teacher){
        try{
            return teacherRepository.save(teacher);
        }catch (Exception e){
            throw e;
        }
    }

    public List<Teacher> getAllTeachers(){
        try{
            return teacherRepository.findAll();
        }catch (Exception e){
            throw e;
        }
    }

    public Teacher getTeacherById(String teacherId){
        try{
            return teacherRepository.findById(teacherId)
                    .orElseThrow(() -> new RuntimeException("teacher not found"));
        }catch (Exception e){
            throw e;
        }
    }

    public Teacher getTeacherByEnrollment(String erpNo){
        try{
            return teacherRepository.findByEnrollmentNumber(erpNo)
                    .orElseThrow(() -> new RuntimeException("teacher not found"));
        }catch (Exception e){
            throw e;
        }
    }

    public Teacher updateteacher(String erpNo,Teacher newteacher){
        try{
            return teacherRepository.findByEnrollmentNumber(erpNo)
                    .map(teacher -> {
                        teacher.setName(newteacher.getName());
                        teacher.setDateOfBirth(newteacher.getDateOfBirth());
                        teacher.setDepartment(newteacher.getDepartment());
                        teacher.setEmail(newteacher.getEmail());
                        teacher.setPhone(newteacher.getPhone());
                        return teacherRepository.save(teacher);
                    })
                    .orElseThrow(() -> new RuntimeException("teacher not found"));
        }catch (Exception e){
            throw e;
        }
    }

    public void deleteStudent(String teacherId){
        try{
            teacherRepository.deleteByEnrollmentNumber(teacherId);
        }catch (Exception e){
            throw e;
        }
    }

    public void assignSubjectsToTeacher(String teacherId,String subjectId){
        try{
            Teacher teacher = teacherRepository.findByEnrollmentNumber(teacherId)
                    .orElseThrow(() -> new RuntimeException("teacher not found"));
            Subject subject = subjectRepository.findById(subjectId).orElseThrow(() -> new RuntimeException("subject not found"));
            teacher.setSubject(subject);
            teacherRepository.save(teacher);
        }catch (Exception e){
            throw e;
        }
    }

    // Method to get all subjects for a specific teacher
    public Subject getSubjectForTeacher(String teacherId) {
        Teacher teacher = teacherRepository.findById(teacherId).orElseThrow();
        Subject subject = subjectRepository.findById(teacher.getSubject().getSubjectId()).orElseThrow();
        return subject;
    }

    // Method to create a new subject
    public Subject createSubject(String name) {
        Subject subject = new Subject();
        subject.setName(name);
        return subjectRepository.save(subject);
    }
}
