package wap.web5team.buife.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import wap.web5team.buife.domain.ForeignKey;
import wap.web5team.buife.domain.Party;
import wap.web5team.buife.domain.PartyDetail;
import wap.web5team.buife.domain.PartyMember;
import wap.web5team.buife.service.PartyMemberService;
import wap.web5team.buife.service.PartyService;

import java.time.LocalDate;
import java.util.List;
import java.util.Random;

@Controller
public class PartyController {


    private final PartyService partyService;
    private final PartyMemberService pmService;

    @Autowired
    public PartyController(PartyService partyService, PartyMemberService pmService) {
        this.partyService = partyService;
        this.pmService = pmService;
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

    @ResponseBody
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

        //TODO
        // -deniedPartyMemberList() 동작 확인해봐야 함
        if (party.getPartyState().equals("마감")) {
            List<PartyMember> deniedPms = pmService.deniedPartyMemberList(partyPk);
            for (PartyMember item : deniedPms) {
                pmService.deny(item);
            }
        }

        return "redirect:/party";
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

        PartyMember pm = pmService.findMember(pmPk).get();
        Party party = partyService.findParty(partyPk).get();

        if (partyService.isAcceptable(action, party)) {
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
        LocalDate festivalDate; // 파티 일자 받아오기
        List<PartyMember> pmList = pmService.memberList(partyPk);

        partyDetail.setPartyMemberList(pmList, party);
        partyDetail.setState(pmList, userPk);

        // 파티 마감일이 지난 경우
        /*if(LocalDate.now().isAfter(festivalDate)){
            partyDetail.setFieldIfOutOfDate();
        }*/

        return partyDetail;
    }
}
