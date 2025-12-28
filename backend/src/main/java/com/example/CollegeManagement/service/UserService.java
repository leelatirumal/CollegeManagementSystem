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

        User user=User.builder().
                userId(registerReq.getUserId())
                .password(registerReq.getPassword())
                .role(registerReq.getRole())
                .build();
        userRepo.save(user);
        return ResponseEntity.status(201).body(user);
    }

    public ResponseEntity<?> login(LoginReq loginReq) {

        Optional<User> user=userRepo.findByUserId(loginReq.getUserId());
        if(user.isEmpty()){
            return  ResponseEntity.status(404).body("NO User Found");
        }

        if(!user.get().getPassword().equals(loginReq.getPassword())){
            return ResponseEntity.status(401).body("Wrong Password");
        }

        Role role=user.get().getRole();
        if(role==Role.STUDENT){
           Optional<Student> student=studentRepo.findByStudentId(user.get().getUserId());
            if(student.isPresent()){
                StudentRes studentRes= StudentRes.builder()
                        .studentId(student.get().getStudentId())
                        .dob(student.get().getDob())
                        .firstName(student.get().getFirstName())
                        .middleName(student.get().getMiddleName())
                        .lastName(student.get().getLastName())
                        .department(student.get().getDepartment())
                        .location(student.get().getLocation())
                        .address(student.get().getAddress())
                        .mobileNumber(student.get().getMobileNumber())
                        .build();

            }
            else{
                return ResponseEntity.status(203).body("Not yet approved by admin");
            }

        }

        return ResponseEntity.status(500).body("Response");
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
