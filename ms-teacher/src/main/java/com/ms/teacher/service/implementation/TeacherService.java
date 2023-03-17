package com.ms.teacher.service.implementation;

import com.ms.teacher.entities.Teacher;
import com.ms.teacher.repository.TeacherRepository;
import com.ms.teacher.service.interfaces.ITeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherService implements ITeacherService {

    @Autowired
    private TeacherRepository teacherRepository;

    @Override
    public Teacher saveTeacher(Teacher teacher) {
        return teacherRepository.save(teacher);
    }

    @Override
    public Teacher updateTeacher(Teacher teacher) {
        return teacherRepository.save(teacher);
    }

    @Override
    public List<Teacher> getAll() {
        return teacherRepository.findAll();
    }

    @Override
    public Teacher getOne(long id) {
        return teacherRepository.findById(id).orElse(null);
    }

    @Override
    public Teacher getOneByDocument(String document) {
        return teacherRepository.findByDocument(document);
    }

    @Override
    public int deleteOne(Teacher teacher) {
        try{
            teacherRepository.delete(teacher);
            return 1;
        }catch (Exception e){
            return 0;
        }
    }
}
