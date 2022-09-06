package com.pack.springapp.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "complaint")
public class ComplaintModel  {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false, updatable = false)
	private int complaintId;
	private String complaintName;
	private Date createdOn;
	@ManyToOne()
	private UserModel createdBy;
	@ManyToOne()
	private UserModel resolvedBy;
	@ManyToOne()
	private StatusModel status;
	
	public ComplaintModel() {
		super();
	}
	
	public ComplaintModel(int complaintId, String complaintName, Date createdOn, UserModel createdBy,
			UserModel resolvedBy, StatusModel status) {
		super();
		this.complaintId = complaintId;
		this.complaintName = complaintName;
		this.createdOn = createdOn;
		this.createdBy = createdBy;
		this.resolvedBy = resolvedBy;
		this.status = status;
	}

	public int getComplaintId() {
		return complaintId;
	}

	public void setComplaintId(int complaintId) {
		this.complaintId = complaintId;
	}

	public String getComplaintName() {
		return complaintName;
	}

	public void setComplaintName(String complaintName) {
		this.complaintName = complaintName;
	}

	public Date getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(Date createdOn) {
		this.createdOn = createdOn;
	}

	public UserModel getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(UserModel createdBy) {
		this.createdBy = createdBy;
	}

	public UserModel getResolvedBy() {
		return resolvedBy;
	}

	public void setResolvedBy(UserModel resolvedBy) {
		this.resolvedBy = resolvedBy;
	}

	public StatusModel getStatus() {
		return status;
	}

	public void setStatus(StatusModel status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "ComplaintModel [complaintId=" + complaintId + ", createdOn=" + createdOn + ", createdBy="
				+ createdBy + ", resolveBy=" + resolvedBy + ", status=" + status + "]";
	}	
		
}
