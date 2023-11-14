package wap.web5team.buife.domain;

import java.util.ArrayList;
import java.util.List;

public class PartyDetail {
    private Party party;
    private List<PartyMember> accepted;
    private List<PartyMember> standby;
    private int state;
    /*private String session;
    private int partyPk;
    private String host;*/

    public PartyDetail(Party party) {
        this.party = party;
        this.accepted = new ArrayList();
        this.standby = new ArrayList();
        this.state = 0;
        /*this.partyPk = party.getPartyPk();
        this.host = party.getUserPk();*/
    }

    public void setPartyMemberList(List<PartyMember> partyMemberList) {

        for (PartyMember t : partyMemberList) {
            if (t.getUserState().equals("수락"))
                this.accepted.add(t);
        }

        for (PartyMember t : partyMemberList) {
            if (t.getUserState().equals("수락대기"))
                this.standby.add(t);
        }
    }

    public void decideState(PartyMember sessionInPartyMember) {

        if (sessionInPartyMember == null) {
            this.state = 0;
            return;
        }

        boolean isHost = false;
        if (party.getUserPk().equals(sessionInPartyMember.getUserPk()))
            isHost = true;

        if (!isHost && sessionInPartyMember.getUserState().equals("수락대기")) {
            this.state = 2;
        } else if (!isHost && sessionInPartyMember.getUserState().equals("수락")) {
            this.state = 3;
        } else if (isHost && party.getPartyState().equals("모집")) {
            this.state = 4;
        } else if (isHost && party.getPartyState().equals("마감")) {
            this.state = 5;
        } else {
            this.state = 0;
        }
    }

    public void setFieldIfOutOfDate() {
        this.state = 6;
    }

    public Party getParty() {
        return party;
    }

    public void setParty(Party party) {
        this.party = party;
    }

    public List<PartyMember> getAccepted() {
        return accepted;
    }

    public void setAccepted(List<PartyMember> accepted) {
        this.accepted = accepted;
    }

    public List<PartyMember> getStandby() {
        return standby;
    }

    public void setStandby(List<PartyMember> standby) {
        this.standby = standby;
    }

    public void setState(int state) {
        this.state = state;
    }

    public int getState() {
        return state;
    }

    public void decideState(int state) {
        this.state = state;
    }
}
