package pitech.trust.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@EnableWebSecurity
@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(authorizeRequests ->
                        authorizeRequests
//                               .requestMatchers("/", "/auth", "/error").permitAll()
                                .anyRequest().authenticated()
                )
                .oauth2Login(withDefaults())
                .logout(logout ->
                        logout
                                .logoutSuccessUrl("/auth/logout").permitAll()
                )
                .csrf(AbstractHttpConfigurer::disable); // Use this method to disable CSRF

        return http.build();
    }
}

