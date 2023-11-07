package wap.web5team.buife;

import jakarta.persistence.EntityManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import wap.web5team.buife.domain.Member;
import wap.web5team.buife.repository.JpaMemberRepository;
import wap.web5team.buife.repository.MemberRepository;
import wap.web5team.buife.repository.TempMemberRepository;
import wap.web5team.buife.service.EmailService;
import wap.web5team.buife.service.MemberSecurityService;
import wap.web5team.buife.service.MemberServiceJoin;
import wap.web5team.buife.service.MemberServiceLogin;

@Configuration

public class SpringConfig {
    private final EntityManager em;

    public SpringConfig(EntityManager em) {
        this.em = em;
    }

    @Bean
    public MemberServiceJoin memberServiceJoin() {
        return new MemberServiceJoin(memberRepository());
    }

    @Bean
    public MemberServiceLogin memberServiceLogin() {return new MemberServiceLogin(memberRepository());}

    @Bean
    public MemberSecurityService memberSecurityService() {return new MemberSecurityService(memberRepository());}

    @Bean
    public MemberRepository memberRepository() {
        return new JpaMemberRepository(em);
    }

}
