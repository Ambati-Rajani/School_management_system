package com.school_management.management.dto;

public class AssignTeacherRequest {

    private String classId; // The ID of the class to which the teacher is being assigned
    private String teacherId; // The ID of the teacher being assigned

    // Default constructor (needed for serialization/deserialization)
    public AssignTeacherRequest() {}

    // Parameterized constructor
    public AssignTeacherRequest(String classId, String teacherId) {
        this.classId = classId;
        this.teacherId = teacherId;
    }

    // Getters and Setters
    public String getClassId() {
        return classId;
    }

    public void setClassId(String classId) {
        this.classId = classId;
    }

    public String getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(String teacherId) {
        this.teacherId = teacherId;
    }

    @Override
    public String toString() {
        return "AssignTeacherRequest{" +
                "classId='" + classId + '\'' +
                ", teacherId='" + teacherId + '\'' +
                '}';
    }
}
