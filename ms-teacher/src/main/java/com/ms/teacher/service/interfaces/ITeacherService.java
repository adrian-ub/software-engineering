package com.ms.teacher.service.interfaces;

import com.ms.teacher.entities.Teacher;

import java.util.List;

public interface ITeacherService {
    public Teacher saveTeacher(Teacher teacher);
    public Teacher updateTeacher(Teacher teacher);
    public List<Teacher> getAll();
    public Teacher getOne(long id);
    public Teacher getOneByDocument(String document);
    public int deleteOne(Teacher teacher);
}
