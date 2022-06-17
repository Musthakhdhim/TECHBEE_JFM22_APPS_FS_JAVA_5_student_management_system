package com.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.model.Fee;

public interface FeeRepository extends JpaRepository<Fee, Long> {

}
