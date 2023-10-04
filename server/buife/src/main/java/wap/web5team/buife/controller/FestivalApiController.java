package wap.web5team.buife.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import wap.web5team.buife.service.FestivalApiService;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.PrintWriter;
import java.net.URL;

@RequestMapping("/festival")
@Controller
public class FestivalApiController {
    @Autowired
    FestivalApiService festivalApiService;
    @GetMapping("/update")
    public void apiDataBaseUpdate(HttpServletRequest req, HttpServletResponse res) throws Exception {
        festivalApiService.apiDataBaseUpdate(req, res);
    }
}
