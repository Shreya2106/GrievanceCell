package com.examly.springapp.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="status")
public class StatusModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int statusId; 
	private String status;
	private String statusDesc;
	
	public StatusModel() {}

	public StatusModel(int statusId, String status, String statusDesc) {
		super();
		this.statusId = statusId;
		this.status = status;
		this.statusDesc = statusDesc;
	}

	public int getStatusId() {
		return statusId;
	}

	public void setStatusId(int statusId) {
		this.statusId = statusId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getStatusDesc() {
		return statusDesc;
	}

	public void setStatusDesc(String statusDesc) {
		this.statusDesc = statusDesc;
	}
}
