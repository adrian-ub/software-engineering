package com.ms.teacher.mapper;

import com.ms.teacher.dto.RequestTeacherDTO;
import com.ms.teacher.entities.Teacher;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class TeacherMapper {
    @Autowired
    private ModelMapper modelMapper;

    public Teacher TeacherDtoToTeacher(RequestTeacherDTO teacherDTO){
        return  modelMapper.map(teacherDTO,Teacher.class);
    }

    public RequestTeacherDTO TeacherToTeacherDto(Teacher teacher){
        return  modelMapper.map(teacher,RequestTeacherDTO.class);
    }
}
