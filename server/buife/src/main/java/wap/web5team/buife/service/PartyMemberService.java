package wap.web5team.buife.service;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import wap.web5team.buife.domain.PartyMember;
import wap.web5team.buife.repository.PartyMemberRepository;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PartyMemberService {

    private final PartyMemberRepository pmRepository;

    @Autowired
    public PartyMemberService(PartyMemberRepository pmRepository) {
        this.pmRepository = pmRepository;
    }

    public int apply(PartyMember pm){

        pmRepository.save(pm);

        return pm.getPmPk();
    }
    public void accept(PartyMember pm){
        pmRepository.stateChange(pm, "수락");
    }

    public void deny(PartyMember pm){
        pmRepository.remove(pm);
    }

    public String changePartyMemberState(PartyMember partyMember, String state){

        pmRepository.stateChange(partyMember, state);

        return state;
    }

    public Optional<PartyMember> findByPartyMemberPk(int partyMemberPk){
        return pmRepository.findByPartyMemberPk(partyMemberPk);
    }
    public Optional<PartyMember> findByUserPkAndPartyPk(int userPk, int partyPk){
        return pmRepository.findByUserPkAndPartyPk(userPk, partyPk);
    }

    public List<PartyMember> entireMemberList(int partyPk){
        return pmRepository.findByPartyPk(partyPk);
    }

    public List<PartyMember> deniedPartyMemberList(int partyPk){
        return pmRepository.findDeniedPartyMembers(partyPk);
    }

}
