package wap.web5team.buife.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import wap.web5team.buife.domain.ForeignKey;
import wap.web5team.buife.domain.Party;
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

    /**
     * 파티 메인페이지
     */
      @ResponseBody
    @GetMapping("/party")
    public List<Party> partyMain(){

        List<Party> parties = partyService.partyList();
        //model.addAttribute("parties", parties);

        return parties;
        //return "party/partyMain";
    }

    /**
     * 파티 생성페이지
     */
    @ResponseBody
    @GetMapping("party/new")
    public String createParty(){
        return "party/partyCreate";
    }

    private ForeignKey fk = new ForeignKey();

    /**
     * 파티 생성
     * @param form
     */
    @ResponseBody
    @PostMapping("party/new")
    public Party create(PartyForm form) {
        Party party = new Party();
        PartyMember pm = new PartyMember();
        fk.fkSet();

        party.setFestPk(fk.getFestPk());
        party.setUserPk(fk.getUserPk());
        party.setPartyRecruitLimit(form.getPartyRecruitLimit());
        party.setPartyChatUrl(form.getPartyChatUrl());
        party.setPartyStart(LocalDate.now());
        party.setPartyDetail(form.getPartyDetail());
        party.setPartyTag(form.getPartyTag());

        //마감일 set
        LocalDate tmp = LocalDate.parse(form.getPartyEnd());
        party.setPartyEnd(tmp);

        int enrollPartyPk = partyService.enroll(party);

        pm.setPartyPk(enrollPartyPk);
        pm.setUserPk(fk.getUserPk());
        pmService.apply(pm); // 파티장 등록
        pmService.changePartyMemberState(pm, "수락");

        return party;
        //return "redirect:/party";
    }

    /**
     * 파티 참가
     * @param partyPk
     * @param userPk
     */
    @ResponseBody
    @GetMapping("party/join")
    public String partyJoin(@RequestParam(name="ppk")int partyPk, @RequestParam(name="upk")int userPk){

        Party party = partyService.findParty(partyPk).get();

        //파티가 모집중이 아닐 경우 거절
        if(!party.getPartyState().equals("모집")){
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

        // 파티 마감일 경우 수락 대기중인 pm 제거
        if(party.getPartyState().equals("마감")){
            List<PartyMember> deniedPms = pmService.deniedPartyMemberList(partyPk);
            for (PartyMember item:
                 deniedPms) {
                pmService.deny(item);
            }
        }

        return "redirect:/party";
    }

    /**
     * 파티 수정
     * @param model
     * @param partyPk
     */
    @ResponseBody
    @GetMapping("party/update")
    public Party updateParty(Model model, @RequestParam(name="ppk") int partyPk){

        Party party = partyService.findParty(partyPk).get();
        //model.addAttribute("party", party);

        return party;
        //return "/party/partyUpdate";
    }

    @PostMapping("party/update")
    public String update(PartyForm form){

        Party party = new Party();

        party.setPartyPk(form.getPartyPk());
        party.setFestPk(form.getFestPk());
        party.setPartyRecruitLimit(form.getPartyRecruitLimit());
        party.setPartyChatUrl(form.getPartyChatUrl());
        party.setPartyDetail(form.getPartyDetail());
        party.setPartyTag(form.getPartyTag());

        LocalDate tmp = LocalDate.parse(form.getPartyEnd());
        party.setPartyEnd(tmp);

        partyService.update(party);


        return "redirect:/party";
    }

    /**
     * 파티 삭제
     * @param partyPk
     */
    @GetMapping("party/delete")
    public String delete(@RequestParam(name="ppk")int partyPk){

        partyService.delete(partyPk);

        return "redirect:/party";
    }

    /**
     * 파티 멤버 조회
     * @param ppk
     */
    @ResponseBody
    @GetMapping("/party/detail")
    public List<PartyMember> partyDetail(Model model, @RequestParam int ppk){

        List<PartyMember> partyMembers = pmService.memberList(ppk);
        model.addAttribute("pms", partyMembers);

        return partyMembers;
        //return "party/partyDetail";
    }

    /*
    파티 멤버 수정
     */
    @GetMapping("/party/partyMemberUpdate")
    public String partyMemberUpdate(@RequestParam int pmpk, @RequestParam int ppk, @RequestParam String action){

        PartyMember pm = pmService.findMember(pmpk).get();
        Party party = partyService.findParty(ppk).get();

        if(action.equals("accept")&&party.getPartyRecruitCurr()<party.getPartyRecruitLimit()){
            pmService.changePartyMemberState(pm, "수락");
            //party에 현원 추가
            partyService.recruitCount(party, "add");
        } else if(action.equals("deny")){
            pmService.deny(pm);
        } else if (action.equals("kick")) {
            pmService.deny(pm);
            partyService.recruitCount(party, "sub");
        }

        return "redirect:/party/detail?ppk=" + ppk;
    }
}
