package com.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.springboot.model.User1;
import com.springboot.repository.RegistrationRepository;

@Service
public class RegistrationService {
@Autowired 
private RegistrationRepository repo;

	public User1 saveUser(User1 user) {
		return repo.save(user);
	}
	
	public User1 fetchUser1ByEmailId(String email) {
		return repo.findByEmailId(email);
	}
	
	public User1 fetchUser1ByEmailIdAndPassword(String email,String password) {
		return repo.findByEmailIdAndPassword(email,password);
	}
}
