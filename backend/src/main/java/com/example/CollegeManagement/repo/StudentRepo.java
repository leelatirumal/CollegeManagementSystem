package com.example.CollegeManagement.repo;

import com.example.CollegeManagement.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepo extends JpaRepository<Student,Long> {
}
