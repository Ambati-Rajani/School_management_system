package com.school_management.management.controller;


import com.school_management.management.dto.LoginRequestDto;
import com.school_management.management.dto.RegisterRequestDto;
import com.school_management.management.helpers.CommonHelpers;
import com.school_management.management.helpers.ResponseHelper;
import com.school_management.management.model.Student;
import com.school_management.management.model.Teacher;
import com.school_management.management.model.User;
import com.school_management.management.repository.StudentRepository;
import com.school_management.management.repository.TeacherRepository;
import com.school_management.management.repository.UserRepository;
import com.school_management.management.service.AuthService;
import com.school_management.management.util.JwtUtil;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private TeacherRepository teacherRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthService authService;

    @GetMapping("/health-check")
    public ResponseEntity<String> healthCheck() {
        return ResponseEntity.ok("Ok");
    }

    @PostMapping("/register")
    public ResponseEntity<Object> register(@Valid @RequestBody RegisterRequestDto userRequestDto){
        try{
            User registerUser = authService.singUp(userRequestDto);
            userRepository.save(registerUser);
            return ResponseHelper.createResponse(HttpStatus.OK, "Successfully registered", true,null);
        }catch (Exception e){
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR,e.getMessage(),false,null);
        }
    }

    @PostMapping("/admin")
    public ResponseEntity<Object> adminLogin(@Valid @RequestBody LoginRequestDto body) {
        try {
            Optional<User> user = userRepository.findByUsername(body.getUsername());

            if (user.isEmpty() || !new BCryptPasswordEncoder().matches(body.getPassword(), user.get().getPasswordHash())) {
                return ResponseHelper.createErrorResponse(HttpStatus.UNAUTHORIZED, "Invalid Credentials",false,null);
            }
            String token = jwtUtil.generateToken(user.get().getUsername(), user.get().getRole(),user.get().getEmail(),user.get().getUserId());
            return ResponseHelper.createResponse(HttpStatus.OK, "Login successful", token,null);

        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(),false,null);
        }
    }

    @PostMapping("/teacher")
    public ResponseEntity<?> teacherLogin(@Valid @RequestBody LoginRequestDto body) {
        try {
            Optional<Teacher> user = teacherRepository.findByEnrollmentNumber(body.getUsername());
            CommonHelpers commonHelpers = new CommonHelpers();
            String password = commonHelpers.convertDate(user.get().getDateOfBirth().toString());
            System.out.println(password);
            if ( !password.equals(body.getPassword())) {
                return ResponseHelper.createErrorResponse(HttpStatus.UNAUTHORIZED, "Invalid Credentials",false,null);
            }
            String token = jwtUtil.generateToken(user.get().getName(), "TEACHER",user.get().getEmail(),user.get().getEnrollmentNumber());
            return ResponseHelper.createResponse(HttpStatus.OK, "Login successful", token,null);

        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(),false,null);
        }
    }

    @PostMapping("/student")
    public ResponseEntity<?> studentLogin(@Valid @RequestBody LoginRequestDto body) {
        try {
            Optional<Student> user = studentRepository.findByEnrollmentNumber(body.getUsername());
            System.out.println(user.get().getDateOfBirth());
            CommonHelpers commonHelpers = new CommonHelpers();
            String password = commonHelpers.convertDate(user.get().getDateOfBirth().toString());
            System.out.println(password);
            if ( !password.equals(body.getPassword())) {
                return ResponseHelper.createErrorResponse(HttpStatus.UNAUTHORIZED, "Invalid Credentials",false,null);
            }
            String token = jwtUtil.generateToken(user.get().getName(), "STUDENT",user.get().getEmail(),user.get().getEnrollmentNumber());
            return ResponseHelper.createResponse(HttpStatus.OK, "Login successful", token,null);

        } catch (Exception e) {
            return ResponseHelper.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(),false,null);
        }
    }

}
