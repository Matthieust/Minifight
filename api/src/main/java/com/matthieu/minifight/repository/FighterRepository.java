package com.matthieu.minifight.repository;

import com.matthieu.minifight.models.Fighter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FighterRepository extends JpaRepository<Fighter, Long> {
	Optional<Fighter> findByName(String name);
}
