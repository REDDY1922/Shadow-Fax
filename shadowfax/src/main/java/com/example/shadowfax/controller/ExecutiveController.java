package com.example.shadowfax.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.shadowfax.enums.Role;
import com.example.shadowfax.model.Executive;
import com.example.shadowfax.model.User;
import com.example.shadowfax.service.ExecutiveService;
import com.example.shadowfax.service.UserService;
@CrossOrigin("*")
@RestController
@RequestMapping("/executive")
public class ExecutiveController {
	@Autowired
	private UserService userService;
	@Autowired
	private ExecutiveService executiveService;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@PostMapping("/add")
	public ResponseEntity<?> postExecutive(@RequestBody Executive executive) {
		
		User user=executive.getUser();
		/*Password Encryption*/
		String passworPlain=user.getPassword();
		String encodedPassword=passwordEncoder.encode(passworPlain);
		user.setPassword(encodedPassword);
		user.setRole(Role.Excecutive);
		//step1 save user in the database and attach saved user to executive
		user=userService.postUser(user);
		//Attach user and save executive
		executive.setUser(user);
		executive=executiveService.postExecutive(executive);
		return ResponseEntity.ok(executive);
	}
}
