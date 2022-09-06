package com.pack.springapp.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pack.springapp.models.ComplaintModel;

@Repository
public interface ComplaintRepository extends JpaRepository<ComplaintModel,Integer> {
	List<ComplaintModel> findByCreatedById(int id);
	List<ComplaintModel> findByResolvedById(int id);
}
