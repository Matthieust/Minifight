package com.matthieu.minifight.models;

import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
@Table(	name = "fighters",
		uniqueConstraints = { 
			@UniqueConstraint(columnNames = "name")
		})
public class Fighter {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	@Size(max = 30)
	private String name;

	@PositiveOrZero
	@Max(100)
	private Integer health;

	@PositiveOrZero
	@Max(100)
	private Integer strength;

	@PositiveOrZero
	@Max(100)
	private Integer dexterity;

	@PositiveOrZero
	@Max(100)
	private Integer armor;

	@PositiveOrZero
	@Max(100)
	private Integer level;

	public Fighter() {
	}

	public Fighter(String name, Integer health, Integer strength, Integer dexterity, Integer armor, Integer level) {
		this.name = name;
		this.health = health;
		this.strength = strength;
		this.dexterity = dexterity;
		this.armor = armor;
		this.level = level;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getHealth() {
		return health;
	}

	public void setHealth(Integer health) {
		this.health = health;
	}

	public Integer getStrength() {
		return strength;
	}

	public void setStrength(Integer strength) {
		this.strength = strength;
	}

	public Integer getDexterity() {
		return dexterity;
	}

	public void setDexterity(Integer dexterity) {
		this.dexterity = dexterity;
	}

	public Integer getArmor() {
		return armor;
	}

	public void setArmor(Integer armor) {
		this.armor = armor;
	}

	public Integer getLevel() {
		return level;
	}

	public void setLevel(Integer level) {
		this.level = level;
	}
}
