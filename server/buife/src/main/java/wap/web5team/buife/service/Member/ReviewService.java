package wap.web5team.buife.service.Member;

import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import wap.web5team.buife.domain.Member;

@Service
@Transactional
public class ReviewService {


    @Autowired
    private EntityManager entityManager;

    public Double realGiveRating(int partyCurr, double giveRating) {
        System.out.println("파티 참여 인원 수 : " + partyCurr);
        double weightedValue = Math.log10(4 * partyCurr);
        System.out.println("가중치 : " + weightedValue);
        double realGiveRating = (giveRating - 3.0) / partyCurr * weightedValue;
        System.out.println("실제 반영 rating (반올림 이전) : " + realGiveRating);
        realGiveRating = Math.round(realGiveRating * 100) / 100.0;
        System.out.println("실제 반영 rating : " + realGiveRating);
        return realGiveRating;
    }

    public void updateMemberRating(Member member, Double realGiveRating) {
        member.changeRating(member.getUserRating() + realGiveRating);
        entityManager.flush(); // 변경 사항을 데이터베이스에 반영
    }
}
