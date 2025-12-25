package com.example.CollegeManagement.service;

import com.example.CollegeManagement.dto.LoginReq;
import com.example.CollegeManagement.dto.RegisterReq;
import com.example.CollegeManagement.model.Role;
import com.example.CollegeManagement.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.example.CollegeManagement.repo.UserRepo;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    public ResponseEntity<?> register(RegisterReq registerReq) {

        User user=User.builder().
                userId(registerReq.getUserId())
                .password(registerReq.getPassword())
                .role(registerReq.getRole())
                .build();
        userRepo.save(user);
        return ResponseEntity.status(201).body(user);
    }

//    public ResponseEntity<?> login(LoginReq loginReq) {
//
//        Optional<User> optionalUser=userRepo.findByUserid(loginReq.get());
//        if(optionalUser.get().getPassword().equals(loginReq.getPassword())){
//            Role role=optionalUser.get().getRole();
//
//        }
//        return null;
//    }
}
