package com.ms.students.ms_students.service.implementation.interfaces;

import com.ms.students.ms_students.entities.Attendance;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public interface IAttendanceService {
    public Attendance findByStudentAndDate(Long idStudent, LocalDate date);
}
