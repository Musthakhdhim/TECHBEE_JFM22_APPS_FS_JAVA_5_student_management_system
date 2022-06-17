package com.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.springboot.model.Student;
import com.springboot.repository.StudentRepository;
import com.springboot.service.ResourceNotFoundException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController//use to give web services
@RequestMapping("/api")
public class StudentController {

    @Autowired //inject the object dependency implicitly
    private StudentRepository studentRepository;

    @GetMapping("/students")
    public List<Student> getAllStudents(){
        return this.studentRepository.findAll();
    }

    @GetMapping("/students/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Long id){
        Student student = studentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Student with id '"+id+"' does not exist"));
        return ResponseEntity.ok(student);
    }

    @PostMapping("/students")
    public Student createStudent(@RequestBody Student student){
        return studentRepository.save(student);
    }
    
    @PutMapping("/students/{id}")
    public ResponseEntity<Student> updateStudent (@PathVariable Long id, @RequestBody Student studentInfo) {

        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student with id '" + id + "' does not exist"));
        
        student.setId(studentInfo.getId());
        student.setFirstName(studentInfo.getFirstName());
        student.setLastName(studentInfo.getLastName());
        student.setAge(studentInfo.getAge());
        student.setAddress(studentInfo.getAddress());
//        student.setAdmissionNo(studentInfo.getAdmissionNo());
//        student.setClassNo(studentInfo.getClassNo());
//        student.setRollNo(studentInfo.getRollNo());
        student.setFather(studentInfo.getFather());
        student.setMother(studentInfo.getMother());
        student.setContactNo(studentInfo.getContactNo());

        Student updatedStudent = studentRepository.save(student);
        return ResponseEntity.ok(updatedStudent);
    }

    // todo: validate
    @DeleteMapping("/students/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteStudent(@PathVariable Long id){
        Student student = studentRepository.findById(id)
                .orElseThrow();

        studentRepository.delete(student);
        Map<String, Boolean> response = new HashMap<>();

        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);

    }

}

