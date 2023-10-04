package wap.web5team.buife.service;


import jakarta.transaction.Transactional;
import wap.web5team.buife.domain.Member;
import wap.web5team.buife.repository.MemberRepository;

@Transactional
public class MemberServiceLogin {
    private final MemberRepository memberRepository;
    public MemberServiceLogin(MemberRepository memberRepository) {

        this.memberRepository = memberRepository;
    }

    public boolean loginService(Member member) {
        Member findMember = memberRepository.findById(member.getUserID());
//        System.out.println(findMember.getUserID());
        if(findMember == null)
            return false;

        else if(findMember.getUserPW().equals(member.getUserPW())) {
            System.out.println(findMember.getUserName() + "님 로그인 성공!");
            return true;
        }

        return false;
    }

}
