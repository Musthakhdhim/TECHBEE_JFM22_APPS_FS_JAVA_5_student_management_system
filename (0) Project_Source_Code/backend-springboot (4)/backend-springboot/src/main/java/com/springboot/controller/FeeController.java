package com.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.model.Fee;

import com.springboot.repository.FeeRepository;

import com.springboot.service.ResourceNotFoundException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController//use to give web services
@RequestMapping("/api")
public class FeeController {
	 @Autowired //inject the object dependency implicitly
	    private FeeRepository feeRepository;

	    @GetMapping("/fee")
	    public List<Fee> getAllStudents(){
	        return this.feeRepository.findAll();
	    }

	    @GetMapping("/fee/{id}")
	    public ResponseEntity<Fee> getStudentById(@PathVariable Long id){
	        Fee fee = feeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Student with id '"+id+"' does not exist"));
	        return ResponseEntity.ok(fee);
	    }

	    @PostMapping("/fee")
	    public Fee createFee(@RequestBody Fee fee){
	    	
	        return feeRepository.save(fee);
	    }
	    
	    @PutMapping("/fee/{id}")
	    public ResponseEntity<Fee> updateFee (@PathVariable Long id, @RequestBody Fee feeInfo) {

	        Fee fee = feeRepository.findById(id)
	                .orElseThrow(() -> new ResourceNotFoundException("Student with id '" + id + "' does not exist"));

	        fee.setAdmissionNo(feeInfo.getAdmissionNo());
	        fee.setPaidmonth(feeInfo.getPaidmonth());
	        fee.setAmount(feeInfo.getAmount());
	        fee.setFeeDate(feeInfo.getFeeDate());
	        
	        Fee updatedFee = feeRepository.save(fee);
	        return ResponseEntity.ok(updatedFee);
	    }

	    // todo: validate
	    @DeleteMapping("/fee/{id}")
	    public ResponseEntity<Map<String, Boolean>> deleteFee(@PathVariable Long id){
	        Fee fee = feeRepository.findById(id)
	                .orElseThrow();

	        feeRepository.delete(fee);
	        Map<String, Boolean> response = new HashMap<>();

	        response.put("deleted",Boolean.TRUE);
	        return ResponseEntity.ok(response);

	    }

}
