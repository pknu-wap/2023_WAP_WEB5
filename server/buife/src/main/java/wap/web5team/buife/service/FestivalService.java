package wap.web5team.buife.service;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import wap.web5team.buife.domain.Festival;
import wap.web5team.buife.repository.FestivalRepository;

import java.util.List;
import java.util.Optional;

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
    public Optional<Festival> findById(Long id) {
        return festivalRepository.findById(id);
    }
    @Transactional
    public int updateView(Long id) {
        return festivalRepository.updateView(id);
    }
    @Transactional
    public Page<Festival> getFestivalList(Pageable pageable) {
        return festivalRepository.findAll(pageable);
    }

}
