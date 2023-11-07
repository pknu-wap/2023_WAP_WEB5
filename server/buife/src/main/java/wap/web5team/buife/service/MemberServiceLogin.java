package wap.web5team.buife.service;


import jakarta.transaction.Transactional;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import wap.web5team.buife.domain.Member;
import wap.web5team.buife.repository.MemberRepository;

import java.util.ArrayList;
import java.util.List;

@Transactional
public class MemberServiceLogin implements UserDetailsService {
    private final MemberRepository memberRepository;
    public MemberServiceLogin(MemberRepository memberRepository) {

        this.memberRepository = memberRepository;
    }

    public UserDetails loadUserByUsername(String userID) throws UsernameNotFoundException {
        Member member = memberRepository.findById(userID);
        if (member == null)
            throw new UsernameNotFoundException("사용자를 찾을수 없습니다.");
        return User.builder()
                .username(member.getUserID())
                .password(member.getUserPW())
                .roles(MemberRole.USER.toString())
                .build();
    }
}
