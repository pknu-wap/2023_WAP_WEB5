package wap.web5team.buife.repository;

import wap.web5team.buife.domain.Party;

import java.util.List;
import java.util.Optional;

public interface PartyRepository {
    Party save(Party party);
    void remove(Party party);
    Optional<Party> findByPartyPk(int partyPk);
    Optional<Party> findByFestPk(int festPk);
    List<Party> findAll();
}
