package wap.web5team.buife.repository;

import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import wap.web5team.buife.domain.PartyMember;

import java.util.List;
import java.util.Optional;

import static java.util.Arrays.stream;

@Repository
public class JpaPartyMemberRepository implements PartyMemberRepository {

    private final EntityManager em;

    @Autowired
    public JpaPartyMemberRepository(EntityManager em) {
        this.em = em;
    }

    @Override
    public PartyMember save(PartyMember partyMember) {
        em.persist(partyMember);
        return partyMember;
    }

    @Override
    public String stateChange(PartyMember pm, String state) {

        pm.setUserState(state);

        return state;
    }

    @Override
    public Optional<PartyMember> findByPartyMemberPk(int partyMemberPk) {
        return Optional.ofNullable(em.find(PartyMember.class, partyMemberPk));
    }

    @Override
    public Optional<PartyMember> findByUserPkAndPartyPk(String userPk, int partyPk) {

        return em.createQuery("select pm from PartyMember pm where pm.userPk = :userPk AND pm.partyPk = :partyPk", PartyMember.class)
                .setParameter("userPk", userPk)
                .setParameter("partyPk", partyPk)
                .getResultList().stream().findAny();
    }

    @Override
    public List<PartyMember> findByPartyPk(int partyPk) {
        return em.createQuery("select pm from PartyMember pm where pm.partyPk = :partyPk", PartyMember.class).setParameter("partyPk", partyPk).getResultList();
    }

    @Override
    public List<PartyMember> findDeniedPartyMembers(int partyPk) {
        return em.createQuery("select pm from PartyMember pm where pm.partyPk = :partyPk AND pm.userState = :userState", PartyMember.class).setParameter("partyPk", partyPk).setParameter("userPk", "수락대기").getResultList();
    }

    @Override
    public void remove(PartyMember pm) {
        em.remove(pm);
    }
}
