package com.school_management.management.controller.admin;


import com.school_management.management.helpers.ResponseHelper;
import com.school_management.management.model.Exam;
import com.school_management.management.model.Grades;
import com.school_management.management.service.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/exams")
public class ExamController {

    @Autowired
    private ExamService examService;

    @PostMapping
    public ResponseEntity<Object> createExam(@RequestBody Exam body) {
        try {
            examService.createExam(body);
            return ResponseHelper.createResponse(HttpStatus.OK, "Exam created successfully.", true, null);
        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), false, null);
        }
    }

    @GetMapping
    public ResponseEntity<Object> getAllExams() {
        try {
            List<Exam> data = examService.getAllExams();
            return ResponseHelper.createResponse(HttpStatus.OK, "Exam retrieved successfully.", data, null);
        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), false, null);
        }
    }

    @PutMapping("/{examId}")
    public ResponseEntity<Object> updateExam(@PathVariable String examId, @RequestBody Exam exam) {
        try {
            Exam data = examService.updateExam(examId,exam);
            return ResponseHelper.createResponse(HttpStatus.OK, "Exam updated successfully.", data, null);
        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), false, null);
        }
    }

    @DeleteMapping("/{examId}")
    public ResponseEntity<Object> deleteExam(@PathVariable String examId) {
        try {
            examService.deleteExam(examId);
            return ResponseHelper.createResponse(HttpStatus.OK, "exam deleted successfully.", true, null);
        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), false, null);
        }
    }


    @GetMapping("/class/{classId}")
    public ResponseEntity<Object> getExamsByClassId(@PathVariable String classId) {
        try {
            List<Exam> data = examService.getExamsByClassId(classId);
            return ResponseHelper.createResponse(HttpStatus.OK, "data updated successfully.", data, null);
        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), false, null);
        }
    }

    @GetMapping("/teacher/{teacherId}")
    public ResponseEntity<Object> getExamsByTeacherId(@PathVariable String teacherId) {
        try {
            List<Exam> data = examService.getExamsByTeacherId(teacherId);
            return ResponseHelper.createResponse(HttpStatus.OK, "data updated successfully.", data, null);
        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), false, null);
        }
    }

}
