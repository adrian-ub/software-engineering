package com.ms.students.ms_students.service.implementation;

import com.ms.students.ms_students.entities.Attendance;
import com.ms.students.ms_students.repository.AttendanceRepository;
import com.ms.students.ms_students.service.implementation.interfaces.IAttendanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class AttendanceServiceImpl implements IAttendanceService {
    @Autowired
    private AttendanceRepository attendanceRepository;

    @Override
    public Attendance findByStudentAndDate(Long idStudent, LocalDate date) {
        return attendanceRepository.findByStudentAndDateAttendance(idStudent,date);
    }
}
