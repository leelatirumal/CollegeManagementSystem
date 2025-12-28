package com.example.CollegeManagement.service;

import com.example.CollegeManagement.dto.LoginReq;
import com.example.CollegeManagement.dto.RegisterReq;
import com.example.CollegeManagement.dto.StudentRes;
import com.example.CollegeManagement.model.Role;
import com.example.CollegeManagement.model.Student;
import com.example.CollegeManagement.model.User;
import com.example.CollegeManagement.repo.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.example.CollegeManagement.repo.UserRepo;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;
    @Autowired
    private StudentRepo studentRepo;

    public ResponseEntity<?> register(RegisterReq registerReq) {

        User user = User.builder().
                userId(registerReq.getUserId())
                .password(registerReq.getPassword())
                .role(registerReq.getRole())
                .build();
        userRepo.save(user);
        return ResponseEntity.status(201).body(user);
    }

    public ResponseEntity<?> login(LoginReq loginReq) {
        Optional<User> user = userRepo.findByUserId(loginReq.getUserId());

        if (user.get() == null) {
            return ResponseEntity.status(404).body("");
        }

        if(!user.get().getPassword().equals(loginReq.getPassword())) {
            return ResponseEntity.status(409).body("Wrong Password");
        }
        Role role = user.get().getRole();

        if(role==Role.STUDENT){
            Optional<Student> student=studentRepo.findByStudentId(user.get().getUserId());
            if(student.isPresent()){
                Student s=student.get();
                StudentRes studentRes = StudentRes.builder()
                        .studentId(s.getStudentId())
                        .dob(s.getDob())
                        .address(s.getAddress())
                        .location(s.getLocation())
                        .middleName(s.getMiddleName())
                        .department(s.getDepartment())
                        .mobileNumber(s.getMobileNumber())
                        .lastName(s.getLastName())
                        .firstName(s.getFirstName())
                        .build();
                return ResponseEntity.status(202).body(studentRes);
            }
            else{
                return ResponseEntity.status(203).body("Not Approved By Admin ....");

            }
        }
//        else if (role==Role.TEACHER) {
//
//        }
//        else{
//
//        }

        return ResponseEntity.status(500).body("Internal Error ....");
    }

}
