package com.school_management.management.dto;

public class AssignStudentRequest {

    private String classId; // The ID of the class to which the teacher is being assigned
    private String studentId; // The ID of the teacher being assigned

    public String getClassId() {
        return classId;
    }

    public void setClassId(String classId) {
        this.classId = classId;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }
}
