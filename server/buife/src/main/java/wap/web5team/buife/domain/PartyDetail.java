package wap.web5team.buife.domain;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class PartyDetail {
    private List<PartyMember> accepted;
    private List<PartyMember> standby;
    private int state;

    public PartyDetail() {
        this.accepted = new ArrayList();
        this.standby = new ArrayList();
        this.state = 0;
    }

    public void setPartyMemberList(List<PartyMember> partyMemberList, Party party){

        // 파티멤버 목록
        for (PartyMember t: partyMemberList) {
            if(t.getUserState().equals("수락"))
                this.accepted.add(t);
        }

        // 수락대기 인원 목록
        for (PartyMember t: partyMemberList) {
            if(t.getUserState().equals("수락대기"))
                this.standby.add(t);
        }

        if(party.getPartyState().equals("모집")){
            this.state = 4;
        }
        else if (party.getPartyState().equals("마감")){
            this.state = 5;
        }
    }

    public void setState(List<PartyMember> partyMemberList, int userPk){

        PartyMember pm = null;

        for (PartyMember t: partyMemberList) {
            if(t.getUserPk()==userPk)
                pm = t;
        }

        if(pm==null){
            this.state = 1;
        }
        else if(pm.getUserState().equals("수락대기")){
            this.state = 2;
        }
        else if(pm.getUserState().equals("수락")){
            this.state = 3;
        }
    }

    public void setFieldIfOutOfDate(){
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

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }
}
