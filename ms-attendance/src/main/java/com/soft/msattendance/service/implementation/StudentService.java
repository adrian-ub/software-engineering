package com.soft.msattendance.service.implementation;

import com.soft.msattendance.entities.Student;
import com.soft.msattendance.repository.StudentRepository;
import com.soft.msattendance.service.interfaces.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService implements IStudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student getStudentById(Long idStudent) {
        return studentRepository.findById(idStudent).orElse(null);
    }

    @Override
    public Student getStudentByDocument(String document) {
        return studentRepository.findByDocument(document);
    }
}
