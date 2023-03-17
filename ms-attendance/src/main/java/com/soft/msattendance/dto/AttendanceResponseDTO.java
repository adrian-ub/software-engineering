package com.soft.msattendance.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AttendanceResponseDTO<T> {

    private boolean success;
    private T attendance;
}
