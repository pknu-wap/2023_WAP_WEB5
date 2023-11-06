package wap.web5team.buife.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import wap.web5team.buife.domain.Festival;

import java.util.List;
import java.util.Optional;

@Repository
public interface FestivalRepository extends JpaRepository<Festival, Long> { // <엔티티, PK type>
   List<Festival> findAll();

   Optional<Festival> findById(Long id);

   Festival save(Festival festival);

   // 요금을 기준으로 Festival 객체를 검색하는 메서드
   List<Festival> findByFeeContainingAndAddressContaining(String festFee, String festAddress);

}
