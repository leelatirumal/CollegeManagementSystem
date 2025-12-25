package com.example.CollegeManagement.controller;


import com.example.CollegeManagement.dto.LoginReq;
import com.example.CollegeManagement.dto.RegisterReq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.CollegeManagement.service.UserService;

@RestController
@RequestMapping("api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterReq registerReq){
        return userService.register(registerReq);
    }

    @GetMapping("/demo")
    public String demo(){
        return "hjfla";
    }


//    @PostMapping("/login")
//    public ResponseEntity<?> login(@RequestBody LoginReq loginReq){
//        return userService.login(loginReq);
//    }
}
