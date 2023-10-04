package wap.web5team.buife.repository;

import org.springframework.stereotype.Repository;
import wap.web5team.buife.domain.Member;

import java.util.ArrayList;
import java.util.HashMap;

@Repository
public class TempMemberRepository {

    private static HashMap<String, ArrayList<String>> map = new HashMap<>();

    public Member save(Member member) {
        ArrayList<String> list = new ArrayList<>();
        list.add(Integer.toString(member.getIdx_pk())); // idx_pk String으로 형변환해서 리스트
        list.add(member.getUserPW());
        list.add(member.getUserName());
        list.add(member.getUserBirth());
        list.add(member.getUserGender());
        list.add(Double.toString(member.getUserRating())); // 매너온도 String으로 형변환해서 넣음
        list.add(member.getCode());
        map.put(member.getUserID(), list);

        return member;
    }
    public Member find(String userID) {
        ArrayList<String> list = new ArrayList<>();
        Member member = new Member();
        list = map.get(userID);
//        if(list == null)
//            return member;
        member.setUserID(userID);
        member.setIdx_pk(Integer.parseInt(list.get(0)));
        member.setUserPW(list.get(1));
        member.setUserName(list.get(2));
        member.setUserBirth(list.get(3));
        member.setUserGender(list.get(4));
        member.setUserRating(Double.parseDouble(list.get(5)));
        member.setCode(list.get(6));
        return member;
    }

}
