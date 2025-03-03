package com.example.shadowfax.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.shadowfax.model.Packages;
import com.example.shadowfax.repositories.PackagesRepository;
@Service
public class PackagesService {
	@Autowired
	private PackagesRepository packagesRepository;
	public Packages post(Packages packages) {
		// TODO Auto-generated method stub
		return packagesRepository.save(packages);
	}
	public List<Packages> findAll() {
		// TODO Auto-generated method stub
		return packagesRepository.findAll();
	}

}
