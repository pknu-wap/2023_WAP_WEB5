package wap.web5team.buife.controller.Member;
import jakarta.mail.MessagingException;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import wap.web5team.buife.domain.Member;
import wap.web5team.buife.service.Member.EmailService;
import wap.web5team.buife.service.Member.MemberSecurityService;
import wap.web5team.buife.service.Member.MemberServiceJoin;
import wap.web5team.buife.service.Member.MemberServiceLogin;

import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class MemberController {

    private final MemberServiceJoin memberServiceJoin;
    private final MemberServiceLogin memberServiceLogin;
    private final EmailService emailService;
    private final PasswordEncoder passwordEncoder;
    private final MemberSecurityService memberSecurityService;

    @Autowired
    public MemberController(MemberServiceJoin memberServiceJoin, MemberServiceLogin memberServiceLogin, EmailService emailService, PasswordEncoder passwordEncoder,
                            MemberSecurityService memberSecurityService) {
        this.memberServiceJoin = memberServiceJoin;
        this.memberServiceLogin = memberServiceLogin;
        this.emailService = emailService;
        this.passwordEncoder = passwordEncoder;
        this.memberSecurityService = memberSecurityService;
    }


    /////////////////////////////////////////////////////////////////

    @PostMapping("/members/new")
    public String create(@RequestBody MemberForm form, HttpSession session) throws MessagingException, UnsupportedEncodingException {
        switch (memberServiceJoin.nullDataCheck(form)) {
            case 1:
                throw new IllegalStateException("EMAIL 을 입력해주세요");
            case 2:
                throw new IllegalStateException("PW 을 입력해주세요");
            case 3:
                throw new IllegalStateException("이름 을 입력해주세요");
            case 4:
                throw new IllegalStateException("생년월일 을 입력해주세요");
            case 5:
                throw new IllegalStateException("성별 을 입력해주세요");
            case 0:
                break;
        }
        switch (memberServiceJoin.pwLengthCheck(form.getUserPW())) {
            case -1:
                throw new IllegalStateException("pw가 너무 짧아요");
            case 1:
                throw new IllegalStateException("pw가 너무 길어요");
            case 0:
                break;
        }
        Member member = new Member();
        member.setUserID(form.getUserID());
        member.setUserPW(passwordEncoder.encode(form.getUserPW()));
        member.setUserName(form.getUserName());
        member.setUserBirth(form.getUserBirth());
        member.setUserGender(form.getUserGender());


        if (memberServiceJoin.duplicateCheck(member)) {
            String authCode = emailService.sendEmail(member.getUserID());
            member.setCode(authCode);
            emailService.tempSave(member);
            // 서비스 -> 레포지토리로 메모리에 유저정보들 + authCode Map 으로 저장 -> ok!!

            // memberServiceJoin.join(member);
        } else if (!memberServiceJoin.duplicateCheck(member))
            throw new IllegalStateException("이미 존재하는 EMAIL 입니다.");

        session.setAttribute("userID", member.getUserID());
        System.out.println("해싱 된 비밀번호로 저장됨 : " + member.getUserPW());
        return "redirect:/members/new/emailCheck";
    }


    //////////////////////////////////////////////////////////////////
    @ResponseBody
    @GetMapping("/members")
    public List<Member> list() {
        List<Member> members = memberServiceJoin.findMembers();
        return members;
    }

    //////////////////////////////////////////////////////////

    /**
     방안 1
     */
//    @ResponseBody
//    @GetMapping("/TestPage")
//    public Member MemberSecurityServiceTest(@AuthenticationPrincipal UserDetails userDetails) {
//        Member member = new Member();
//        member = memberSecurityService.findByLoginData(userDetails);
//        return member;
//    }

    /**
     * 방안 2
     */
    @ResponseBody
    @GetMapping("/TestPage")
    public Member MemberSecurityServiceTest() {
        Member member = new Member();
        member = memberSecurityService.findByLoginData();
        return member;
    }

//    ///////////////////////////////////////////////////////////////////

    @ResponseBody
    @GetMapping("/mypage")
    public Map<String,Object> mypage() {
        Member member = new Member();
        member = memberSecurityService.findByLoginData();
        return memberSecurityService.MypageData(member);
    }
}