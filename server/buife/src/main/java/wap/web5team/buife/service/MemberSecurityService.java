package wap.web5team.buife.service;

import jakarta.transaction.Transactional;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import wap.web5team.buife.domain.Member;
import wap.web5team.buife.repository.MemberRepository;

@Transactional
public class MemberSecurityService {
    private final MemberRepository memberRepository;
    public MemberSecurityService(MemberRepository memberRepository) {

        this.memberRepository = memberRepository;
    }

    /**
     방안 1
     */
//    public Member findByLoginData(UserDetails userDetails) {
//        String userID = userDetails.getUsername();
//        Member member = memberRepository.findById(userID);
//        return member;
//    }

    /**
     방안 2
     */
    public Member findByLoginData() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        UserDetails userDetails = (UserDetails)principal;
        String userID = userDetails.getUsername();
        Member member = memberRepository.findById(userID);
        return member;
    }
}
