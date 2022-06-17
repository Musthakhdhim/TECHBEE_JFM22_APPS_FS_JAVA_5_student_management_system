package com.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class Attendance {
	@Id
    @GeneratedValue(strategy =GenerationType.SEQUENCE,generator="ID")
    @SequenceGenerator(sequenceName="ID",allocationSize=1,name="ID")
	private Long id;
	
	private Long admissionNo;
	private String attendanceDate;
	private String attendance;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getAdmissionNo() {
		return admissionNo;
	}
	public void setAdmissionNo(Long admissionNo) {
		this.admissionNo = admissionNo;
	}
	public String getAttendanceDate() {
		return attendanceDate;
	}
	public void setAttendanceDate(String attendanceDate) {
		this.attendanceDate = attendanceDate;
	}
	public String getAttendance() {
		return attendance;
	}
	public void setAttendance(String attendance) {
		this.attendance = attendance;
	}
	
	public Attendance(Long id, Long admissionNo, String attendanceDate, String attendance) {
		super();
		this.id = id;
		this.admissionNo = admissionNo;
		this.attendanceDate = attendanceDate;
		this.attendance = attendance;
		
	}
	public Attendance() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
