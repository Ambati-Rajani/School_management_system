package com.school_management.management.controller.app;

import com.school_management.management.helpers.ResponseHelper;
import com.school_management.management.model.Attendance;
import com.school_management.management.model.Student;
import com.school_management.management.service.AttendanceService;
import com.school_management.management.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/app/student")
public class StudentController {

    @Autowired
    private AttendanceService  attendanceService;

    @Autowired
    private StudentService studentService;

    @GetMapping("/{studentId}")
    public ResponseEntity<Object> markAttendance(@PathVariable String studentId) {
        try{
            Student data = studentService.getStudentByEnrollment(studentId);
            return ResponseHelper.createResponse(HttpStatus.OK,"marked successfully",data,null);
        }catch (Exception e){
            return ResponseHelper.createErrorResponse(HttpStatus.BAD_REQUEST,e.getMessage(),false,null);
        }
    }

    @GetMapping("/{studentId}/attendance")
    public ResponseEntity<Object> getAttendanceByStudentId(@PathVariable String studentId) {
        try{
            List<Attendance> data = studentService.getAttendanceByStudentId(studentId);
            return ResponseHelper.createResponse(HttpStatus.OK,"marked successfully",data,null);
        }catch (Exception e){
            return ResponseHelper.createErrorResponse(HttpStatus.BAD_REQUEST,e.getMessage(),false,null);
        }
    }
}
