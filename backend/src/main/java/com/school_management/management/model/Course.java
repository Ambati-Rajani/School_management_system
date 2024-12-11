package com.school_management.management.model;

import com.school_management.management.dto.CourseScheduleDto;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "course")
public class Course {

    @Id
    private String courseId;
    private String courseName;
    private String description;
    private String[] prerequisites;
    private CourseScheduleDto schedule;

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String[] getPrerequisites() {
        return prerequisites;
    }

    public void setPrerequisites(String[] prerequisites) {
        this.prerequisites = prerequisites;
    }

    public CourseScheduleDto getSchedule() {
        return schedule;
    }

    public void setSchedule(CourseScheduleDto schedule) {
        this.schedule = schedule;
    }

    public String getCourseId() {
        return courseId;
    }

    public void setCourseId(String courseId) {
        this.courseId = courseId;
    }
}
