package wap.web5team.buife.controller.Email;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import wap.web5team.buife.service.EmailService;
import wap.web5team.buife.service.MemberServiceJoin;

import java.io.UnsupportedEncodingException;
import java.util.HashMap;

@Controller
public class EmailController {


    private final EmailService emailService;
    private final MemberServiceJoin memberServiceJoin;

    @Autowired
    public EmailController(EmailService emailService, MemberServiceJoin memberServiceJoin) {

        this.emailService = emailService;
        this.memberServiceJoin = memberServiceJoin;
    }

    @GetMapping("/members/new/emailCheck")
    public String EmailCheckForm(HttpSession session, Model model) {
        String userID = (String) session.getAttribute("userID");
        model.addAttribute("userID",userID);
        return "member/email";
    }

    @PostMapping("/members/new/emailCheck")
    public String EmailCheck(@RequestParam String code, HttpSession session) {
        // userID 를 어디서 받아옴?????????????
        String userID = (String) session.getAttribute("userID");
        System.out.println(userID + "\n" + code);
        if (emailService.checkCode(userID, code) == null ) {
            throw new IllegalStateException("인증번호가 틀립니다.");
           // return "redirect:/members/new/emailCheck?userID=".concat(userID);
        }
        memberServiceJoin.join(emailService.checkCode(userID,code));
        System.out.println("인증번호 OK, 회원정보를 db에 저장합니다.");
        return "redirect:/";


    }
    // 여기서 String으로 authCode를 POST 입력받고
    // emailService.checkCode 로 authCode 일치여부 확인
    // Member member 객체 만들고 set으로 Map에 있는 회원정보 집어넣고
    // memberServiceJoin.join(member) 회원가입.



// 멤버 컨트롤러에서 관리 -> 회원가입 완료 누르면 인증번호 발송하게끔.
//    @GetMapping("/members/new/emailCheck")
//    public String createForm() {
//
//        return "member/email";
//    }
//
//
//    @PostMapping("/members/new/emailCheck")
//    public String EmailCheck(@RequestParam String email) throws MessagingException, UnsupportedEncodingException {
//        String authCode = emailService.sendEmail(email);
//        return "member/emailCheck";
//    }

//        for (int i = 0; i < 5; i++) {
//            if (code.equals(authCode)) {
//                System.out.println("성공");
//                return true;
//            }
//            else
//                continue;
//        }
//        System.out.println("실패");
//        return false;
//    }
}
