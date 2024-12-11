package com.school_management.management.controller.admin;

import com.school_management.management.helpers.ResponseHelper;
import com.school_management.management.model.Course;
import com.school_management.management.model.Grades;
import com.school_management.management.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/courses")
public class CorseController {

    @Autowired
    private CourseService courseService;

    @PostMapping
    public ResponseEntity<Object> createCourse(@RequestBody Course body) {
        try {
            Course data =  courseService.createCourse(body);
            return ResponseHelper.createResponse(HttpStatus.OK, "Grade added successfully.", data, null);
        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), false, null);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<Object> getAllCourses() {
        try {
            List<Course> data =  courseService.getAllCourses();
            return ResponseHelper.createResponse(HttpStatus.OK, "data retrieved successfully.", data, null);
        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), false, null);
        }
    }

    @PatchMapping("/update/{id}")
    public ResponseEntity<Object> updateCourse(@PathVariable String id, @RequestBody Course updatedCourse) {
        try {
            Course data =  courseService.updateCourse(id,updatedCourse);
            return ResponseHelper.createResponse(HttpStatus.OK, "data updated successfully.", data, null);
        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), false, null);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Object> deleteCourse(@PathVariable String id) {
        try {
            courseService.deleteCourse(id);
            return ResponseHelper.createResponse(HttpStatus.OK, "data updated successfully.", true, null);
        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), false, null);
        }
    }
}
