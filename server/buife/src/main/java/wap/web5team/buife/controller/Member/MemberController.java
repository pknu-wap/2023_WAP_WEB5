package wap.web5team.buife.controller.Member;
import jakarta.mail.MessagingException;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import wap.web5team.buife.domain.Member;
import wap.web5team.buife.domain.Party;
import wap.web5team.buife.service.Member.*;
import wap.web5team.buife.service.PartyService;

import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Controller
public class MemberController {

    private final MemberServiceJoin memberServiceJoin;
    private final MemberServiceLogin memberServiceLogin;
    private final EmailService emailService;
    private final PasswordEncoder passwordEncoder;
    private final MemberSecurityService memberSecurityService;
    private final PartyService partyService;
    private final ReviewService reviewService;

    @Autowired
    public MemberController(MemberServiceJoin memberServiceJoin, MemberServiceLogin memberServiceLogin, EmailService emailService, PasswordEncoder passwordEncoder,
                            MemberSecurityService memberSecurityService, PartyService partyService, ReviewService reviewService) {
        this.memberServiceJoin = memberServiceJoin;
        this.memberServiceLogin = memberServiceLogin;
        this.emailService = emailService;
        this.passwordEncoder = passwordEncoder;
        this.memberSecurityService = memberSecurityService;
        this.partyService = partyService;
        this.reviewService=reviewService;
    }


    /////////////////////////////////////////////////////////////////

    @PostMapping("/members/new")
    public ResponseEntity<Void> create(@RequestBody MemberForm form, HttpSession session) throws MessagingException, UnsupportedEncodingException {

        memberServiceJoin.nullDataCheck(form);
        memberServiceJoin.checkPWCheck(form.getUserPW(),form.getUserPWCheck());
        memberServiceJoin.pwLengthCheck(form.getUserPW());

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
        return new ResponseEntity<>(HttpStatus.OK);
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

    @PostMapping("/mypage")
    public ResponseEntity<Void> changePW(@RequestBody MemberChangePwForm form) {
        Member member = memberSecurityService.findByLoginData();
        if(!passwordEncoder.matches(form.getOldPW(), member.getUserPW()))
            throw new IllegalStateException("현재 비밀번호가 틀립니다.");

        memberServiceJoin.checkPWCheck(form.getNewPW(), form.getNewPWCheck());
        memberServiceJoin.pwLengthCheck(form.getNewPW());
        memberSecurityService.changePW(member,form.getNewPW());
        return new ResponseEntity<>(HttpStatus.OK);
    }
    /** 비밀번호 틀린거 예외처리 , 비밀번호 확인 유효성 검사 등
     * **/

    @ResponseBody
    @GetMapping("/party/review")
    public ReviewViewForm reviewPage(@RequestParam String userID, @RequestParam String fest_name) {
        ReviewViewForm memberReviewForm = new ReviewViewForm();
        memberReviewForm.setUserID(userID);
        memberReviewForm.setFest_name(fest_name);
        return memberReviewForm;
    }

    @PostMapping("/party/review")
    public ResponseEntity<Void> reviewPage(@RequestBody ReviewRatingForm reviewRatingForm) {
        int partyPK = reviewRatingForm.getPartyPK();
        double giveRating = reviewRatingForm.getGiveRating();
        String userID = reviewRatingForm.getUserID();

        Optional<Party> optionalParty = partyService.findParty(partyPK);
        Party party = optionalParty.get();
        int partyCurr = party.getPartyRecruitCurr();

        double realGiveRating = reviewService.realGiveRating(partyCurr,giveRating);

        Member member = reviewService.findById(userID);
        reviewService.updateMemberRating(member, realGiveRating);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}