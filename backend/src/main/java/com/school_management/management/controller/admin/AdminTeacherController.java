package com.school_management.management.controller.admin;

import com.school_management.management.dto.AssignSubjectsRequest;
import com.school_management.management.helpers.ResponseHelper;
import com.school_management.management.model.Subject;
import com.school_management.management.model.Teacher;
import com.school_management.management.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/teacher")
public class AdminTeacherController {
    @Autowired
    private TeacherService teacherService;

    @PostMapping
    public ResponseEntity<Object> addTeacher(@RequestBody Teacher teacher) {
        try {
            Teacher data = teacherService.addteacher(teacher);
            return ResponseHelper.createResponse(HttpStatus.OK, "student created successfully", data, null);
        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), false, null);
        }
    }

    @PatchMapping("/{erpNo}")
    public ResponseEntity<Object> updateTeacherByEnrollment(@PathVariable String erpNo, @RequestBody Teacher teacher) {
        try {
            Teacher data = teacherService.updateteacher(erpNo, teacher);
            return ResponseHelper.createResponse(HttpStatus.OK, "Updated Successfully", data, null);
        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), false, null);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<Object> getAllTeachers() {
        try {
            List<Teacher> data = teacherService.getAllTeachers();
            return ResponseHelper.createResponse(HttpStatus.OK, "Successfully retrieved", data, null);
        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), false, null);
        }
    }

    @GetMapping("/{erpNo}")
    public ResponseEntity<Object> getTeacherByEnrollment(@PathVariable String erpNo) {
        try {
            Teacher data = teacherService.getTeacherByEnrollment(erpNo);
            return ResponseHelper.createResponse(HttpStatus.OK, "Successfully retrieved", data, null);
        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), false, null);
        }
    }

    @DeleteMapping("/{erpNo}")
    public ResponseEntity<Object> deleteTeacherByEnrollment(@PathVariable String erpNo) {
        try {
            teacherService.deleteStudent(erpNo);
            return ResponseHelper.createResponse(HttpStatus.OK, "teacher deleted successfully", true, null);
        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), false, null);
        }
    }

    @PostMapping("/assign-subject")
    public ResponseEntity<Object> assignSubjectsToTeacher(@RequestBody AssignSubjectsRequest request) {
        try {
            teacherService.assignSubjectsToTeacher(request.getTeacherId(),request.getSubjectId());
            return ResponseHelper.createResponse(HttpStatus.OK, "Subjects assigned successfully.", true, null);
        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), false, null);
        }
    }

    @PostMapping("/create-subject")
    public ResponseEntity<Object> createSubject(@RequestBody String subjectName) {
        try {
            Subject data = teacherService.createSubject(subjectName);
            return ResponseHelper.createResponse(HttpStatus.OK, "subject created successfully.", data, null);
        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), false, null);
        }
    }

    @GetMapping("/subjects/{teacherId}")
    public ResponseEntity<Object> getSubjectsForTeacher(@PathVariable String teacherId) {
        try {
            Subject data = teacherService.getSubjectForTeacher(teacherId);
            return ResponseHelper.createResponse(HttpStatus.OK, "Data retrieved successfully", data, null);
        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), false, null);
        }
    }
}
