package com.school_management.management.service;

import com.school_management.management.dto.GradeRequestDto;
import com.school_management.management.model.Course;
import com.school_management.management.model.Grades;
import com.school_management.management.model.Student;
import com.school_management.management.model.Teacher;
import com.school_management.management.repository.CourseRepository;
import com.school_management.management.repository.GradeRepository;
import com.school_management.management.repository.StudentRepository;
import com.school_management.management.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GradeService {

    @Autowired
    private GradeRepository gradeRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private TeacherRepository teacherRepository;

    @Autowired
    private CourseRepository courseRepository;

    public Grades addGrade(GradeRequestDto grade){
        Student student = studentRepository.findByEnrollmentNumber(grade.getStudentId()).orElseThrow(() -> new RuntimeException("student not found"));
        Teacher teacher = teacherRepository.findByEnrollmentNumber(grade.getTeacherId()).orElseThrow(() -> new RuntimeException("teacher not found"));
        Course course = courseRepository.findById(grade.getCourseId()).orElseThrow(() -> new RuntimeException("course not found"));
        Grades newGrade = new Grades();
        newGrade.setStudent(student);
        newGrade.setTeacher(teacher);
        newGrade.setCourse(course);
        newGrade.setGradeValue(grade.getGradeValue());
        return gradeRepository.save(newGrade);
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

    public List<Grades> getGradesByTeacherId(String teacherId) {
        Teacher teacher = teacherRepository.findByEnrollmentNumber(teacherId).orElseThrow(() -> new RuntimeException("teacher not found"));
        return gradeRepository.findByTeacher(teacher);
    }
}
