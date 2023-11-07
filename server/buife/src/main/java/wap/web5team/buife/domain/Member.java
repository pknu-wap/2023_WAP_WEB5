package wap.web5team.buife.domain;

import jakarta.persistence.*;

import javax.management.relation.Role;

@Entity
public class Member {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idx_pk;            // Primary Key

    @Id @Column(name = "userID",unique = true)
    private String userID;        // 아이디
    @Column(name = "userPW")
    private String userPW;        // 비밀번호
    @Column(name = "userName")
    private String userName;    // 닉네임
    @Column(name = "userBirth")
    private String userBirth;    // 생년월일
    @Column(name = "userGender")
    private String userGender;    // 성별
    @Column(name = "userRating")
    private Double userRating; // 매너온도

    private String code; // 이메일 인증코드



    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Member() {
        this.userRating = 36.5;
    }
    public Double getUserRating() {
        return userRating;
    }

    public void setUserRating(Double userRating) {
        this.userRating = userRating;
    }


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
}

