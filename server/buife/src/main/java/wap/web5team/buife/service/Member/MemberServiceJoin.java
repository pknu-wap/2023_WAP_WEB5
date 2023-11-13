package wap.web5team.buife.service.Member;

import jakarta.transaction.Transactional;
import wap.web5team.buife.controller.Member.MemberForm;
import wap.web5team.buife.domain.Member;
import wap.web5team.buife.repository.MemberRepository;

import java.util.List;

@Transactional
public class MemberServiceJoin {
    private final MemberRepository memberRepository;

    public MemberServiceJoin(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

//////////////////////////////////////////////////////////////////////
    public Member join(Member member) {
        return memberRepository.save(member);
    }
    public void nullDataCheck(MemberForm form) { // null 이랑 빈공백은 다름..
        int nullCheck=0;
        if(form.getUserID().equals(""))
            throw new IllegalStateException("EMAIL 을 입력해주세요");
        if(form.getUserPW().equals(""))
            throw new IllegalStateException("PW 을 입력해주세요");
        if(form.getUserPWCheck().equals(""))
            throw new IllegalStateException("PW 확인 을 입력해주세요");
        if(form.getUserName().equals(""))
            throw new IllegalStateException("이름 을 입력해주세요");
        if(form.getUserBirth().equals(""))
            throw new IllegalStateException("생년월일 을 입력해주세요");
        if(form.getUserGender().equals(""))
            throw new IllegalStateException("성별 을 입력해주세요");

    }
    public void checkPWCheck(String PW, String checkPW) {
        if(!PW.equals(checkPW))
            throw new IllegalStateException("pw확인과 pw가 다릅니다.");
    }

    public void pwLengthCheck(String inputPW) {
        if(inputPW.length() < 8)
            throw new IllegalStateException("pw가 너무 짧아요");
        else if(inputPW.length() > 15)
            throw new IllegalStateException("pw가 너무 길어요");
    }

    public boolean duplicateCheck(Member member) {
        Member duplicateCheck = memberRepository.findById(member.getUserID());
        if(duplicateCheck == null)
            return true;
        else
            return false;
    }
///////////////////////////////////////////////////////////////////////

    public List<Member> findMembers() {
        return memberRepository.findAll();
    }
//////////////////////////////////////////////////////////////////////////

}
