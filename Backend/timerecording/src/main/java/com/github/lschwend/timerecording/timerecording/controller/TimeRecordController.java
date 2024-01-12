package com.github.lschwend.timerecording.timerecording.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.github.lschwend.timerecording.timerecording.dto.TimeRecordDTO;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("time")
public class TimeRecordController {
    
    @PostMapping("/saveRecord")
    public void postMethodName(@RequestBody TimeRecordDTO entity) {
        System.out.println("test");
        
    }
    
}
