package com.school_management.management.controller.admin;


import com.school_management.management.dto.AssignStudentRequest;
import com.school_management.management.dto.AssignTeacherRequest;
import com.school_management.management.helpers.ResponseHelper;
import com.school_management.management.model.Room;
import com.school_management.management.model.SClass;
import com.school_management.management.model.Teacher;
import com.school_management.management.service.ScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/schedule")
public class ScheduleController {
    @Autowired
    private ScheduleService scheduleService;

    @PostMapping("/create-class")
    public ResponseEntity<Object> assignTeacher(@RequestBody SClass body) {
        try {
            SClass data = scheduleService.createClass(body);
            return ResponseHelper.createResponse(HttpStatus.OK, "Teacher assigned successfully.", data, null);
        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), false, null);
        }
    }

    @GetMapping("/get-all-classes")
    public ResponseEntity<Object> getAllClasses() {
        try {
            List<SClass> data = scheduleService.getAllClasses();
            return ResponseHelper.createResponse(HttpStatus.OK, "Teacher assigned successfully.", data, null);
        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), false, null);
        }
    }



    @PostMapping("/assign-teacher")
    public ResponseEntity<Object> assignTeacher(@RequestBody AssignTeacherRequest request) {
        try {
            System.out.println(request);
            SClass data = scheduleService.assignTeacherToClass(request.getClassId(),request.getTeacherId());
            return ResponseHelper.createResponse(HttpStatus.OK, "Teacher assigned successfully.", data, null);
        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), false, null);
        }
    }

    @PostMapping("/assign-student")
    public ResponseEntity<Object> assignStudent(@RequestBody AssignStudentRequest request) {
        try {
            scheduleService.assignStudentToClass(request.getClassId(),request.getStudentId());
            return ResponseHelper.createResponse(HttpStatus.OK, "student assigned successfully.", true, null);
        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), false, null);
        }
    }

    @GetMapping("/generate-timetable/{classId}")
    public ResponseEntity<Object> generateTimeTable(@PathVariable String classId) {
        try {
            scheduleService.generateTimetable(classId);
            return ResponseHelper.createResponse(HttpStatus.OK, "student assigned successfully.", true, null);
        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), false, null);
        }
    }

    @PostMapping("/create-room")
    public ResponseEntity<Object> createRoom(@RequestBody Room body) {
        try {
            scheduleService.createRoom(body);
            return ResponseHelper.createResponse(HttpStatus.OK, "room create successfully.", true, null);
        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), false, null);
        }
    }

    @GetMapping("/get-all-rooms")
    public ResponseEntity<Object> getAllRooms() {
        try {
            List<Room> rooms = scheduleService.getAllRooms();
            return ResponseHelper.createResponse(HttpStatus.OK, "data retrieved successfully.", rooms, null);
        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), false, null);
        }
    }
}
