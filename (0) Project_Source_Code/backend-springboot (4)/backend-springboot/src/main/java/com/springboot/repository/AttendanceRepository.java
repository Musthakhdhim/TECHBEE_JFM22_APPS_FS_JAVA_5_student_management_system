package com.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.model.Attendance;

public interface AttendanceRepository extends JpaRepository<Attendance, Long> {

}
