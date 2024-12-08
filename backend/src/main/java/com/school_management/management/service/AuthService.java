package com.school_management.management.service;

import com.school_management.management.dto.RegisterRequestDto;
import com.school_management.management.model.User;
import com.school_management.management.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    private final UserRepository userRepository;

    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User singUp(RegisterRequestDto dto){

        Optional<User> existingUser = userRepository.findByEmail(dto.getEmail());
        if(existingUser.isPresent()){
            throw new RuntimeException("Email is already in use");
        }

        Optional<User> existingUsername = userRepository.findByUsername(dto.getUsername());
        if(existingUsername.isPresent()){
            throw new RuntimeException("username is already in use");
        }

        User user = new User();
        user.setUsername(dto.getUsername());
        user.setPasswordHash(encodePassword(dto.getPassword()));
        user.setEmail(dto.getEmail());
        user.setRole(dto.getRole());

        return user;
    }

    public String encodePassword(String password){
        return new BCryptPasswordEncoder().encode(password);
    }

//    public User loginEntity(LoginRequestDto dto){
//        User user = new User();
//        user.setUsername(dto.getUsername());
////        user.setPasswordHash();
//    }

}
