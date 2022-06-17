package com.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;



import com.springboot.model.User1;




public interface RegistrationRepository extends JpaRepository<User1,Integer> {

	public User1 findByEmailId(String email);

	public User1 findByEmailIdAndPassword(String email, String password);

}
