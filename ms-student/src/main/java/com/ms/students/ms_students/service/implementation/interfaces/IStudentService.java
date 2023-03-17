package com.ms.students.ms_students.service.implementation.interfaces;

import com.ms.students.ms_students.entities.Student;

import java.util.List;

public interface IStudentService {
    public Student saveStudent( Student student);
    public Student updateStudent(Student student);
    public List<Student> getAll();
    public Student getOne(long id);
    public Student getOneByDocument(String document);

    public int deleteOne(Student student);
}
