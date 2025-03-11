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
import com.example.shadowfax.model.Admin;
import com.example.shadowfax.model.User;
import com.example.shadowfax.service.AdminService;
import com.example.shadowfax.service.UserService;
@CrossOrigin("*")
@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	private UserService userService;
	@Autowired
	private AdminService adminService;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@PostMapping("/add")
	public ResponseEntity<?> postAdmin(@RequestBody Admin admin) {
		
		User user=admin.getUser();
		/*Password Encryption*/
		String passworPlain=user.getPassword();
		String encodedPassword=passwordEncoder.encode(passworPlain);
		user.setPassword(encodedPassword);
		user.setRole(Role.Admin);
		//step1 save user in the db and attach saved user to admin
		user=userService.postUser(user);
		//Attach user and save admin
		admin.setUser(user);
		admin=adminService.postAdmin(admin);
		return ResponseEntity.ok(admin);
	}
}
