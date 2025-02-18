package com.example.shadowfax.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.shadowfax.model.Executive;
import com.example.shadowfax.repositories.ExecutiveRepository;

@Service
public class ExecutiveService {
	@Autowired
	private ExecutiveRepository executiveRepository;
	public Executive postExecutive(Executive executive) {
		// TODO Auto-generated method stub
		return executiveRepository.save(executive);
	}

}
