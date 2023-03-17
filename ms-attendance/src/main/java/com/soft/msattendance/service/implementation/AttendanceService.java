package com.soft.msattendance.service.implementation;

import com.soft.msattendance.entities.Attendance;
import com.soft.msattendance.repository.AttendanceRepository;
import com.soft.msattendance.service.interfaces.IAttendanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class AttendanceService implements IAttendanceService {

    @Autowired
    private AttendanceRepository attendanceRepository;

    @Override
    public List<Attendance> getAttendanceByDate(LocalDate date) {
        return attendanceRepository.findByDateAttendance(date);
    }

    @Override
    public Attendance updateOrCreateAttendance(Attendance attendance) {
        return attendanceRepository.save(attendance);
    }

    @Override
    public List<Attendance> getAttendanceAll() {
        return attendanceRepository.findAll();
    }

    @Override
    public Attendance findByStudentAndDate(Long idStudent, LocalDate date) {
        return attendanceRepository.findByStudentAndDateAttendance(idStudent,date);
    }
}
