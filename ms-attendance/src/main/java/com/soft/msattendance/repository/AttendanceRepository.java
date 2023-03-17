package com.soft.msattendance.repository;

import com.soft.msattendance.entities.Attendance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface AttendanceRepository extends JpaRepository<Attendance,Long> {

    public List<Attendance> findByDateAttendance(LocalDate dateAttendance);

    @Query("SELECT a FROM Attendance a WHERE a.student.id=?1 and a.dateAttendance=?2")
    public Attendance findByStudentAndDateAttendance(Long idStudent, LocalDate date);
}
