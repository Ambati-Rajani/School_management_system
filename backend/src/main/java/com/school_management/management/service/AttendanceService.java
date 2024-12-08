package com.school_management.management.service;


import com.school_management.management.dto.AttendanceDTO;
import com.school_management.management.model.Attendance;
import com.school_management.management.model.SClass;
import com.school_management.management.model.Student;
import com.school_management.management.repository.AttendanceRepository;
import com.school_management.management.repository.SClassRepository;
import com.school_management.management.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AttendanceService {

    @Autowired
    private AttendanceRepository attendanceRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private SClassRepository classRepository;

    @Autowired
    private SClassRepository sClassRepository;

    public List<Attendance> markAttendance(List<AttendanceDTO> attendanceList){
        List<Attendance> attendances = attendanceList.stream().map(dto -> {
            Attendance attendance = new Attendance();
            attendance.setStudent(studentRepository.findByEnrollmentNumber(dto.getStudentId()).orElseThrow(() -> new RuntimeException("Student not found")));
            attendance.setClassId(classRepository.findById(dto.getClassId()).orElseThrow(() -> new RuntimeException("Class not found")));
            attendance.setStatus(dto.getStatus());
            attendance.setComments(dto.getComments());
            attendance.setDate(dto.getDate());
            return attendance;
        }).collect(Collectors.toList());
        return attendanceRepository.saveAll(attendances);

    }

    public List<Attendance> getAttendanceByClassId(String classId){
        SClass sclass = sClassRepository.findById(classId).orElseThrow(() -> new RuntimeException("sclass not found"));
        return attendanceRepository.findByClassId(sclass);
    }

    public List<Attendance> getAttendanceByStudentId(String erpNo){
        Student student = studentRepository.findByEnrollmentNumber(erpNo).orElseThrow(() -> new RuntimeException("student not found"));
        List<Attendance> attendance = attendanceRepository.findByStudent(student);
        return attendance;
    }
}
