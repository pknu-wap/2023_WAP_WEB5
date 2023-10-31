package wap.web5team.buife.controller.Member;
import jakarta.mail.MessagingException;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import wap.web5team.buife.domain.Member;
import wap.web5team.buife.service.EmailService;
import wap.web5team.buife.service.MemberServiceJoin;
import wap.web5team.buife.service.MemberServiceLogin;

import java.io.UnsupportedEncodingException;
import java.util.List;

@Controller
public class MemberController {

    private final MemberServiceJoin memberServiceJoin;
    private final MemberServiceLogin memberServiceLogin;
    private final EmailService emailService;

    @Autowired
    public MemberController(MemberServiceJoin memberServiceJoin, MemberServiceLogin memberServiceLogin, EmailService emailService) {
        this.memberServiceJoin=memberServiceJoin;
        this.memberServiceLogin=memberServiceLogin;
        this.emailService=emailService;
    }


    /////////////////////////////////////////////////////////////////

    @PostMapping("/members/new")
    public String create(@RequestBody MemberForm form, HttpSession session) throws MessagingException, UnsupportedEncodingException {
        switch (memberServiceJoin.nullDataCheck(form)) {
            case 1: throw new IllegalStateException("EMAIL 을 입력해주세요");
            case 2: throw new IllegalStateException("PW 을 입력해주세요");
            case 3: throw new IllegalStateException("이름 을 입력해주세요");
            case 4: throw new IllegalStateException("생년월일 을 입력해주세요");
            case 5: throw new IllegalStateException("성별 을 입력해주세요");
            case 0: break;
        }
        switch (memberServiceJoin.pwLengthCheck(form.getUserPW())) {
            case -1: throw new IllegalStateException("pw가 너무 짧아요");
            case 1: throw new IllegalStateException("pw가 너무 길어요");
            case 0: break;
        }
        Member member = new Member();
        member.setUserID(form.getUserID());
        member.setUserPW(form.getUserPW());
        member.setUserName(form.getUserName());
        member.setUserBirth(form.getUserBirth());
        member.setUserGender(form.getUserGender());


        if(memberServiceJoin.duplicateCheck(member)) {
            String authCode = emailService.sendEmail(member.getUserID());
            member.setCode(authCode);
            emailService.tempSave(member);
            // 서비스 -> 레포지토리로 메모리에 유저정보들 + authCode Map 으로 저장 -> ok!!

            // memberServiceJoin.join(member);
        }
        else if(!memberServiceJoin.duplicateCheck(member))
            throw new IllegalStateException("이미 존재하는 EMAIL 입니다.");

        session.setAttribute("userID",member.getUserID());
        return "redirect:/members/new/emailCheck";
    }


//////////////////////////////////////////////////////////////////
    @ResponseBody
    @GetMapping("/members")
    public List<Member> list() {
        List<Member> members = memberServiceJoin.findMembers();
        return members;
    }

    ///////////////////////////////////////////////////////////


    @PostMapping("/members/login")
    public String login(@RequestBody MemberForm form) {
        Member member = new Member();
        member.setUserID(form.getUserID());
        member.setUserPW(form.getUserPW());
        System.out.println(member.getUserID());
        System.out.println(member.getUserPW());

        if(memberServiceLogin.loginService(member)){
            System.out.println("로그인 성공");
            return "redirect:/";
        }
        else
            System.out.println("로그인실패");
        return "member/login";
    }

}
