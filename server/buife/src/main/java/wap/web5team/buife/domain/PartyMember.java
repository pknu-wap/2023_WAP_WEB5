package wap.web5team.buife.domain;

import jakarta.persistence.*;

@Entity
public class PartyMember {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int pmPk;
    private int partyPk;
    private int userPk;
    private String userState;
    public int getPmPk() {
        return pmPk;
    }

    public void setPmPk(int pmPk) {
        this.pmPk = pmPk;
    }

    public int getPartyPk() {
        return partyPk;
    }

    public void setPartyPk(int partyPk) {
        this.partyPk = partyPk;
    }

    public int getUserPk() {
        return userPk;
    }

    public void setUserPk(int userPk) {
        this.userPk = userPk;
    }

    public String getUserState() {
        return userState;
    }

    public void setUserState(String userState) {
        this.userState = userState;
    }

    @PrePersist
    public void prePersist(){
        this.userState=this.userState == null?"수락대기":this.userState;
    }
}
