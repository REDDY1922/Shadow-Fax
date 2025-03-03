package com.example.shadowfax.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.shadowfax.model.Rider;
import com.example.shadowfax.repositories.RiderRepository;
@Service
public class RiderService {
	@Autowired
	private RiderRepository riderRepository;
	public Rider post(Rider rider) {
		// TODO Auto-generated method stub
		return riderRepository.save(rider);
	}

}
