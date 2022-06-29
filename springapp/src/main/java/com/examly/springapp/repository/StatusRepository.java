package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.examly.springapp.models.StatusModel;

public interface StatusRepository extends JpaRepository<StatusModel, Integer>{

}
