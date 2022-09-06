package com.pack.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pack.springapp.models.StatusModel;

public interface StatusRepository extends JpaRepository<StatusModel, Integer>{

}
