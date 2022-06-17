package com.springboot.model;

import java.util.HashSet;


import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;

@Entity
public class Mark {
	@Id
	@GeneratedValue(strategy =GenerationType.SEQUENCE,generator="ID")
    @SequenceGenerator(sequenceName="ID",allocationSize=1,name="ID")
	private Long id;

	
	private int admissionNo;
	private int physics;
	private int maths;
	private int chemistry;
	
	public Mark() {
		super();
		
	}
	
	
	public Mark(Long id,int admissionNo, int physics, int maths, int chemistry) {
		super();
		this.id = id;
	
		this.admissionNo = admissionNo;
		this.physics = physics;
		this.maths = maths;
		this.chemistry = chemistry;
	}


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
	public int getPhysics() {
		return physics;
	}
	public void setPhysics(int physics) {
		this.physics = physics;
	}
	public int getMaths() {
		return maths;
	}
	public void setMaths(int maths) {
		this.maths = maths;
	}
	public int getChemistry() {
		return chemistry;
	}
	public void setChemistry(int chemistry) {
		this.chemistry = chemistry;
	}
	
}
