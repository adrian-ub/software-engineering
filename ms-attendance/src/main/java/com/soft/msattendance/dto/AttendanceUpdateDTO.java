package com.soft.msattendance.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AttendanceUpdateDTO {

    @NotNull
    private LocalDate dateAttendance;

    @NotNull
    private Integer idTeacher;
}
