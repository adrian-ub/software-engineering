package com.soft.msattendance.service.interfaces;

import com.soft.msattendance.entities.Student;

public interface IStudentService {

    public Student getStudentById(Long idStudent);

    public Student getStudentByDocument(String document);

}
