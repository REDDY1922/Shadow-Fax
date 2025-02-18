package com.example.shadowfax.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.shadowfax.model.User;

public interface UserRepository extends JpaRepository<User, Integer>{

}
