package wap.web5team.buife.domain;

import java.util.ArrayList;
import java.util.List;

public class PartyDetail {
    private List<PartyMember> accepted;
    private List<PartyMember> standby;
    private int state;
    private int partyPk;
    private int session;
    private int host;

    public PartyDetail() {
        this.accepted = new ArrayList();
        this.standby = new ArrayList();
        this.state = 0;
    }

    public void setPartyMemberList(List<PartyMember> partyMemberList, Party party) {

        for (PartyMember t : partyMemberList) {
            if (t.getUserState().equals("수락"))
                this.accepted.add(t);
        }

        for (PartyMember t : partyMemberList) {
            if (t.getUserState().equals("수락대기"))
                this.standby.add(t);
        }
    }

    public void setStateAndPartyPk(PartyMember session, Party party) {

        if (session == null) {
            this.state = 1;
            return;
        }

        boolean isHost = false;
        if (session.getUserPk() == host)
            isHost = true;

        if (!isHost && session.getUserState().equals("수락대기")) {
            this.state = 2;
        } else if (!isHost && session.getUserState().equals("수락")) {
            this.state = 3;
        } else if (isHost && party.getPartyState().equals("모집")) {
            this.state = 4;
        } else if (isHost && party.getPartyState().equals("마감")) {
            this.state = 5;
        } else {
            this.state = 1;
        }

        this.partyPk = party.getPartyPk();
    }

    public boolean isAuthentic() {

        if (session == host)
            return true;

        return false;
    }

    public void setFieldIfOutOfDate() {
        this.state = 6;
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

    public void setStateAndPartyPk(int state) {
        this.state = state;
    }

    public int getSession() {
        return session;
    }

    public void setSession(int session) {
        this.session = session;
    }

    public int getHost() {
        return host;
    }

    public void setHost(int host) {
        this.host = host;
    }

    public int getPartyPk() {
        return partyPk;
    }

    public void setPartyPk(int partyPk) {
        this.partyPk = partyPk;
    }
}
