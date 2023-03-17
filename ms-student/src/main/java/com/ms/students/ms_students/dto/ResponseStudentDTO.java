package com.ms.students.ms_students.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseStudentDTO<T> {
    private boolean success;
    private T student;
}
