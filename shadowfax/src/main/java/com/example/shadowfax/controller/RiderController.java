package com.example.shadowfax.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.shadowfax.model.Rider;
import com.example.shadowfax.service.RiderService;
@CrossOrigin("*")
@RestController
@RequestMapping("/riders")
public class RiderController {
	@Autowired
	private RiderService riderService;
	@PostMapping("/add")
	public ResponseEntity<?> addRider(@RequestBody Rider rider) {
		Rider riders=riderService.post(rider);
		return ResponseEntity.ok(riders);
	}
}
