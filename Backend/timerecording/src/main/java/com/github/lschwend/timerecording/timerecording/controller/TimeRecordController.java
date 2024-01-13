package com.github.lschwend.timerecording.timerecording.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.github.lschwend.timerecording.timerecording.dto.TimeRecordDTO;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("time")
public class TimeRecordController {
    
    @PostMapping("/api/record-time")
    public String recordTime(@RequestBody TimeRecordDTO timeRecord) {
        // Implement your logic to handle the received time record
        System.out.println("Received Time Record: " + timeRecord);
        return "Time recorded successfully";
    }
    
}
