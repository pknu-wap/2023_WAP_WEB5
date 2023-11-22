package wap.web5team.buife.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import jakarta.persistence.*;
import lombok.ToString;

import java.time.LocalDate;

@ToString
@Entity
public class Party {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int partyPk;
    private String partyName;
    private Long festPk;
    private String userPk;
    private int partyRecruitLimit;
    private int partyRecruitCurr;
    private String partyChatUrl;
    private LocalDate partyStart;
    private String partyDetail;
    private String partyState;

    public int getPartyPk() {
        return partyPk;
    }

    public void setPartyPk(int partyPk) {
        this.partyPk = partyPk;
    }

    public String getPartyName() {
        return partyName;
    }

    public void setPartyName(String partyName) {
        this.partyName = partyName;
    }

    public Long getFestPk() {
        return festPk;
    }

    public void setFestPk(Long festPk) {
        this.festPk = festPk;
    }

    public String getUserPk() {
        return userPk;
    }

    public void setUserPk(String userPk) {
        this.userPk = userPk;
    }

    public int getPartyRecruitLimit() {
        return partyRecruitLimit;
    }

    public void setPartyRecruitLimit(int partyRecruitLimit) {
        this.partyRecruitLimit = partyRecruitLimit;
    }

    public int getPartyRecruitCurr() {
        return partyRecruitCurr;
    }

    public void setPartyRecruitCurr(int partyRecruitCurr) {
        this.partyRecruitCurr = partyRecruitCurr;
    }

    public String getPartyChatUrl() {
        return partyChatUrl;
    }

    public void setPartyChatUrl(String partyChatUrl) {
        this.partyChatUrl = partyChatUrl;
    }

    public LocalDate getPartyStart() {
        return partyStart;
    }

    public void setPartyStart(LocalDate partyStart) {
        this.partyStart = partyStart;
    }

    public String getPartyDetail() {
        return partyDetail;
    }

    public void setPartyDetail(String partyDetail) {
        this.partyDetail = partyDetail;
    }

    public String getPartyState() {
        return partyState;
    }

    public void setPartyState(String partyState) {
        this.partyState = partyState;
    }

    @PrePersist
    public void prePersist(){
        this.partyState = this.partyState==null?"모집":this.partyState;
        this.partyRecruitCurr = this.partyRecruitCurr==0?1:this.partyRecruitCurr;
    }
}
