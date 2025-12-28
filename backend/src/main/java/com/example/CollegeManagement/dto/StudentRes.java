package com.example.CollegeManagement.dto;

import lombok.Builder;
import lombok.Data;

import java.util.Date;

@Data
@Builder
public class StudentRes {

    private String studentId;

    private String firstName;

    private String middleName;

    private String lastName;

    private String department;

    private Date dob;

    private String location;

    private String address;

    private Long mobileNumber;

}
