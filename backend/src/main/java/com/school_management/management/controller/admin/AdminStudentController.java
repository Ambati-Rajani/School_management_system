package com.school_management.management.controller.admin;

import com.school_management.management.helpers.ResponseHelper;
import com.school_management.management.model.Attendance;
import com.school_management.management.model.Student;
import com.school_management.management.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/student")
public class AdminStudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping
    public ResponseEntity<Object> addStudent(@RequestBody Student student){
        try{
            Student data = studentService.addStudent(student);
            return ResponseHelper.createResponse(HttpStatus.OK, "student created successfully", data,null);
        }catch (Exception e){
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR,e.getMessage(),false,null);
        }
    }

    @PatchMapping("/{erpNo}")
    public ResponseEntity<Object> updateStudentByEnrollment(@PathVariable String erpNo,@RequestBody Student student){
        try{
            Student data = studentService.updateStudent(erpNo,student);
            return ResponseHelper.createResponse(HttpStatus.OK, "Updated Successfully", data,null);
        }catch (Exception e){
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR,e.getMessage(),false,null);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<Object> getAllStudents(){
        try{
            List<Student> data = studentService.getAllStudents();
            return ResponseHelper.createResponse(HttpStatus.OK, "Successfully retrieved", data,null);
        }catch (Exception e){
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR,e.getMessage(),false,null);
        }
    }

    @GetMapping("/{erpNo}")
    public ResponseEntity<Object> getStudentByEnrollment(@PathVariable String erpNo){
        try{
            Student data = studentService.getStudentByEnrollment(erpNo);
            return ResponseHelper.createResponse(HttpStatus.OK, "Successfully retrieved", data,null);
        }catch (Exception e){
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR,e.getMessage(),false,null);
        }
    }

    @DeleteMapping("/{erpNo}")
    public ResponseEntity<Object> deleteStudentByEnrollment(@PathVariable String erpNo){
        try{
            studentService.deleteStudent(erpNo);
            return ResponseHelper.createResponse(HttpStatus.OK, "student deleted successfully", true,null);
        }catch (Exception e){
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR,e.getMessage(),false,null);
        }
    }

    @GetMapping("/{erpNo}/attendance")
    public ResponseEntity<Object> getAttendanceByStudentId(@PathVariable String erpNo){
        try{
            List<Attendance> data = studentService.getAttendanceByStudentId(erpNo);
            return ResponseHelper.createResponse(HttpStatus.OK, "student attendance retrieved successfully", data,null);
        }catch (Exception e){
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR,e.getMessage(),false,null);
        }
    }
}
