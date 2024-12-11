package com.school_management.management.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;
@Document(collection = "class")
public class SClass {

    @Id
    private String sclassId;
    private String name; // Class name like "Class 1", "LKG"
    @DBRef
    private List<Student> students = new ArrayList<>(); // List of student IDs
    @DBRef
    private List<Teacher> teachers = new ArrayList<>(); // List of teacher IDs
    @DBRef
    private List<String> schedule; // List of schedule IDs

    public String getSclassId() {
        return sclassId;
    }

    public void setSclassId(String sclassId) {
        sclassId = sclassId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Student> getStudents() {
        return students;
    }

    public void setStudents(List<Student> students) {
        this.students = students;
    }

    public List<Teacher> getTeachers() {
        return teachers;
    }

    public void setTeachers(List<Teacher> teacher) {
        this.teachers = teacher;
    }

    public List<String> getSchedule() {
        return schedule;
    }

    public void setSchedule(List<String> schedule) {
        this.schedule = schedule;
    }
}
