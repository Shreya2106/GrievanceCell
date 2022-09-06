package com.pack.springapp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.pack.springapp.models.UserModel;

public interface UserRepository extends JpaRepository<UserModel, Integer>{
	
	Optional<UserModel> findByUsername(String username);
	Optional<UserModel> findByEmail(String email);
	Boolean existsByUsername(String username);
	Boolean existsByEmail(String email);
}
