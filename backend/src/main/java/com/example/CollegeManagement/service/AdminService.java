package com.example.CollegeManagement.service;


import com.example.CollegeManagement.model.Student;
import com.example.CollegeManagement.model.User;
import com.example.CollegeManagement.repo.StudentRepo;
import com.example.CollegeManagement.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class AdminService {


    @Autowired
    private StudentRepo studentRepo;
    @Autowired
    private UserRepo userRepo;
    public ResponseEntity<?> addStudent(Student student,String id) {
        Optional<User> userOptional= userRepo.findByUserId(id);

        student.setStudentId(userOptional.get().getUserId());
        student.setUser(userOptional.get());
        studentRepo.save(student);

        return ResponseEntity.ok("added");
    }

    public ResponseEntity<?> getStudentsToAdd() {
        List<User> users= userRepo.findAll().stream().filter(user -> user.getStudent()==null).toList();
        return ResponseEntity.status(200).body(users);
    }

    public ResponseEntity<?> getAllStudents() {
        List<User> userList=userRepo.findAll();
        return ResponseEntity.ok(userList);
    }
}
