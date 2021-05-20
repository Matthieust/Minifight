package com.matthieu.minifight.controllers;

import com.matthieu.minifight.models.User;
import com.matthieu.minifight.payload.response.MessageResponse;
import com.matthieu.minifight.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/users")
public class UsersController {
	@Autowired
	UserRepository userRepository;

	@GetMapping("/my-fighter")
	public ResponseEntity<?> myFighter(Principal principal) {
		Optional<User> user = userRepository.findByUsername(principal.getName());

		if (user.isPresent()) {
			return ResponseEntity.ok(user.get().getFighter());
		}

		return ResponseEntity
				.badRequest()
				.body(new MessageResponse("Error: fighter not found"));

	}
}
