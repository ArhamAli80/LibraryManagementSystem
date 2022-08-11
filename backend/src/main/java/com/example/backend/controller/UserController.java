package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.User;
import com.example.backend.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;
	
	@PostMapping("/register")
	public String add(@RequestBody User user) {
		userService.saveUser(user);
		return "new user successfully created";
	}
	
	@GetMapping("/getUsers")
	public List<User> getAllUsers(){
		return userService.getAllUsers();
	}
}
