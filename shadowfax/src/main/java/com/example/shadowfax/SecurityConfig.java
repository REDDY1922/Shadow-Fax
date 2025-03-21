package com.example.shadowfax;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import com.example.shadowfax.service.UserService;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
	@Autowired
	private UserService userService;
	@Bean
	BCryptPasswordEncoder passwordEncoder() {
		BCryptPasswordEncoder passEncoder=new BCryptPasswordEncoder();
		return passEncoder;
	}
	@Bean
	SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
		http
		.csrf((csrf)->csrf.disable())
		.authorizeHttpRequests(authorize ->authorize
								.requestMatchers(HttpMethod.GET,"/user/login").authenticated()
								.requestMatchers(HttpMethod.POST,"/auth/sign-up").permitAll()
							.anyRequest().permitAll()
							)
		.httpBasic(Customizer.withDefaults());
		
		return http.build();
	}
	@Bean
	AuthenticationManager authenticationManager() {
		DaoAuthenticationProvider authenticationProvider=new DaoAuthenticationProvider();
		authenticationProvider.setUserDetailsService(userService);
		authenticationProvider.setPasswordEncoder(passwordEncoder());
		
		ProviderManager providerManager=new ProviderManager(authenticationProvider);
		return providerManager;
	}
}

