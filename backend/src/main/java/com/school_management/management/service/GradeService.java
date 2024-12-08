package com.school_management.management.service;

import com.school_management.management.model.Grades;
import com.school_management.management.model.Student;
import com.school_management.management.repository.GradeRepository;
import com.school_management.management.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GradeService {

    @Autowired
    private GradeRepository gradeRepository;

    @Autowired
    private StudentRepository studentRepository;

    public Grades addGrade(Grades grade){
        return gradeRepository.save(grade);
    }

    public Grades updateGrade(String gradeId, Grades updatedGrade) {
        Grades grade = gradeRepository.findById(gradeId)
                .orElseThrow(() -> new RuntimeException("Grade not found"));
        grade.setGradeValue(updatedGrade.getGradeValue());
        return gradeRepository.save(grade);
    }

    public List<Grades> getGradesByStudentId(String studentId) {
        Student student = studentRepository.findByEnrollmentNumber(studentId).orElseThrow(() -> new RuntimeException("Student not found"));
        return gradeRepository.findByStudent(student);
    }
}
