package wap.web5team.buife.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import wap.web5team.buife.domain.Party;

import java.util.List;
import java.util.Optional;

@Repository
public interface PartyRepository extends JpaRepository<Party, Integer> {
    Party save(Party party);
    void delete(Party party);
    Optional<Party> findByPartyPk(int partyPk);
    List<Party> findAll();
    Page<Party> findAll(Pageable pageable); // 페이징 처리
}
