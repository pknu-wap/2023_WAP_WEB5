package wap.web5team.buife.controller.Member;

public class MemberChangePwForm {
    private String oldPW;
    private String newPW;
    private String newPWCheck;


    public String getNewPWCheck() {
        return newPWCheck;
    }

    public void setNewPWCheck(String newPWCheck) {
        this.newPWCheck = newPWCheck;
    }

    public String getOldPW() {
        return oldPW;
    }

    public void setOldPW(String oldPW) {
        this.oldPW = oldPW;
    }

    public String getNewPW() {
        return newPW;
    }

    public void setNewPW(String newPW) {
        this.newPW = newPW;
    }
}
