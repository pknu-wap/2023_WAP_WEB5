package wap.web5team.buife.repository;

import wap.web5team.buife.domain.PartyMember;

import java.util.List;
import java.util.Optional;

public interface PartyMemberRepository {
    PartyMember save(PartyMember partyMember);
    String stateChange(PartyMember pm, String state);
    Optional<PartyMember> findByPartyMemberPk(int partyMemberPk);
    Optional<PartyMember> findByUserPkAndPartyPk(int userPk, int partyPk);
    List<PartyMember> findByPartyPk(int partyPk);
    public List<PartyMember> findDeniedPartyMembers(int partyPk);
    void remove(PartyMember pm);
}
