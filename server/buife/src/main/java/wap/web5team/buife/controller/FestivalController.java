package wap.web5team.buife.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import wap.web5team.buife.domain.Festival;
import wap.web5team.buife.domain.FestivalDto;
import wap.web5team.buife.service.FestivalService;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/festival")
/* RequestMapping 애노테이션은 클래스 수준에 적용됨.
따라서 이 클래스 내의 모든 메서드에 대한 URL은 "/festival"이 기본 시작 경로 */
public class FestivalController {
    @Autowired
    FestivalService festivalService; // 비즈니스 로직
    @GetMapping("/list") // 메서드 레벨에서 추가 경로를 정의, 클래스 레벨과 메서드 레벨에서 URL을 조합하여 웹앱의 엔드포인트를 정의&관리
    @ResponseBody
    public List festivalList(Model model) throws Exception {
        List<Festival> festivals = festivalService.selectAll();
        return festivals;
    }

    @GetMapping ("/search")
    @ResponseBody
    public List festivalSearch(@RequestParam("area") String area,
                               Model model) throws ParseException {
        List<Festival> festivals = festivalService.findByAddressContaining(area);
        return festivals;
    }
    @GetMapping("/read-one/{id}")
    @ResponseBody
    public Festival readOneFestival(@PathVariable Long id, Model model) {
        System.out.println("조회한 id=" + id);

        Festival festival = festivalService.findById(id).orElse(null);
        int cnt=festivalService.updateView(id);

        return festival;
    }
    @GetMapping("/read-page")
    @ResponseBody
    public Page<Festival> readPageFestivallist(@RequestParam(name = "page", defaultValue = "1") int page,
                                          @RequestParam(name = "size", defaultValue = "10") int size) {
        PageRequest pageRequest = PageRequest.of(page-1,size,Sort.by("end").descending()); // 출력할 페이지 번호, 한 페이지 당 출력할 컨텐츠 개수, 마감일 순으로 정렬
        Page<Festival> festivals = festivalService.getFestivalList(pageRequest);

        return festivals;
    }
    @GetMapping("/popular")
    @ResponseBody
    public List<Festival> getPopurlarFestivals() {

        List<Festival> festivals = festivalService.findTop6ByOrderByViewDesc();

        return festivals;
    }
    @GetMapping("/map")
    @ResponseBody
    public List<FestivalDto> getFestivalDto() {

        List<Festival> festivals = festivalService.selectAll();

        List<FestivalDto> festivalDtoList = new ArrayList<>();

        for (Festival festival : festivals) {
            FestivalDto festivalDto = festival.toDto();
            festivalDtoList.add(festivalDto);
        }
        return festivalDtoList;
    }
}
