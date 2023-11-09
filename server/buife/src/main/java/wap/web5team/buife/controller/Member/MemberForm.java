package wap.web5team.buife.controller.Member;

public class MemberForm {
    private int idx_pk;            // Primary Key
    private String userID;        // 아이디
    private String userPW;        // 비밀번호
    private String userPWCheck;        // 비밀번호 확인
    private String userName;    // 닉네임
    private String userBirth;    // 생년월일
    private String userGender;    // 성별
    private String userCode; // 인증번호
    public String getUserCode() {
        return userCode;
    }

    public void setUserCode(String userCode) {
        this.userCode = userCode;
    }



//    private Double userRating ;
//
//    public Double getUserRating() {
//        return userRating;
//    }
//
//    public void setUserRating(Double userRating) {
//        this.userRating = userRating;
//    }

    public int getIdx_pk() {
        return idx_pk;
    }
    public void setIdx_pk(int idx_pk) {
        this.idx_pk = idx_pk;
    }
    public String getUserID() {
        return userID;
    }
    public void setUserID(String userID) {
        this.userID = userID;
    }
    public String getUserPW() {
        return userPW;
    }
    public void setUserPW(String userPW) {
        this.userPW = userPW;
    }
    public String getUserName() {
        return userName;
    }
    public void setUserName(String userName) {
        this.userName = userName;
    }
    public String getUserBirth() {
        return userBirth;
    }
    public void setUserBirth(String userBirth) {
        this.userBirth = userBirth;
    }

    public String getUserGender() {
        return userGender;
    }
    public void setUserGender(String userGender) {
        this.userGender = userGender;
    }

    public String getUserPWCheck() {
        return userPWCheck;
    }

    public void setUserPWCheck(String userPWCheck) {
        this.userPWCheck = userPWCheck;
    }

}

