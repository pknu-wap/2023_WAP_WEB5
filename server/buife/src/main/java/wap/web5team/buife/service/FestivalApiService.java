package wap.web5team.buife.service;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import wap.web5team.buife.domain.Festival;
import wap.web5team.buife.repository.FestivalRepository;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.net.URL;
import java.util.ArrayList;

/*@RequiredArgsConstructor //생성자 중에서 final 키워드가 붙은 주입에만 생성자를 만들어준다.*/
@Service
public class FestivalApiService {
    private final FestivalRepository festivalRepository;

    @Autowired
    public FestivalApiService(FestivalRepository festivalRepository) {
        this.festivalRepository = festivalRepository;
    }

    static final int CNT = 50;
    public void apiDataBaseUpdate(HttpServletRequest req, HttpServletResponse res) throws Exception { // festival DB 초기화 후 업데이트
        festivalRepository.deleteAll();
        String apiUrl= "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=wcWLBpm3TFnMbV5Js%2FeyKMCXiOmYGh6y%2FZmU7uvYiAzLEeMjyzH9yX4A5hQVtgBXqs7ZcjKZxW7nGrkjWMvgrw%3D%3D&MobileOS=ETC&MobileApp=test&contentTypeId=15&areaCode=6&_type=json";
        apiUrl+= "&numOfRows=" + CNT;
        req.setCharacterEncoding("utf-8");
        res.setContentType("text/html;charset=utf-8");
        //PrintWriter out = res.getWriter();

        URL url= new URL(apiUrl);
        InputStream in = url.openStream();
        ByteArrayOutputStream bos1 = new ByteArrayOutputStream();
        IOUtils.copy(in, bos1);
        in.close();
        bos1.close();
        String mbos = bos1.toString("UTF-8");
        byte[] b = mbos.getBytes("UTF-8"); // 문자열로 처리하기 위해 바이트단위로 변환
        String str = new String(b, "UTF-8"); // 변환된 바이트를 다시 String 객체로 생성 -> 문자열

        //out.println(str);
        //System.out.println(str);

        JSONParser parser = new JSONParser();
        Object obj = parser.parse(str); // json 형식의 String을 obj로 파싱
        JSONObject jsonObj = (JSONObject)obj; // obj를 jsonObj로 파싱
        JSONObject response = (JSONObject) jsonObj.get("response");
        JSONObject body = (JSONObject) response.get("body");
        JSONObject items = (JSONObject) body.get("items");
        JSONArray itemArray = (JSONArray) items.get("item");
        ArrayList<Festival> list = new ArrayList<>();

        for(int i=0;i<itemArray.size();i++) {
            JSONObject object = (JSONObject) itemArray.get(i);
            Festival festivalObj = new Festival();
            festivalObj.setContentId((String)object.get("contentid"));
            list.add(festivalObj);
            System.out.println(i+"번째 데이터 update: " +list.get(i).getContentId());
            searchAndSaveCommon(req,res,list.get(i)); // 공통정보 조회 및 저장(명칭, 번호, 주소, 위도, 경도, 개요, 이미지)
        }

        }
    public void searchAndSaveCommon(HttpServletRequest req, HttpServletResponse res,Festival festivalObj) throws Exception{
        String apiUrl="https://apis.data.go.kr/B551011/KorService1/detailCommon1?MobileOS=ETC&MobileApp=test&_type=json&contentTypeId=15&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&serviceKey=wcWLBpm3TFnMbV5Js%2FeyKMCXiOmYGh6y%2FZmU7uvYiAzLEeMjyzH9yX4A5hQVtgBXqs7ZcjKZxW7nGrkjWMvgrw%3D%3D";
        apiUrl+=("&contentId="+festivalObj.getContentId());

        //PrintWriter out = res.getWriter();
        URL url= new URL(apiUrl);
        InputStream in = url.openStream();
        ByteArrayOutputStream bos1 = new ByteArrayOutputStream();
        IOUtils.copy(in, bos1);
        in.close();
        bos1.close();
        String mbos = bos1.toString("UTF-8");
        byte[] b = mbos.getBytes("UTF-8");
        String str = new String(b, "UTF-8");
        //out.println(str);
        // System.out.println(str);

        JSONParser parser = new JSONParser();
        Object obj = parser.parse(str); // json 형식의 String을 obj로 파싱
        JSONObject jsonObj = (JSONObject)obj; // obj를 jsonObj로 파싱
        JSONObject response = (JSONObject) jsonObj.get("response");
        JSONObject body = (JSONObject) response.get("body");
        JSONObject items = (JSONObject) body.get("items");
        JSONArray itemArray = (JSONArray) items.get("item");

        JSONObject object = (JSONObject) itemArray.get(0);
        festivalObj.setName((String)object.get("title"));
        festivalObj.setPhone((String)object.get("tel"));
        festivalObj.setAddress((String)object.get("addr1") + (String)object.get("addr2"));
        festivalObj.setLatitude(Double.parseDouble((String)object.get("mapx")));
        festivalObj.setLongitude(Double.parseDouble((String)object.get("mapy")));
        festivalObj.setDetail((String)object.get("overview"));
        festivalObj.setImage((String)object.get("firstimage"));

        searchAndSaveDetail(req, res, festivalObj);
    }
    public void searchAndSaveDetail(HttpServletRequest req, HttpServletResponse res, Festival festivalObj) throws Exception{
        String apiUrl = "https://apis.data.go.kr/B551011/KorService1/detailIntro1?MobileOS=ETC&MobileApp=test&_type=json&contentTypeId=15&serviceKey=wcWLBpm3TFnMbV5Js%2FeyKMCXiOmYGh6y%2FZmU7uvYiAzLEeMjyzH9yX4A5hQVtgBXqs7ZcjKZxW7nGrkjWMvgrw%3D%3D";
        apiUrl+=("&contentId="+festivalObj.getContentId());

        //PrintWriter out = res.getWriter();
        URL url= new URL(apiUrl);
        InputStream in = url.openStream();
        ByteArrayOutputStream bos1 = new ByteArrayOutputStream();
        IOUtils.copy(in, bos1);
        in.close();
        bos1.close();
        String mbos = bos1.toString("UTF-8");
        byte[] b = mbos.getBytes("UTF-8");
        String str = new String(b, "UTF-8");
        // out.println(str);
        // System.out.println(str);

        JSONParser parser = new JSONParser();
        Object obj = parser.parse(str); // json 형식의 String을 obj로 파싱
        JSONObject jsonObj = (JSONObject)obj; // obj를 jsonObj로 파싱
        JSONObject response = (JSONObject) jsonObj.get("response");
        JSONObject body = (JSONObject) response.get("body");
        JSONObject items = (JSONObject) body.get("items");
        JSONArray itemArray = (JSONArray) items.get("item");

        JSONObject object = (JSONObject) itemArray.get(0);
        festivalObj.setStart((String)object.get("eventstartdate"));
        festivalObj.setEnd((String)object.get("eventenddate"));
        festivalObj.setTime((String)object.get("playtime"));
        festivalObj.setPlace((String)object.get("eventplace"));
        festivalObj.setFee((String)object.get("usetimefestival"));

        festivalRepository.save(festivalObj);
        //System.out.println("저장된 데이터 값 ");
        //System.out.println(festivalObj.getDetail());
        //System.out.println(festivalObj.getAddress());
        //System.out.println(festivalObj.getFee());
        //System.out.println(festivalObj.getEnd());
        //System.out.println(festivalObj.getName());
    }
}
