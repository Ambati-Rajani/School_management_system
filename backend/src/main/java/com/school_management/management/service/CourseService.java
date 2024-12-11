package com.school_management.management.service;

import com.school_management.management.model.Course;
import com.school_management.management.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    public Course createCourse(Course course) {
        Course newCourse = new Course();
        newCourse.setCourseName(course.getCourseName());
        newCourse.setDescription(course.getDescription());
        newCourse.setPrerequisites(course.getPrerequisites());
        newCourse.setSchedule(course.getSchedule());
        return courseRepository.save(newCourse);
    }

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public Course updateCourse(String id, Course updatedCourse) {
        return courseRepository.findById(id).map(course -> {
            course.setCourseName(updatedCourse.getCourseName());
            course.setDescription(updatedCourse.getDescription());
            course.setPrerequisites(updatedCourse.getPrerequisites());
            course.setSchedule(updatedCourse.getSchedule());
            return courseRepository.save(course);
        }).orElseThrow(() -> new RuntimeException("Course not found!"));
    }

    public void deleteCourse(String id) {
        courseRepository.deleteById(id);
    }

}
