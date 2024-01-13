package com.github.lschwend.timerecording.timerecording.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.github.lschwend.timerecording.timerecording.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
