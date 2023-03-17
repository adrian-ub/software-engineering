package com.soft.msattendance.entities;

import com.soft.msattendance.entities.enums.STATUS_ATTENDACE;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Attendance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false, cascade = CascadeType.ALL)
    private Student student;

    @Column
    private STATUS_ATTENDACE  status;

    @Column
    private LocalDate dateAttendance;

    @Column
    private Integer idTeacher;

    @Column
    private LocalDateTime created_at;

    @Column
    private LocalDateTime updated_at;

    @PrePersist
    protected void prePersist(){
       this.created_at= LocalDateTime.now();
       this.updated_at=LocalDateTime.now();
    }

    @PreUpdate
    protected void preUpdate(){
        this.updated_at=LocalDateTime.now();
    }
}
