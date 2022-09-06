package com.pack.springapp.controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pack.springapp.models.StatusModel;
import com.pack.springapp.service.StatusService;

	@RestController
	public class StatusController{

		@Autowired
		private StatusService statusservice;
		
		public StatusController(StatusService statusservice) {	this.statusservice = statusservice;}
		
		@GetMapping("/admin/openStatus")
		public ResponseEntity<List<StatusModel>> showOpenStatus(){
			List<StatusModel> status=statusservice.showOpenStatus();
			return new ResponseEntity<>(status,HttpStatus.OK);		
		}
		
		@GetMapping("/admin/closedStatus")
		public ResponseEntity<List<StatusModel>> showClosedStatus(){
			List<StatusModel> status=statusservice.showClosedStatus();
			return new ResponseEntity<>(status,HttpStatus.OK);		
		}
		
		@PutMapping("/status/{statusId}")
		public ResponseEntity<StatusModel> userUpdateStatus(@RequestBody StatusModel status, @PathVariable int statusId){
			status.setStatusId(statusId);
			statusservice.updateStatus(status);
			return new ResponseEntity<>(status,HttpStatus.CREATED);
		}
		
		@PutMapping("/employee/status/{statusId}")
		public ResponseEntity<StatusModel> employeeUpdateStatus(@RequestBody StatusModel status, @PathVariable int statusId){
			status.setStatusId(statusId);
			statusservice.updateStatus(status);
			return new ResponseEntity<>(status,HttpStatus.CREATED);
		}
		
		@PutMapping("/admin/status/{statusId}")
		public ResponseEntity<StatusModel> adminUpdateStatus(@RequestBody StatusModel status, @PathVariable int statusId){
			status.setStatusId(statusId);
			statusservice.updateStatus(status);
			return new ResponseEntity<>(status,HttpStatus.CREATED);
		}	
	}
