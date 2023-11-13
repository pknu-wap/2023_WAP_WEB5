package wap.web5team.buife.service.Member;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import wap.web5team.buife.domain.Member;
import wap.web5team.buife.repository.MemberRepository;

import java.util.HashMap;
import java.util.Map;

@Service
@Transactional
public class MemberSecurityService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public MemberSecurityService(MemberRepository memberRepository,PasswordEncoder passwordEncoder) {

        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
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

    public Map<String, Object> MypageData(Member member) {
        String userName = member.getUserName();
        Double userRating = member.getUserRating();
        String userID = member.getUserID();
        String userBirth = member.getUserBirth();
        String userGender = member.getUserGender();
        Map<String, Object> map = new HashMap<>();
        map.put("userName",userName);
        map.put("userRating",userRating);
        map.put("userID",userID);
        map.put("userBirth",userBirth);
        map.put("userGender",userGender);
        return map;
    }

    public void changePW(Member member,String userPW) {
        member.changePW(passwordEncoder.encode(userPW));
    }
}
