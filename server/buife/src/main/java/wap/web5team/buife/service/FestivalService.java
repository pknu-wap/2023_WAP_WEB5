package wap.web5team.buife.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;
import org.springframework.stereotype.Service;
import wap.web5team.buife.domain.Festival;
import wap.web5team.buife.repository.FestivalRepository;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

/*
* <비즈니스 로직 수행- 축제 관련 기능>
* - 축제 전체 목록 조회
*
*
*
*/
@Service
public class FestivalService {
    @Autowired
    private FestivalRepository festivalRepository;

    public List<Festival> selectAll() {
        return festivalRepository.findAll();
    }
    public List<Festival> findByFeeContainingAndAddressContaining(String fee, String adr) {
        return festivalRepository.findByFeeContainingAndAddressContaining(fee, adr);
    }
    public LocalDate getFestEnd(Long festPk){

        Festival festival = festivalRepository.findById(festPk).get();

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("YYYYMMdd");

        return LocalDate.parse(festival.getEnd(), formatter);
    }
}
