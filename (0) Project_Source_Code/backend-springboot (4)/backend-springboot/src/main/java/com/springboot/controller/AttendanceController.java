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

import com.springboot.model.Attendance;
import com.springboot.repository.AttendanceRepository;
import com.springboot.repository.FeeRepository;

import com.springboot.service.ResourceNotFoundException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController//use to give web services
@RequestMapping("/api")
public class AttendanceController {
	 @Autowired //inject the object dependency implicitly
	    private AttendanceRepository attendanceRepository;

	    @GetMapping("/attendance")
	    public List<Attendance> getAllStudents(){
	        return this.attendanceRepository.findAll();
	    }

	    @GetMapping("/attendance/{id}")
	    public ResponseEntity<Attendance> getStudentById(@PathVariable Long id){
	        Attendance attendance = attendanceRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Student with id '"+id+"' does not exist"));
	        return ResponseEntity.ok(attendance);
	    }

	    @PostMapping("/attendance")
	    public Attendance createAttendance(@RequestBody Attendance attendance){
	    	
	        return attendanceRepository.save(attendance);
	    }
	    
	    @PutMapping("/attendance/{id}")
	    public ResponseEntity<Attendance> updateAttendance (@PathVariable Long id, @RequestBody Attendance attendanceInfo) {

	        Attendance attendance = attendanceRepository.findById(id)
	                .orElseThrow(() -> new ResourceNotFoundException("Student with id '" + id + "' does not exist"));

	        attendance.setAdmissionNo(attendanceInfo.getAdmissionNo());
	        attendance.setAttendanceDate(attendanceInfo.getAttendanceDate());
	        attendance.setAttendance(attendanceInfo.getAttendance());
	        
	        
	        Attendance updatedAttendance = attendanceRepository.save(attendance);
	        return ResponseEntity.ok(updatedAttendance);
	    }

	    // todo: validate
	    @DeleteMapping("/attendance/{id}")
	    public ResponseEntity<Map<String, Boolean>> deleteFee(@PathVariable Long id){
	        Attendance attendance = attendanceRepository.findById(id)
	                .orElseThrow();

	        attendanceRepository.delete(attendance);
	        Map<String, Boolean> response = new HashMap<>();

	        response.put("deleted",Boolean.TRUE);
	        return ResponseEntity.ok(response);

	    }

}
