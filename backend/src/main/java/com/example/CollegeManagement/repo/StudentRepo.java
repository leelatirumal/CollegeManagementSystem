package com.example.CollegeManagement.repo;

import com.example.CollegeManagement.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudentRepo extends JpaRepository<Student,Long> {
    Optional<Student> findByStudentId(String userId);
}
