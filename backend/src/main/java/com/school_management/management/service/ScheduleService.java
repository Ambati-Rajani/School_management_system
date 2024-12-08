package com.school_management.management.service;

import com.school_management.management.model.*;
import com.school_management.management.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class ScheduleService {

    @Autowired
    private TeacherRepository teacherRepository;
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private RoomRepository roomRepository;
    @Autowired
    private ScheduleRepository scheduleRepository;
    @Autowired
    private SClassRepository classRepository;

    public SClass createClass(SClass className){
        return classRepository.save(className);
    }

    public List<SClass> getAllClasses(){
        return classRepository.findAll();
    }

    public SClass assignTeacherToClass(String classId, String teacherId) {
        SClass classDoc = classRepository.findById(classId).orElseThrow(() -> new RuntimeException("Class not found"));
        Teacher teacher = teacherRepository.findByEnrollmentNumber(teacherId).orElseThrow(() -> new RuntimeException("Teacher not found"));
        classDoc.getTeachers().add(teacher);
        teacher.setAllocatedClass(classDoc.getSclassId());
        teacherRepository.save(teacher);
        return classRepository.save(classDoc);
    }

    public void assignStudentToClass(String classId, String studentId) {
        SClass classDoc = classRepository.findById(classId).orElseThrow();
        Student student = studentRepository.findByEnrollmentNumber(studentId).orElseThrow();
        classDoc.getStudents().add(student);
        student.setS_class(classDoc.getName());
        studentRepository.save(student);
        classRepository.save(classDoc);
    }

    public void generateTimetable(String classId) {
        // Fetch the class document
        SClass classDoc = classRepository.findById(classId).orElseThrow(() ->
                new RuntimeException("Class not found for ID: " + classId)
        );

        // Fetch teachers, students, and rooms based on references
        List<Teacher> teachers = teacherRepository.findAllByEnrollmentNumber(
                classDoc.getTeachers().stream().map(Teacher::getEnrollmentNumber).toList()
        );

        List<Student> students = studentRepository.findAllByEnrollmentNumber(
                classDoc.getStudents().stream().map(Student::getEnrollmentNumber).toList()
        );

        List<Room> rooms = roomRepository.findAll();

        if (teachers.isEmpty() || students.isEmpty() || rooms.isEmpty()) {
            throw new RuntimeException("Insufficient data to generate timetable");
        }

        // Initialize a time slot rotation system
        String[] timeSlots = { "09:00-10:00", "10:15-11:15", "11:30-12:30", "13:30-14:30", "14:45-15:45" };
        int timeSlotIndex = 0;

        // Iterate over teachers and rooms to create schedules
        for (Teacher teacher : teachers) {
            for (Room room : rooms) {
                if (timeSlotIndex >= timeSlots.length) {
                    timeSlotIndex = 0; // Reset time slots when exhausted
                }

                // Create a schedule for the current teacher, room, and class
                Schedule schedule = new Schedule();
                schedule.setClassId(classId);
                schedule.setTeacherId(teacher);
                schedule.setDate(new Date().toString()); // Set appropriate date logic here
                schedule.setTimeSlot(timeSlots[timeSlotIndex++]); // Rotate through time slots
                schedule.setRoomNumber(room.getRoomNumber());

                // Save the schedule
                scheduleRepository.save(schedule);
            }
        }
    }

    public Room createRoom(Room room){
        return roomRepository.save(room);
    }

    public List<Room> getAllRooms(){
        return roomRepository.findAll();
    }

    public SClass getClassById(String classId){
        return classRepository.findBysclassId(classId);
    }

    public List<SClass> getAllClassesByTeacherEnrollment(String enrollment){
        Teacher teacher = teacherRepository.findByEnrollmentNumber(enrollment).orElseThrow(() -> new RuntimeException("Teacher not found"));
        List<SClass> classes =  classRepository.findByTeachersContaining(teacher);
        return classes;
    }

}
