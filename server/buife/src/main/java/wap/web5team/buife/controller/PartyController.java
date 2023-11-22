package wap.web5team.buife.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import wap.web5team.buife.domain.*;
import wap.web5team.buife.service.FestivalService;
import wap.web5team.buife.service.Member.MemberSecurityService;
import wap.web5team.buife.service.PartyMemberService;
import wap.web5team.buife.service.PartyService;

import java.text.ParseException;
import java.time.LocalDate;
import java.util.List;

@Controller
public class PartyController {

    private final PartyService partyService;
    private final PartyMemberService pmService;
    private final FestivalService festivalService;
    private final MemberSecurityService memberSecurityService;

    @Autowired
    public PartyController(PartyService partyService, PartyMemberService pmService, FestivalService festivalService, MemberSecurityService memberSecurityService) {
        this.partyService = partyService;
        this.pmService = pmService;
        this.festivalService = festivalService;
        this.memberSecurityService = memberSecurityService;
    }

    @ResponseBody
    @GetMapping("/party")
    public List<Party> partyMain() {

        List<Party> parties = partyService.partyList();
        //model.addAttribute("parties", parties);

        return parties;
        //return "party/partyMain";
    }

    // thymeleaf 요청
    /*@GetMapping("party/new")
    public String createParty() {
        return "party/partyCreate";
    }*/

    @PostMapping("party/new")
<<<<<<< Updated upstream
    public String create(@RequestBody Party party) {
        //Party party = new Party()

        Member session = memberSecurityService.findByLoginData();
        String userPk = session.getUserID();

        party.setUserPk(userPk);
        party.setPartyStart(LocalDate.now());
        partyService.enroll(party);

=======
    public void create(@RequestBody Party party) {
        //Party party = new Party();
>>>>>>> Stashed changes
        PartyMember pm = new PartyMember();
        pm.setPartyPk(party.getPartyPk());
        pm.setUserPk(userPk);
        pmService.apply(pm); // 파티장 등록
        pmService.changePartyMemberState(pm, "수락");

        //return "redirect:/party";
    }

    private PartyDetail createPartyDetailObject(int partyPk) throws ParseException {

        Party party = partyService.findParty(partyPk).get();
        PartyDetail partyDetail = new PartyDetail(party); // 반환 객체

        Member session = memberSecurityService.findByLoginData();
        String userPk = session.getUserID();

        Festival festival = festivalService.findById(party.getFestPk()).orElse(null);
        LocalDate festivalDate = partyService.getFestEnd(festival);

        List<PartyMember> pmList = pmService.entireMemberList(partyPk);
        PartyMember sessionInPartyMember = pmService.findByUserPkAndPartyPk(userPk, partyPk).orElse(null);

        partyDetail.setPartyMemberList(pmList);
        partyDetail.decideState(sessionInPartyMember);

        // 파티 마감일이 지난 경우
        if(LocalDate.now().isAfter(festivalDate)){
            partyDetail.setFieldIfOutOfDate();
        }

        return partyDetail;
    }

    //TODO
    // -세션 없을 때 state 0 리턴
    @ResponseBody
    @GetMapping("/party/detail")
    public PartyDetail partyDetail(@RequestParam(name = "ppk") int partyPk) throws ParseException {

        PartyDetail partyDetail = createPartyDetailObject(partyPk);

        return partyDetail;
    }

    // state 1
    @GetMapping("party/join")
    public PartyDetail partyJoin(@RequestParam(name = "ppk") int partyPk) throws ParseException {

        Party party = partyService.findParty(partyPk).get();

        //파티가 모집중이 아닐 경우 거절
        if (!party.getPartyState().equals("모집")) {
            // 에러 메세지
            System.out.println("join refused");
            return partyDetail(partyPk);
            //return "redirect:/party";
        }

        //pm 추가
        PartyMember pm = new PartyMember();
        pm.setPartyPk(partyPk);

        //세션에서 userPK 가져오기
        Member session = memberSecurityService.findByLoginData();
        pm.setUserPk(session.getUserID());

        pmService.apply(pm);

        return partyDetail(partyPk);
        //return "redirect:/party";
    }

    // 거절, 강퇴, 신청 취소
    @GetMapping("/party/quit")
    public PartyDetail partyQuit(@RequestParam(name = "ppk") int partyPk) throws ParseException {

        Member session = memberSecurityService.findByLoginData();
        String userPk = session.getUserID();

        // 본인인 경우 또는 파티장인 경우에만 삭제버튼을 표시해서 권한 인증은 필요 없도록
        PartyMember pm = pmService.findByUserPkAndPartyPk(userPk, partyPk).get();
        pmService.deny(pm);

        return partyDetail(partyPk);
    }

    @ResponseBody
    @GetMapping("/party/close")
    public PartyDetail closeParty(@RequestParam(name = "ppk") int partyPk) throws ParseException {

        Party party = partyService.findParty(partyPk).get();

        if(!partyService.isAcceptable(party) || party.getPartyState().equals("모집")){
            party.setPartyState("마감");
        } else{
            party.setPartyState("모집");
        }

        return partyDetail(partyPk);
    }

    @ResponseBody
    @GetMapping("party/update")
    public Party updateParty(@RequestParam(name = "ppk") int partyPk) {

        Party party = partyService.findParty(partyPk).get();
        //model.addAttribute("party", party);

        return party;
        //return "/party/partyUpdate";
    }

    // 파티수정 기능 추후 구현
    /*@PostMapping("party/update")
    public String update(@RequestBody Party party) {

        partyService.update(party);

        return "redirect:/party";
    }*/

    @GetMapping("party/delete")
    public void delete(@RequestParam(name = "ppk") int partyPk) {

        partyService.delete(partyPk);

        //return "redirect:/party";
    }

    @GetMapping("/party/partyMemberUpdate")
    public PartyDetail partyMemberUpdate(@RequestParam(name="ppk") int partyPk, @RequestParam String action) throws ParseException {

        Member session = memberSecurityService.findByLoginData();
        String userPk = session.getUserID();
        Party party = partyService.findParty(partyPk).get();
        PartyMember pm = pmService.findByUserPkAndPartyPk(userPk, partyPk).get();

        if (action.equals("accept") && partyService.isAcceptable(party)) {
            pmService.changePartyMemberState(pm, "수락");
            //party에 현원 추가
            partyService.recruitCount(party, "add");
        } else if (action.equals("deny")) {
            pmService.deny(pm);
        } else if (action.equals("kick")) {
            pmService.deny(pm);
            partyService.recruitCount(party, "sub");
        }

        return partyDetail(partyPk);
        //return "redirect:/party/detail?ppk=" + partyPk;
    }
}
