package com.school_management.management.controller.app;

import com.school_management.management.dto.AttendanceDTO;
import com.school_management.management.helpers.ResponseHelper;
import com.school_management.management.model.Attendance;
import com.school_management.management.model.SClass;
import com.school_management.management.model.Student;
import com.school_management.management.model.Teacher;
import com.school_management.management.service.AttendanceService;
import com.school_management.management.service.ScheduleService;
import com.school_management.management.service.StudentService;
import com.school_management.management.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/app/teacher")
public class TeacherController {

    @Autowired
    private TeacherService teacherService;

    @Autowired
    private AttendanceService attendanceService;

    @Autowired
    private StudentService studentService;

    @Autowired
    private ScheduleService scheduleService;

    @PostMapping("/attendance")
    public ResponseEntity<Object> markAttendance(@RequestBody List<AttendanceDTO> attendance) {
        try{
            List<Attendance> data = attendanceService.markAttendance(attendance);
            return ResponseHelper.createResponse(HttpStatus.OK,"marked successfully",data,null);
        }catch (Exception e){
            return ResponseHelper.createErrorResponse(HttpStatus.BAD_REQUEST,e.getMessage(),false,null);
        }
    }

    @GetMapping("/{classId}/get-class")
    public ResponseEntity<Object> getClassByClassId(@PathVariable String classId) {
        try{
            SClass data = scheduleService.getClassById(classId);
            return ResponseHelper.createResponse(HttpStatus.OK,"date retrieved successfully",data,null);
        }catch (Exception e){
            return ResponseHelper.createErrorResponse(HttpStatus.BAD_REQUEST,e.getMessage(),false,null);
        }
    }

    @GetMapping("/{enrollmentNumber}")
    public ResponseEntity<Object> getTeacherByEnrollment(@PathVariable String enrollmentNumber) {
        try{

            Teacher data = teacherService.getTeacherByEnrollment(enrollmentNumber);
            return ResponseHelper.createResponse(HttpStatus.OK,"date retrieved successfully",data,null);
        }catch (Exception e){
            return ResponseHelper.createErrorResponse(HttpStatus.BAD_REQUEST,e.getMessage(),false,null);
        }
    }
    @GetMapping("/{enrollmentNumber}/classes")
    public ResponseEntity<Object> getClassesByTeacherEnrollement(@PathVariable String enrollmentNumber) {
        try{
            List<SClass> data = scheduleService.getAllClassesByTeacherEnrollment(enrollmentNumber);
            return ResponseHelper.createResponse(HttpStatus.OK,"date retrieved successfully",data,null);
        }catch (Exception e){
            return ResponseHelper.createErrorResponse(HttpStatus.BAD_REQUEST,e.getMessage(),false,null);
        }
    }

    @GetMapping("/{classId}/attendance")
    public ResponseEntity<Object> getAttendanceByClassId(@PathVariable String classId) {
        try{
            List<Attendance> data = attendanceService.getAttendanceByClassId(classId);
            return ResponseHelper.createResponse(HttpStatus.OK,"date retrieved successfully",data,null);
        }catch (Exception e){
            return ResponseHelper.createErrorResponse(HttpStatus.BAD_REQUEST,e.getMessage(),false,null);
        }
    }




}
