package wap.web5team.buife.controller;

public class PartyForm {
    private int partyPk;
    private int festPk;
    private int partyRecruitLimit;
    private String partyChatUrl;
    private String partyEnd;
    private String partyDetail;
    private String partyTag;

    public int getPartyPk() {
        return partyPk;
    }

    public void setPartyPk(int partyPk) {
        this.partyPk = partyPk;
    }

    public int getFestPk() {
        return festPk;
    }

    public void setFestPk(int festPk) {
        this.festPk = festPk;
    }

    public int getPartyRecruitLimit() {
        return partyRecruitLimit;
    }

    public void setPartyRecruitLimit(int partyRecruit) {
        this.partyRecruitLimit = partyRecruit;
    }

    public String getPartyChatUrl() {
        return partyChatUrl;
    }

    public void setPartyChatUrl(String partyChatUrl) {
        this.partyChatUrl = partyChatUrl;
    }

    public String getPartyEnd() {
        return partyEnd;
    }

    public void setPartyEnd(String partyEnd) {
        this.partyEnd = partyEnd;
    }

    public String getPartyDetail() {
        return partyDetail;
    }

    public void setPartyDetail(String partyDetail) {
        this.partyDetail = partyDetail;
    }

    public String getPartyTag() {
        return partyTag;
    }

    public void setPartyTag(String partyTag) {
        this.partyTag = partyTag;
    }
}
