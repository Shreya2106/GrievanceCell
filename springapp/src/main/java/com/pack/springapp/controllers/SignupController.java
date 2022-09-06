package com.pack.springapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pack.springapp.models.UserModel;
import com.pack.springapp.service.UserService;
@RestController
public class SignupController {
	@Autowired
	private UserService userService;
	@PostMapping("/signup")
	public ResponseEntity<?> saveUser(@RequestBody UserModel user) {
		if (userService.exists(user)) return new ResponseEntity<>("User Already Exists",HttpStatus.BAD_REQUEST);
		user.setActive(true);
		user.setRole("ROLE_USER");
		userService.addUser(user);
		return new ResponseEntity<>(user,HttpStatus.CREATED);
	}
}
