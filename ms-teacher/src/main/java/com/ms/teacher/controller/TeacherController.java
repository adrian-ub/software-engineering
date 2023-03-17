package com.ms.teacher.controller;

import com.ms.teacher.dto.RequestTeacherDTO;
import com.ms.teacher.dto.ResponseListTeacherDTO;
import com.ms.teacher.dto.ResponseTeacherDTO;
import com.ms.teacher.entities.Teacher;
import com.ms.teacher.mapper.TeacherMapper;
import com.ms.teacher.service.implementation.TeacherService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/teacher")
public class TeacherController {

    @Autowired
    private TeacherService teacherServiceImpl;

    @Autowired
    private TeacherMapper teacherMapper;

    @GetMapping("")
    public ResponseListTeacherDTO getAll(){
        ResponseListTeacherDTO response=  new ResponseListTeacherDTO();
        List<Teacher> students =teacherServiceImpl.getAll();
        response.setTeachers(students);
        response.setSuccess(true);
        return  response;
    }

    @PostMapping("")
    public ResponseTeacherDTO saveTeacher(@Valid @RequestBody RequestTeacherDTO teacher){
        ResponseTeacherDTO response=  new ResponseTeacherDTO();
        try{
            Teacher teacherByDocument=teacherServiceImpl.getOneByDocument(teacher.getDocument());
            if(teacherByDocument==null){
                Teacher teacherCreated=teacherServiceImpl.saveTeacher(teacherMapper.TeacherDtoToTeacher(teacher));
                response.setSuccess(true);
                response.setTeacher(teacherCreated);
                return response;
            }
            response.setSuccess(false);
            response.setTeacher("Teacher already exist");
            return  response;


        }catch (Exception e){
            response.setSuccess(false);
            return null;
        }

    }

    @GetMapping("/{id}")
    public ResponseTeacherDTO getTeacher(@PathVariable long id){
        ResponseTeacherDTO response=  new ResponseTeacherDTO();
        Teacher student=teacherServiceImpl.getOne(id);
        if(student!=null){
            response.setSuccess(true);
            response.setTeacher(student);
            return response;
        }
        response.setTeacher("Teacher not found");
        response.setSuccess(false);
        return response;

    }

    @GetMapping("/document/{document}")
    public ResponseTeacherDTO getTeachertByDocument(@PathVariable String document){
        ResponseTeacherDTO response=  new ResponseTeacherDTO();
        Teacher teacher=teacherServiceImpl.getOneByDocument(document);
        if(teacher!=null){
            response.setSuccess(true);
            response.setTeacher(teacher);
            return response;
        }
        response.setSuccess(false);
        response.setTeacher("Teacher no exist");
        return null;
    }

    @PutMapping("/{id}")
    public ResponseTeacherDTO updateTeacher(@PathVariable long id,@Valid @RequestBody RequestTeacherDTO teacher){
        ResponseTeacherDTO response=  new ResponseTeacherDTO();
        Teacher studentFind= teacherServiceImpl.getOne(id);
        if(studentFind!=null){
            Teacher studentFindDocument= teacherServiceImpl.getOneByDocument(teacher.getDocument());
            if(studentFindDocument==null || studentFindDocument.getId()==id){
                teacher.setId(id);
                Teacher studentUpdate=teacherServiceImpl.updateTeacher(teacherMapper.TeacherDtoToTeacher(teacher));
                response.setTeacher(studentUpdate);
                response.setSuccess(true);
                return  response ;
            }
            response.setSuccess(false);
            response.setTeacher("Teacher document already exist");
            return response;
        }
        response.setSuccess(false);
        response.setTeacher("Teacher no exist");
        return response;
    }

    @DeleteMapping("/{id}")
    public ResponseTeacherDTO deleteTeacher(@PathVariable long id){
        ResponseTeacherDTO response=  new ResponseTeacherDTO();
        Teacher studentFind= teacherServiceImpl.getOne(id);
        if(studentFind!= null){
            int deleted=teacherServiceImpl.deleteOne(studentFind);
            if(deleted==1){
                response.setSuccess(true);
                response.setTeacher("Teacher deleted");
                return response;
            }
            response.setSuccess(false);
            response.setTeacher("Teacher no deleted");
            return response;
        }
        response.setSuccess(false);
        response.setTeacher("Teacher no exist");
        return response;
    }
}
