package com.pack.springapp.controllers;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pack.springapp.models.ComplaintModel;
import com.pack.springapp.models.UserModel;
import com.pack.springapp.service.ComplaintService;
import com.pack.springapp.service.StatusService;
import com.pack.springapp.service.UserService;

@RestController
public class ComplaintController {

	@Autowired
	private ComplaintService complaintservice;
	
	@Autowired
	private StatusService statusService;
	
	@Autowired
	private UserService userService;
	
	public ComplaintController(ComplaintService complaintservice) {	this.complaintservice = complaintservice;}
	
	@GetMapping("/admin")
	public ResponseEntity<List<ComplaintModel>> getComplaints(){
		List<ComplaintModel> complaint=complaintservice.findAllComplaints();
		return new ResponseEntity<>(complaint,HttpStatus.OK);		
	}
	
	@PostMapping("/admin/mapComplaint/{id}")
	public ResponseEntity<ComplaintModel> mapComplaint(@RequestBody ComplaintModel complaint, @PathVariable int id){
		ComplaintModel update = complaintservice.findByComplaintId(id);
		UserModel resolver = userService.findByEmail(complaint.getResolvedBy().getEmail());
		update.setResolvedBy(resolver);
		complaintservice.updateComplaint(update);
		return new ResponseEntity<>(update,HttpStatus.CREATED);
	}
	
	@PutMapping("/admin/updateComplaint/{id}")
	public ResponseEntity<ComplaintModel> updateAdminComplaint(@RequestBody ComplaintModel complaint, @PathVariable int id){
		ComplaintModel updatecomplaint= complaintservice.updateComplaint(complaint);
		return new ResponseEntity<>(updatecomplaint,HttpStatus.CREATED);
	}
	
	@PostMapping("/addComplaint")
	public ResponseEntity<ComplaintModel> addComplaint(@RequestBody ComplaintModel complaint){
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String email = "";
		if (principal instanceof UserDetails) {
			email = ((UserDetails)principal).getUsername();
		}else{
			email = principal.toString();
		}
		
		//find their id
		UserModel user = userService.findByEmail(email);

		complaint.setCreatedBy(user);
		complaint.setCreatedOn(new Date());
		complaint.getStatus().setStatus("Active");
		complaint.setStatus(statusService.addStatus(complaint.getStatus()));
		complaintservice.addComplaint(complaint);
		return new ResponseEntity<>(complaint,HttpStatus.CREATED);
	}
	
	@GetMapping("/complaint")
	public ResponseEntity<List<ComplaintModel>> getUserComplaints(){
		
		//find current logged in user email
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String email = "";
		if (principal instanceof UserDetails) {
			email = ((UserDetails)principal).getUsername();
		}else{
			email = principal.toString();
		}
		
		//find their id
		int id = userService.findByEmail(email).getId();
		
		return new ResponseEntity<>(complaintservice.findByCreatorId(id),HttpStatus.OK);
	}
	
	@GetMapping("/complaint/{id}")
	public ResponseEntity<ComplaintModel> getComplaint(@PathVariable("id") int id){
		return new ResponseEntity<>(complaintservice.findByComplaintId(id),HttpStatus.OK);
	}
	
	@PutMapping("/complaint/{id}")
	public ResponseEntity<ComplaintModel> updateComplaint(@RequestBody ComplaintModel complaint, @PathVariable int id){
		ComplaintModel updatecomplaint= complaintservice.updateComplaint(complaint);
		return new ResponseEntity<>(updatecomplaint,HttpStatus.OK);
	}
	
	@DeleteMapping("/complaint/{id}")
	public ResponseEntity<?> deleteComplaint(@PathVariable("id") int id){
		complaintservice.deleteComplaint(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	
	
	@GetMapping("/employee/complaint")
	public ResponseEntity<List<ComplaintModel>> getEmployeeComplaints(){
		
		//find current logged in user email
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String email = "";
		if (principal instanceof UserDetails) {
			email = ((UserDetails)principal).getUsername();
		}else{
			email = principal.toString();
		}
		
		//find their id
		int id = userService.findByEmail(email).getId();
		
		return new ResponseEntity<>(complaintservice.findByResolverId(id),HttpStatus.OK);
	}
	
	@GetMapping("/employee/complaint/{id}")
	public ResponseEntity<ComplaintModel> getEmployeeComplaint(@PathVariable("id") int id){
		return new ResponseEntity<>(complaintservice.findByComplaintId(id),HttpStatus.OK);
	}
	
	@PutMapping("/employee/complaint/{id}")
	public ResponseEntity<ComplaintModel> updateEmployeeComplaint(@RequestBody ComplaintModel complaint, @PathVariable int id){
		ComplaintModel updatecomplaint= complaintservice.updateComplaint(complaint);
		return new ResponseEntity<>(updatecomplaint,HttpStatus.OK);
	}
	
}
