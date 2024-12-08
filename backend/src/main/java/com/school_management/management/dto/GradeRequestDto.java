package com.school_management.management.dto;

public class GradeRequestDto {

    private String courseId;
    private String GradeValue;
    private String studentId;
    private String teacherId;

    public String getCourseId() {
        return courseId;
    }

    public void setCourseId(String courseId) {
        this.courseId = courseId;
    }

    public String getGradeValue() {
        return GradeValue;
    }

    public void setGradeValue(String gradeValue) {
        GradeValue = gradeValue;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(String teacherId) {
        this.teacherId = teacherId;
    }
}
