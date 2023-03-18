package com.ms.teacher.consumer;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonToken;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.ms.teacher.TeacherApplication;
import com.ms.teacher.dto.RequestTeacherDTO;
import com.ms.teacher.entities.Teacher;
import com.ms.teacher.mapper.TeacherMapper;
import com.ms.teacher.service.implementation.TeacherService;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONObject;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
@Slf4j
public class Consumer {

    @Autowired
    private TeacherService teacherServiceImpl;

    @Autowired
    private TeacherMapper teacherMapper;

    @RabbitListener(queues = {"${project.modal.queue.name}"} )
    public  void receiveMessage(String teacherRequest) {
        try {
            GsonBuilder gsonBuilder= new GsonBuilder();
            gsonBuilder.registerTypeAdapter(LocalDate.class,new LocalDateDeserializer());
            JSONObject payloadObject= new JSONObject(teacherRequest);
            JSONObject payloadObjectDate= new JSONObject(teacherRequest);
            Gson gson= gsonBuilder.create();
            log.info("Message Received==>" + teacherRequest);
            RequestTeacherDTO teacher= gson.fromJson(payloadObject.get("data").toString(),RequestTeacherDTO.class);
            log.info("TECAHER==>"+teacher);
            Teacher teacherTosave=teacherMapper.TeacherDtoToTeacher(teacher);
            teacherServiceImpl.saveTeacher(teacherTosave);


        } catch (Exception ex) {
            log.error("ERRORR====>"+ex.getMessage());
        }
    }

}
