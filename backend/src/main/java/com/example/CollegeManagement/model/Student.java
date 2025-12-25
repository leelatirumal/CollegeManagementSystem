package com.example.CollegeManagement.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(unique = true)
    private String studentId;

    private String firstName;

    private String middleName;

    private String lastName;

    private String department;

    private Date dob;

    private String location;

    private String address;

    private Long mobileNumber;

    @OneToOne
    @JoinColumn(name = "userId",unique = true)
    private User user;

}
