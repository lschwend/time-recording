package com.github.lschwend.timerecording.timerecording.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class TimeRecordDTO {
    private String startTime;
    private String endTime;
}
