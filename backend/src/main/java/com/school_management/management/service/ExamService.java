package com.school_management.management.service;

import com.school_management.management.model.Exam;
import com.school_management.management.repository.ExamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExamService {

    @Autowired
    private ExamRepository examRepository;

    public List<Exam> getAllExams() {
        return examRepository.findAll();
    }

    public Exam createExam(Exam exam) {
        return examRepository.save(exam);
    }

    public Exam updateExam(String examId, Exam updatedExam) {
        return examRepository.findById(examId).map(exam -> {
            exam.setClassId(updatedExam.getClassId());
            exam.setTeacherId(updatedExam.getTeacherId());
            exam.setDate(updatedExam.getDate());
            exam.setTime(updatedExam.getTime());
            exam.setStatus(updatedExam.getStatus());
            return examRepository.save(exam);
        }).orElse(null);
    }

    public void deleteExam(String examId) {
        examRepository.deleteById(examId);
    }

    public List<Exam> getExamsByClassId(String classId) {
        return examRepository.findByClassId(classId);
    }

    public List<Exam> getExamsByTeacherId(String teacherId) {
        return examRepository.findByTeacherId(teacherId);
    }
}
