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

import com.springboot.model.Mark;
import com.springboot.model.Student;
import com.springboot.repository.MarkRepository;
import com.springboot.repository.StudentRepository;

import com.springboot.service.ResourceNotFoundException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController//use to give web services
@RequestMapping("/api")
public class MarkController {
	
//	@Autowired
//	private MarkService service;
	
//	public Mark registerMark(@RequestBody Mark mark) throws Exception {
//		int temprollNo=mark.getRollNo();
//		Mark markObj=null;
//		if(temprollNo >0 && !"".equals(temprollNo)) {
//			markObj=service.fetchStudentByRollNo(temprollNo);
//			if(markObj ==null) {
//				throw new Exception("user with "+temprollNo+" is not present" );
//			}
//			else {
//				markObj=service.saveMark(mark);
//			}
//			
//		}
//		
//		return markObj;
//		
//	}
	
	@Autowired //inject the object dependency implicitly
    private MarkRepository markRepository;

    @GetMapping("/mark")
    public List<Mark> getAllStudents(){
        return this.markRepository.findAll();
    }

    @GetMapping("/mark/{id}")
    public ResponseEntity<Mark> getStudentById(@PathVariable Long id){
        Mark mark = markRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Student with id '"+id+"' does not exist"));
        return ResponseEntity.ok(mark);
    }

    @PostMapping("/mark")
    public Mark createMark(@RequestBody Mark mark){
        return markRepository.save(mark);
    }
    
    @PutMapping("/mark/{id}")
    public ResponseEntity<Mark> updateMark (@PathVariable Long id, @RequestBody Mark markInfo) {

        Mark mark = markRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student with id '" + id + "' does not exist"));

        mark.setAdmissionNo(markInfo.getAdmissionNo());
        mark.setPhysics(markInfo.getPhysics());
        mark.setMaths(markInfo.getMaths());
        mark.setChemistry(markInfo.getChemistry());
//        student.setLastName(studentInfo.getLastName());
//        student.setAge(studentInfo.getAge());
//        student.setAddress(studentInfo.getAddress());
//        student.setAdmissionNo(studentInfo.getAdmissionNo());
//        student.setClassNo(studentInfo.getClassNo());
//        student.setRollNo(studentInfo.getRollNo());
//        student.setFirstName(studentInfo.getFather());
//        student.setMother(studentInfo.getMother());

        Mark updatedMark = markRepository.save(mark);
        return ResponseEntity.ok(updatedMark);
    }

    // todo: validate
    @DeleteMapping("/mark/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteMark(@PathVariable Long id){
        Mark mark = markRepository.findById(id)
                .orElseThrow();

        markRepository.delete(mark);
        Map<String, Boolean> response = new HashMap<>();

        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);

    }


}
