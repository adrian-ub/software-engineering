package com.soft.msattendance.controller;


import com.soft.msattendance.dto.AttendanceRequestDTO;
import com.soft.msattendance.dto.AttendanceResponseDTO;
import com.soft.msattendance.dto.AttendanceUpdateDTO;
import com.soft.msattendance.entities.Attendance;
import com.soft.msattendance.entities.Student;
import com.soft.msattendance.entities.enums.STATUS_ATTENDACE;
import com.soft.msattendance.service.implementation.AttendanceService;
import com.soft.msattendance.service.implementation.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/attendance")
public class AttendanceController {

    @Autowired
    private AttendanceService attendanceService;

    @Autowired
    private StudentService studentService;

    @GetMapping("/{date}")
    public AttendanceResponseDTO findByDate(@PathVariable LocalDate date){
        AttendanceResponseDTO attendanceResponse= new AttendanceResponseDTO();
        List<Attendance> attendanceList=attendanceService.getAttendanceByDate(date);
        attendanceResponse.setSuccess(true);
        attendanceResponse.setAttendance(attendanceList);
        return attendanceResponse;
    }

    @GetMapping("/{date}/{idStudent}")
    public AttendanceResponseDTO findByDateAndStudent(@PathVariable LocalDate date,@PathVariable Long idStudent){
        AttendanceResponseDTO attendanceResponse= new AttendanceResponseDTO();
        Attendance attendance=attendanceService.findByStudentAndDate(idStudent,date);
        attendanceResponse.setSuccess(attendance==null?false:true);
        attendanceResponse.setAttendance(attendance);
        return attendanceResponse;
    }

    @PostMapping("")
    public AttendanceResponseDTO saveAttendance(@RequestBody AttendanceRequestDTO attendanceDTO){
        AttendanceResponseDTO attendanceResponse= new AttendanceResponseDTO();
        Student student= studentService.getStudentById(attendanceDTO.getStudent());
        if(student!=null){
            Attendance attendanceStudent=attendanceService.findByStudentAndDate(attendanceDTO.getStudent(),attendanceDTO.getDateAttendance());
            if(attendanceStudent==null){
                Attendance attendance= new Attendance();
                attendance.setStatus(attendanceDTO.getCheck()==1? STATUS_ATTENDACE.ATTENDED:STATUS_ATTENDACE.NO_ATTENDED);
                attendance.setDateAttendance(attendanceDTO.getDateAttendance());
                attendance.setStudent(student);
                attendance.setIdTeacher(attendanceDTO.getIdTeacher());
                Attendance attendanceCreated =attendanceService.updateOrCreateAttendance(attendance);
                if(attendanceCreated!=null){
                    attendanceResponse.setSuccess(true);
                    attendanceResponse.setAttendance(attendanceCreated);
                    return attendanceResponse;
                }
                attendanceResponse.setSuccess(false);
                attendanceResponse.setAttendance("attendance no Created");
                return attendanceResponse;
            }
            attendanceResponse.setSuccess(false);
            attendanceResponse.setAttendance("student has attendance ");
           return attendanceResponse;
        }
        attendanceResponse.setSuccess(false);
        attendanceResponse.setAttendance("student not found");
        return attendanceResponse;

    }

    @GetMapping
    public AttendanceResponseDTO findAll(){
        AttendanceResponseDTO attendanceResponse= new AttendanceResponseDTO();
       List<Attendance> attendanceList= attendanceService.getAttendanceAll();
       attendanceResponse.setSuccess(true);
       attendanceResponse.setAttendance(attendanceList);
       return attendanceResponse;
    }

    @PostMapping("/{idStudent}")
    public AttendanceResponseDTO checkAttendance(@PathVariable Long idStudent  ,@RequestBody AttendanceUpdateDTO attendanceDTO){
        AttendanceResponseDTO attendanceResponse= new AttendanceResponseDTO();
        Student student= studentService.getStudentById(idStudent);
        if(student!=null){
            Attendance attendanceStudent=attendanceService.findByStudentAndDate(idStudent,attendanceDTO.getDateAttendance());
                Attendance attendance= new Attendance();
                attendance.setStatus(attendanceStudent==null? STATUS_ATTENDACE.ATTENDED:
                        attendanceStudent.getStatus().equals(STATUS_ATTENDACE.NO_ATTENDED)?
                        STATUS_ATTENDACE.ATTENDED:STATUS_ATTENDACE.NO_ATTENDED);
                attendance.setDateAttendance(attendanceDTO.getDateAttendance());
                attendance.setStudent(student);
                attendance.setIdTeacher(attendanceDTO.getIdTeacher());
                    if(attendanceStudent!=null){
                         attendance.setId(attendanceStudent.getId());
                         attendance.setCreated_at(attendanceStudent.getCreated_at());
                    }
                Attendance attendanceCreated =attendanceService.updateOrCreateAttendance(attendance);
                if(attendanceCreated!=null){
                    attendanceResponse.setSuccess(true);
                    attendanceResponse.setAttendance(attendanceCreated);
                    return attendanceResponse;
                }
                attendanceResponse.setSuccess(false);
                attendanceResponse.setAttendance("attendance no Created");
                return attendanceResponse;

        }
        attendanceResponse.setSuccess(false);
        attendanceResponse.setAttendance("student not found");
        return attendanceResponse;

    }

}
