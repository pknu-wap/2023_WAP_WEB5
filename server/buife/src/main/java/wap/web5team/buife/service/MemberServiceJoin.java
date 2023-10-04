package wap.web5team.buife.service;

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
    public int nullDataCheck(MemberForm form) { // null 이랑 빈공백은 다름..
        int nullCheck=0;
        if(form.getUserID().equals(""))
            return nullCheck = 1;
        if(form.getUserPW().equals(""))
            return nullCheck = 2;
        if(form.getUserName().equals(""))
            return nullCheck = 3;
        if(form.getUserBirth().equals(""))
            return nullCheck = 4;
        if(form.getUserGender().equals(""))
            return nullCheck = 5;

        return nullCheck;
    }

    public int pwLengthCheck(String inputPW) {
        int pwLengthCheck=0;
        if(inputPW.length() < 8)
            return pwLengthCheck=-1; // 8자리 미만 : -1 리턴
        else if(inputPW.length() > 15)
            return pwLengthCheck=1; // 15자리 초과 : 1 리턴
        else
            return pwLengthCheck; // 8~15자리 : 0 리턴
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
