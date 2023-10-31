package wap.web5team.buife.repository;

import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Repository;
import wap.web5team.buife.domain.Member;

import java.util.List;
import java.util.Optional;


public class JpaMemberRepository implements MemberRepository{

    private final EntityManager em;

    public JpaMemberRepository(EntityManager em) {
        this.em = em;
    }
//////////////////////////////////////////////////////////////
    @Override
    public Member save(Member member) {
        em.persist(member);
        return member;
    }
////////////////////////////////////////////////////////////////
    @Override
    public List<Member> findAll() {
        return em.createQuery("select m from Member m",Member.class)
                .getResultList();
    }
    /////////////////////////////////////////////////////////
    @Override
    public Member findById(String userID) {
        Member member = em.find(Member.class, userID);
        return member;
    }
}
