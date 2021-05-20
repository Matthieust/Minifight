package com.matthieu.minifight.dataseed;

import com.matthieu.minifight.models.ERole;
import com.matthieu.minifight.models.Role;
import com.matthieu.minifight.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class RoleDataLoader implements CommandLineRunner {

    @Autowired
    RoleRepository roleRepository;

    @Override
    public void run(String... args) throws Exception {
        if (roleRepository.count() == 0)
        {
            Role role1 = new Role(ERole.ROLE_USER);
            Role role2 = new Role(ERole.ROLE_MODERATOR);
            Role role3 = new Role(ERole.ROLE_ADMIN);

            roleRepository.save(role1);
            roleRepository.save(role2);
            roleRepository.save(role3);
        }
    }
}
