package com.ms.students.ms_students.dto;

import com.ms.students.ms_students.entities.enums.STATUS_ATTENDACE;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseStudentAttendance {

    private String document;

    private String firstName;

    private String secondName;

    private String lastName;

    private String lastNameTwo;

    private String photoUrl;

    private STATUS_ATTENDACE status;
}
