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
    @Column(name="party_pk")
    private int partyPk;
    @Column(name="party_name")
    private String partyName;
    @Column(name="fest_pk")
    private Long festPk;
    @Column(name="user_pk")
    private String userPk;
    @Column(name="party_recruit_limit")
    private int partyRecruitLimit;
    @Column(name="party_recruit_curr")
    private int partyRecruitCurr;
    @Column(name="party_char_url")
    private String partyChatUrl;
    @Column(name="party_start")
    private LocalDate partyStart;
    @Column(name="party_detail")
    private String partyDetail;
    @Column(name="party_state")
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
