package wap.web5team.buife.domain;

import java.util.Random;

public class ForeignKey {

    private int festPk;
    private int userPk;

    public int getFestPk() {
        return festPk;
    }

    public void setFestPk(int festPk) {
        this.festPk = festPk;
    }

    public int getUserPk() {
        return userPk;
    }

    public void setUserPk(int userPk) {
        this.userPk = userPk;
    }
    //의사 pk
    private int rand(int i){
        Random random = new Random();
        random.setSeed(System.currentTimeMillis()+i);
        return random.nextInt(100);
    }
    public void fkSet(){
        this.setFestPk(rand(1));
        this.setUserPk(rand(2));
    }

}
