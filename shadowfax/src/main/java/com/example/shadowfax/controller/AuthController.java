package com.example.shadowfax.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.shadowfax.model.User;
import com.example.shadowfax.service.UserService;

@RestController
@CrossOrigin("*")
public class AuthController {
	@Autowired
	private UserService userService;
	@GetMapping("/user/login")
	public User login(Principal principal) {
		String username=principal.getName();
		User user=(User) userService.loadUserByUsername(username);
		return user;
	}
}
