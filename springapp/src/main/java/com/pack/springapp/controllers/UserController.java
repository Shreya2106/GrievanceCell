package com.pack.springapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pack.springapp.models.UserModel;
import com.pack.springapp.service.UserService;

@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/currentUser")
	public UserModel getCurrentUser() {
		System.out.println("Came here");
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String email = "";
		if (principal instanceof UserDetails) {
			email = ((UserDetails)principal).getUsername();
		}else{
			email = principal.toString();
		}
		return userService.findByEmail(email);
	}
	
	@GetMapping("admin/users")
	public List<UserModel> getUsers(){
		return userService.getAllUsers();
	}
	
	@GetMapping("user/{id}")
	public UserModel userDataById(@PathVariable int id) throws Exception {
		UserModel user = userService.findById(id);
		return user;
	}
	
	@PutMapping("admin/updateEmployee/{id}")
	public UserModel userEditSave(@RequestBody UserModel data, @PathVariable int id) {
		data.setId(id);
		data.setActive(true);
		data.setRole("ROLE_EMPLOYEE");
		return userService.updateUser(data);
	}
	
	@PostMapping("/admin/addEmployee")
	public boolean userSave(@RequestBody UserModel data) {
		if (userService.exists(data)) return false;
		data.setActive(true);
		data.setRole("ROLE_EMPLOYEE");
		userService.addUser(data);
		return true;
	}
	
	@DeleteMapping("admin/deleteEmployee/{id}")
	public void userDelete(@PathVariable int id) {
		userService.deleteUser(id);
	}
}
