package com.pack.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pack.springapp.models.UserModel;
import com.pack.springapp.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
	
	public UserModel findByEmail(String email) {
		return userRepository.findByEmail(email).get();
	}
	
	public List<UserModel> getAllUsers(){
		return userRepository.findAll();
	}
	public boolean exists(UserModel user) {
		return userRepository.existsByUsername(user.getUsername()) || userRepository.existsByEmail(user.getEmail());
	}
	
	public void addUser(UserModel user) {
		userRepository.save(user);
	}
	
	public UserModel updateUser(UserModel user) {
		return userRepository.save(user);
	}
	
	public void deleteUser(int id) {
		userRepository.deleteById(id);
	}
	
	public UserModel findById(int id) throws Exception{
		
		if(userRepository.existsById(id)) return userRepository.findById(id).get();
		else throw new Exception("No User by that id exists");
	}

}
