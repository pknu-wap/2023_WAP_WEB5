package wap.web5team.buife.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import wap.web5team.buife.domain.Festival;
import wap.web5team.buife.service.FestivalApiService;
import wap.web5team.buife.service.FestivalService;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
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
    public List festivalSearch(@RequestParam("payment") String payment,
                               @RequestParam("area") String area,
                               Model model) throws ParseException {
        System.out.println(payment +", "+area);
        List<Festival> festivals = festivalService.findByFeeContainingAndAddressContaining(payment, area);
        return festivals;
    }

}
