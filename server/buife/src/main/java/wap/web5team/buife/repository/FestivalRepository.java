package wap.web5team.buife.repository;

import jakarta.persistence.LockModeType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import wap.web5team.buife.domain.Festival;

import java.util.List;
import java.util.Optional;

@Repository
public interface FestivalRepository extends JpaRepository<Festival, Long> { // <엔티티, PK type>
   List<Festival> findAll();
   Page<Festival> findAll(Pageable pageable); // 페이징 처리
   Optional<Festival> findById(Long id);
   List<Festival> findTop6ByOrderByViewDesc();

   Festival save(Festival festival);

   // 요금을 기준으로 Festival 객체를 검색하는 메서드
   List<Festival> findByAddressContaining(String festAddress);

   @Modifying
   @Query("update Festival f set f.view = f.view + 1 where f.id = :id")
   int updateView(Long id);


}
