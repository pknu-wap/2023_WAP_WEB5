package wap.web5team.buife.service;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import wap.web5team.buife.domain.Party;
import wap.web5team.buife.repository.PartyRepository;

import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class PartyService {
    private final PartyRepository partyRepository;

    @Autowired
    public PartyService(PartyRepository partyRepository) {
        this.partyRepository = partyRepository;
    }

    public int enroll(Party party){

        partyRepository.save(party);
        return party.getPartyPk();
    }

    public int update(Party partyUpdate){

        Party party = partyRepository.findByPartyPk(partyUpdate.getPartyPk()).get();

        //현원보다 정원을 낮게 수정했을 때 -> 수정하지 않음
        if(party.getPartyRecruitCurr()> partyUpdate.getPartyRecruitLimit()){
            return party.getPartyPk();
        }

        party.setFestPk(partyUpdate.getFestPk());
        party.setPartyRecruitLimit(partyUpdate.getPartyRecruitLimit());
        party.setPartyChatUrl(partyUpdate.getPartyChatUrl());
        party.setPartyEnd(partyUpdate.getPartyEnd());
        party.setPartyDetail(partyUpdate.getPartyDetail());
        party.setPartyTag(partyUpdate.getPartyTag());

        return party.getPartyPk();
    }

    public void delete(int partyPk){
        Party party = partyRepository.findByPartyPk(partyPk).get();
        partyRepository.remove(party);
    }

    public Optional<Party> findParty(int partyPk){
        return partyRepository.findByPartyPk(partyPk);
    }

    public List<Party> partyList(){
        return partyRepository.findAll();
    }

    public int recruitCount(Party party, String sign){

        switch(sign){
            case "add":
                party.setPartyRecruitCurr(party.getPartyRecruitCurr()+1);
                if(party.getPartyRecruitLimit()==party.getPartyRecruitCurr())
                    party.setPartyState("마감");
                break;
            case "sub":
                party.setPartyRecruitCurr(party.getPartyRecruitCurr()-1);
                if(party.getPartyRecruitLimit()>party.getPartyRecruitCurr())
                    party.setPartyState("모집");
        }

        return party.getPartyRecruitCurr();
    }

    public boolean isAcceptable(Party party){

        if(party.getPartyRecruitCurr() < party.getPartyRecruitLimit())
            return true;

        return false;
    }
}
