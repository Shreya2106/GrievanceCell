package com.pack.springapp.service;
import java.util.List;
import java.util.ArrayList;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.pack.springapp.models.StatusModel;
import com.pack.springapp.repository.StatusRepository;

import org.springframework.beans.factory.annotation.Autowired;

@Service
@Transactional
public class StatusService {
	
	@Autowired
	private StatusRepository statusrepository;
	
	@Autowired
	public StatusService(StatusRepository statusrepository) {
		this.statusrepository = statusrepository;
	}
	
	public StatusModel updateStatus(StatusModel status) {
		return statusrepository.save(status);
	}
	
	public StatusModel addStatus(StatusModel status) {
		return statusrepository.save(status);
	}

	public List<StatusModel> showOpenStatus() {
        List<StatusModel> openStatus=new ArrayList<>();
		List<StatusModel> list=statusrepository.findAll();
		for(StatusModel  s:list) {
			if(s.getStatus().equals("Active"))
			{
				openStatus.add(s);
			}
		}
		return openStatus;
	}
	public List<StatusModel> showClosedStatus() {
        List<StatusModel> closedStatus=new ArrayList<>();
		List<StatusModel> list=statusrepository.findAll();
		for(StatusModel s:list) {
			if(s.getStatus().equals("Closed"))
			{
				closedStatus.add(s);
			}
		}
		return closedStatus;
	}	
}
