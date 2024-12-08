package com.school_management.management.controller.admin;

import com.school_management.management.helpers.ResponseHelper;
import com.school_management.management.model.Grades;
import com.school_management.management.service.GradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/grades")
@CrossOrigin(origins = "*")
public class GradeController {

    @Autowired
    private GradeService gradeService;

    @PostMapping
    public ResponseEntity<Object> addGrade(@RequestBody Grades body) {
        try {
            gradeService.addGrade(body);
            return ResponseHelper.createResponse(HttpStatus.OK, "Grade added successfully.", true, null);
        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), false, null);
        }
    }

    @PutMapping("/{gradeId}")
    public ResponseEntity<Object> updateGrade(@PathVariable String gradeId,@RequestBody Grades body) {
        try {
            gradeService.updateGrade(gradeId,body);
            return ResponseHelper.createResponse(HttpStatus.OK, "Grade added successfully.", true, null);
        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), false, null);
        }
    }

    @GetMapping("/student/{studentId}")
    public ResponseEntity<Object> getGradesByStudent(@PathVariable String studentId) {
        try {
            gradeService.getGradesByStudentId(studentId);
            return ResponseHelper.createResponse(HttpStatus.OK, "Grade added successfully.", true, null);
        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), false, null);
        }
    }
}
