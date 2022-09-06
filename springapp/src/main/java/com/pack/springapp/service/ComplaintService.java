package com.pack.springapp.service;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.pack.springapp.models.ComplaintModel;
import com.pack.springapp.repository.ComplaintRepository;

import org.springframework.beans.factory.annotation.Autowired;

 
@Service
@Transactional
public class ComplaintService {
	
	@Autowired
	private ComplaintRepository complaintRepository;
	

	@Autowired
	public ComplaintService(ComplaintRepository complaintrepository) {
		this.complaintRepository = complaintrepository;
	}
	
	
	public List<ComplaintModel> findByCreatorId(int id){
		return complaintRepository.findByCreatedById(id);
	}
	
	public List<ComplaintModel> findByResolverId(int id){
		return complaintRepository.findByResolvedById(id);
	}
	
	public ComplaintModel addComplaint(ComplaintModel complaint) {
		return complaintRepository.save(complaint);
	}


	public List<ComplaintModel> findAllComplaints() {
		return complaintRepository.findAll();
	}
	public ComplaintModel findByComplaintId(int complaintId) {
		return complaintRepository.findById(complaintId).get();
	}

	public ComplaintModel updateComplaint(ComplaintModel complaint) {
		return complaintRepository.save(complaint);
	}

	public void deleteComplaint(int complaintId) {
		complaintRepository.deleteById(complaintId);	
	}	
}
