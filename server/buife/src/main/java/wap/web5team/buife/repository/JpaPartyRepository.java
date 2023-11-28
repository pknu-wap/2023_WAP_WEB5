/*
package wap.web5team.buife.repository;

import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import wap.web5team.buife.domain.Festival;
import wap.web5team.buife.domain.Party;

import java.util.List;
import java.util.Optional;

public class JpaPartyRepository extends JpaRepository<Party, Integer> implements PartyRepository {

    private final EntityManager em;

    @Autowired
    public JpaPartyRepository(EntityManager em) {
        this.em = em;
    }

    @Override
    public Party save(Party party) {
        em.persist(party);
        return party;
    }

    @Override
    public void remove(Party party) {
        em.remove(party);
    }

    @Override
    public Optional<Party> findByPartyPk(int partyPk) {
        Party party = em.find(Party.class, partyPk);
        return Optional.ofNullable(party);
    }

    @Override
    public Optional<Party> findByFestPk(int festPk) {
        List<Party> result = em.createQuery("select p from Party p where p.festPk = :festPk", Party.class)
                .setParameter("festPk", festPk)
                .getResultList();

        return result.stream().findAny();
    }

    @Override
    public List<Party> findAll() {
        return em.createQuery("select p from Party p", Party.class)
                .getResultList();
    }

    @Override
    public Page<Party> findAll(Pageable pageable){
        return super.findAll(pageable);
    }
}
*/
