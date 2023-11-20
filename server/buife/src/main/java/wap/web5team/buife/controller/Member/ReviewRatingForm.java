package wap.web5team.buife.controller.Member;

public class ReviewRatingForm {
    int partyPK;
    Double giveRating;
    String userID;

    public String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        this.userID = userID;
    }

    public int getPartyPK() {
        return partyPK;
    }

    public void setPartyPK(int partyPK) {
        this.partyPK = partyPK;
    }

    public Double getGiveRating() {
        return giveRating;
    }

    public void setGiveRating(Double giveRating) {
        this.giveRating = giveRating;
    }
}
