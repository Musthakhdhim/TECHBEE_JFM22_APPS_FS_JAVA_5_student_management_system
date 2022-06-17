package com.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.springboot.model.Mark;

public interface MarkRepository extends JpaRepository<Mark, Long> {

//	public Mark findByRollNo(int rollNo);

}
