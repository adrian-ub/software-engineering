package com.soft.msattendance.service.interfaces;

import com.soft.msattendance.entities.Attendance;

import java.time.LocalDate;
import java.util.List;

public interface IAttendanceService {

    public List<Attendance> getAttendanceByDate(LocalDate date);

    public Attendance updateOrCreateAttendance(Attendance attendance);

    public List<Attendance> getAttendanceAll();

    public Attendance findByStudentAndDate(Long idStudent,LocalDate date);
}
