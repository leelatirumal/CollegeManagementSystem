package com.example.CollegeManagement.controller;


import com.example.CollegeManagement.model.Student;
import com.example.CollegeManagement.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping("/addStudent/{userid}")
    public ResponseEntity<?> addStudent(@RequestBody Student student, @PathVariable String userid){
        return adminService.addStudent(student,userid);
    }


    @GetMapping("/getStudentsToAdd")
    public ResponseEntity<?> getStudentsToAdd(){
        return adminService.getStudentsToAdd();
    }


    @GetMapping("/getAllStudents")
    public ResponseEntity<?> getAllStudents(){
        return adminService.getAllStudents();
    }

}
