package com.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;


import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class Fee {
	@Id
    @GeneratedValue(strategy =GenerationType.SEQUENCE,generator="ID")
    @SequenceGenerator(sequenceName="ID",allocationSize=1,name="ID")
	private Long id;
	
	private int admissionNo;
	private String paidmonth;
	private String amount;
	private String feeDate;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public int getAdmissionNo() {
		return admissionNo;
	}
	public void setAdmissionNo(int admissionNo) {
		this.admissionNo = admissionNo;
	}
	public String getPaidmonth() {
		return paidmonth;
	}
	public void setPaidmonth(String paidmonth) {
		this.paidmonth = paidmonth;
	}
	public String getAmount() {
		return amount;
	}
	public void setAmount(String amount) {
		this.amount = amount;
	}
	public String getFeeDate() {
		return feeDate;
	}
	public void setFeeDate(String feeDate) {
		this.feeDate = feeDate;
	}
	public Fee() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Fee(Long id, int admissionNo, String paidmonth, String amount, String feeDate) {
		super();
		this.id = id;
		this.admissionNo = admissionNo;
		this.paidmonth = paidmonth;
		this.amount = amount;
		this.feeDate = feeDate;
	}
	
	
	
	
	

}
