package com.example.CollegeManagement.dto;


import lombok.Data;
import com.example.CollegeManagement.model.Role;

@Data
public class RegisterReq {

    private String userId;

    private String password;

    private Role role;

}
