package wap.web5team.buife.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import wap.web5team.buife.domain.*;
import wap.web5team.buife.service.FestivalService;
import wap.web5team.buife.service.PartyMemberService;
import wap.web5team.buife.service.PartyService;

import java.util.List;

@Controller
public class PartyController {

    private final PartyService partyService;
    private final PartyMemberService pmService;
    private final FestivalService festivalService;

    @Autowired
    public PartyController(PartyService partyService, PartyMemberService pmService, FestivalService festivalService) {
        this.partyService = partyService;
        this.pmService = pmService;
        this.festivalService = festivalService;
    }

    @ResponseBody
    @GetMapping("/party")
    public List<Party> partyMain() {

        List<Party> parties = partyService.partyList();
        //model.addAttribute("parties", parties);

        return parties;
        //return "party/partyMain";
    }

    @GetMapping("party/new")
    public String createParty() {
        return "party/partyCreate";
    }

    private ForeignKey fk = new ForeignKey();

    @PostMapping("party/new")
    public String create(@RequestBody Party party) {
        //Party party = new Party();
        PartyMember pm = new PartyMember();
        fk.fkSet();

        int enrollPartyPk = partyService.enroll(party);

        pm.setPartyPk(enrollPartyPk);
        pm.setUserPk(fk.getUserPk());
        pmService.apply(pm); // 파티장 등록
        pmService.changePartyMemberState(pm, "수락");

        return "redirect:/party";
    }

    //TODO
    // -세션 없을 때 state 0 리턴
    // -userPk를 세션으로 치환해서 구현
    // -Festival에서 축제 마감일 가져오기
    // FixMe
    // -party_member db와 party db 연동 안되는 이슈
    @ResponseBody
    @GetMapping("/party/detail")
    public PartyDetail partyDetail(@RequestParam(name = "upk") int userPk, @RequestParam(name = "ppk") int partyPk){

        PartyDetail partyDetail = new PartyDetail(); // 반환 객체

        Party party = partyService.findParty(partyPk).get();
        //LocalDate festivalDate = festivalService.getFestEnd(party.getFestPk()); // 파티 일자 받아오기

        List<PartyMember> pmList = pmService.entireMemberList(partyPk);
        PartyMember session = pmService.findByUserPkAndPartyPk(userPk, partyPk).get();

        partyDetail.setPartyMemberList(pmList, party);
        partyDetail.setStateAndPartyPk(session, party);
        partyDetail.setSession(userPk);
        partyDetail.setHost(party.getUserPk());
        partyDetail.setPartyPk(party.getPartyPk());

        // 파티 마감일이 지난 경우
        /*if(LocalDate.now().isAfter(festivalDate)){
            partyDetail.setFieldIfOutOfDate();
        }*/

        return partyDetail;
    }

    // state 1
    @GetMapping("party/join")
    public String partyJoin(@RequestParam(name = "ppk") int partyPk, @RequestParam(name = "upk") int userPk) {

        Party party = partyService.findParty(partyPk).get();

        //파티가 모집중이 아닐 경우 거절
        if (!party.getPartyState().equals("모집")) {
            // 에러 메세지
            System.out.println("join refused");
            return "redirect:/party";
        }

        //pm 추가
        PartyMember pm = new PartyMember();
        pm.setPartyPk(partyPk);

        //세션에서 userPK 가져오기
        fk.fkSet();
        pm.setUserPk(fk.getUserPk());

        pmService.apply(pm);

        return "redirect:/party";
    }

    // 거절, 강퇴, 신청 취소
    @GetMapping("/party/quit")
    public String partyQuit(@RequestBody PartyDetail partyDetail){

        int partyPk = partyDetail.getSession();
        int userPk = partyDetail.getPartyPk();

        // 본인인 경우 또는 파티장인 경우에만 삭제버튼을 표시해서 권한 인증은 필요 없도록
        PartyMember partyMember = pmService.findByUserPkAndPartyPk(partyPk, userPk).get();
        pmService.deny(partyMember);

        return "redirect:/party/detail?ppk="+partyPk+"upk="+userPk;
    }

    @ResponseBody
    @GetMapping("/party/close")
    public PartyDetail closeParty(@RequestBody PartyDetail partyDetail){

        Party party = partyService.findParty(partyDetail.getPartyPk()).get();

        if(!partyService.isAcceptable(party) || partyDetail.getState()==4){
            partyDetail.setState(5);
            party.setPartyState("마감");

        } else if(partyDetail.getState()==5){
            partyDetail.setState(4);
            party.setPartyState("모집");
        }

        return partyDetail;
    }

    @ResponseBody
    @GetMapping("party/update")
    public Party updateParty(@RequestParam(name = "ppk") int partyPk) {

        Party party = partyService.findParty(partyPk).get();
        //model.addAttribute("party", party);

        return party;
        //return "/party/partyUpdate";
    }

    @PostMapping("party/update")
    public String update(@RequestBody Party party) {

        //FixMe
        // 어케 수정해야할까
        partyService.update(party);

        return "redirect:/party";
    }

    @GetMapping("party/delete")
    public String delete(@RequestParam(name = "ppk") int partyPk) {

        partyService.delete(partyPk);

        return "redirect:/party";
    }

    @GetMapping("/party/partyMemberUpdate")
    public String partyMemberUpdate(@RequestParam(name="pmpk") int pmPk, @RequestParam(name="ppk") int partyPk, @RequestParam String action) {

        PartyMember pm = pmService.findByPartyMemberPk(pmPk).get();
        Party party = partyService.findParty(partyPk).get();

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

        return "redirect:/party/detail?ppk=" + partyPk;
    }
}
