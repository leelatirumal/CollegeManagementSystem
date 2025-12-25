package com.example.CollegeManagement.testcases;

import com.intuit.karate.junit5.Karate;

public class TestRunner {




    @Karate.Test
    Karate testUsers() {
        return Karate.run("Register").relativeTo(getClass());
    }


}
