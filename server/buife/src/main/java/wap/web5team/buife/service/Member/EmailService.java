package wap.web5team.buife.service.Member;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import wap.web5team.buife.domain.Member;
import wap.web5team.buife.repository.TempMemberRepository;


import java.io.UnsupportedEncodingException;
import java.util.Random;

@Service
@Transactional
@RequiredArgsConstructor
public class EmailService {

    private final TempMemberRepository tempMemberRepository;
    private JavaMailSender emailSender;

    @Autowired
    public  EmailService(JavaMailSender emailSender,TempMemberRepository tempMemberRepository) {
        this.emailSender = emailSender;
        this.tempMemberRepository=tempMemberRepository;
    }
    private String authNum; // 인증 번호

    // 인증번호 8자리 무작위 생성
    public void createCode() {
        Random random = new Random();
        StringBuffer key = new StringBuffer();

        for(int i=0; i<8; i++) {
            int idx = random.nextInt(3);

            switch (idx) {
                case 0 :
                    key.append((char) ((int)random.nextInt(26) + 97));
                    break;
                case 1:
                    key.append((char) ((int)random.nextInt(26) + 65));
                    break;
                case 2:
                    key.append(random.nextInt(9));
                    break;
            }
        }
        authNum = key.toString();
    }


    public MimeMessage createEmailForm(String email) throws MessagingException, UnsupportedEncodingException {

        createCode();
        String setFrom = "ruddbs2410@naver.com";
        String toEmail = email;
        String title = "BUIFE 회원가입 인증번호";

        MimeMessage message = emailSender.createMimeMessage();
        message.setText("UTF-8", "html");
        message.addRecipients(MimeMessage.RecipientType.TO, toEmail);
        message.setSubject(title);

        // 메일 내용
        String msgOfEmail="";
        msgOfEmail += "<div style='margin:20px;'>";
        msgOfEmail += "<h1> 안녕하세요 BUIFE 입니다. </h1>";
        msgOfEmail += "<br>";
        msgOfEmail += "<p>아래 코드를 입력해주세요<p>";
        msgOfEmail += "<br>";
        msgOfEmail += "<p>감사합니다.<p>";
        msgOfEmail += "<br>";
        msgOfEmail += "<div align='center' style='border:1px solid black; font-family:verdana';>";
        msgOfEmail += "<h3 style='color:blue;'>회원가입 인증 코드입니다.</h3>";
        msgOfEmail += "<div style='font-size:130%'>";
        msgOfEmail += "CODE : <strong>";
        msgOfEmail += authNum + "</strong><div><br/> ";
        msgOfEmail += "</div>";

        message.setFrom(setFrom);
        message.setText(msgOfEmail, "utf-8", "html");

        return message;
    }


    public String sendEmail(String email) throws MessagingException, UnsupportedEncodingException {


        MimeMessage emailForm = createEmailForm(email);
        emailSender.send(emailForm);

        return authNum; //인증 코드 반환
    }

    public Member tempSave(Member member) {
        return tempMemberRepository.save(member);
    }

    public Member checkCode(String userID, String code) {
        if(tempMemberRepository.find(userID).getCode().equals(code))
            return tempMemberRepository.find(userID);
        return null;
    }

}