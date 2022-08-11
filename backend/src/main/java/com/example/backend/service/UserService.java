package com.example.backend.service;

import java.util.List;

import com.example.backend.model.User;



public interface UserService {

	public User saveUser(User user);
	public List<User> getAllUsers();
}
