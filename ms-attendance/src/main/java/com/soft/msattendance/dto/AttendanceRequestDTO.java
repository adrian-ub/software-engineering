package com.soft.msattendance.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AttendanceRequestDTO {

    private Long id;

    @NotNull
    private Long student;

    @NotNull
    private int check;

    @NotNull
    private LocalDate dateAttendance;

    @NotNull
    private Integer idTeacher;
}
