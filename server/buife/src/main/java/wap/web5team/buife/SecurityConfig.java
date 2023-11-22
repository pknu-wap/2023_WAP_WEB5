package wap.web5team.buife;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests((authorizeHttpRequests) -> authorizeHttpRequests
                        .requestMatchers(
                                new AntPathRequestMatcher("/**")).permitAll())
//                        .requestMatchers(
//                               new AntPathRequestMatcher("/party/**")).hasRole("USER")
//                        .requestMatchers(
//                                new AntPathRequestMatcher("/mypage")).hasRole("USER"))


                .formLogin((formLogin) -> formLogin
                        .loginPage("/members/login")
                        .usernameParameter("userID")
                        .passwordParameter("userPW")
                        .loginProcessingUrl("/members/login")
                        .defaultSuccessUrl("/"))
                .logout((logout) -> logout
                        .logoutRequestMatcher(new AntPathRequestMatcher("/members/logout"))
                        .logoutSuccessUrl("/")
                        .invalidateHttpSession(true))
                .cors()
                .and() // CORS 설정 뒤에 .and() 호출
                .authorizeHttpRequests()
                .requestMatchers("http://localhost:3001/**").permitAll();

        http.csrf().disable();
        http.authorizeHttpRequests().anyRequest().permitAll();


        return http.build();
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
}
