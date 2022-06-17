package com.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.model.User1;
import com.springboot.service.RegistrationService;

@RestController
public class RegistrationController {
	
	@Autowired
	private RegistrationService service;
//	@Autowired
//	private BCryptPasswordEncoder passwordEncoder;
	
	
	@PostMapping("/registeruser")
	@CrossOrigin(origins = "http://localhost:4200")
	public User1 registerUser(@RequestBody User1 user) throws Exception {
		String tempEmailId=user.getEmailId();
		if(tempEmailId!=null && !"".equals(tempEmailId)) {
			User1 userObj=service.fetchUser1ByEmailId(tempEmailId);
			if(userObj !=null) {
				throw new Exception("user with "+tempEmailId+" is already present" );
			}
		}
		User1 userObj=null;
		String pwd=user.getPassword();
//	     String encryptPwd=passwordEncoder.encode(pwd);
//		user.setPassword(encryptPwd);
		userObj=service.saveUser(user);
		return userObj;
	}
	@PostMapping("/login")
	@CrossOrigin(origins = "http://localhost:4200")
	public User1 loginUser1(@RequestBody User1 user) throws Exception {
		String tempEmailId=user.getEmailId();
		String tempPass =user.getPassword();
//		tempPass=passwordEncoder.encode(tempPass);
		User1 userObj=null;
		if(tempEmailId !=null && tempPass!=null) {
			userObj=service.fetchUser1ByEmailIdAndPassword(tempEmailId, tempPass);
			
		}
		if(userObj ==null) {
			throw new Exception("user invalid");
		}
		return userObj;
	}

}
