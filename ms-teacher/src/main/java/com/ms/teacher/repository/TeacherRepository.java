package com.ms.teacher.repository;

import com.ms.teacher.entities.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher, Long> {

    Teacher findByDocument(String document);
}
