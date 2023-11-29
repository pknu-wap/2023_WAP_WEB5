import React, { useState } from 'react';
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import qs from "qs";




const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #488aee; /* 배경색 설정 */
  padding: 20px; /* 적절한 패딩 추가 */
  min-height: 95vh;
`;

const LogoImage = styled.img`
  width: 300px; /* 큰 로고 크기 */
  height: auto;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 200px;
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HiImage = styled.img`
  width: 250px; /* 더 큰 이미지 크기 */
  height: auto;
`;

const ExcitedImage = styled.img`
  width: auto; /* 더 큰 이미지 크기 */
  height: 150px;
`;
const RoundedBox = styled.div`
  border-radius: 200px;
  width:700px;
  padding: 70px;
  background-color: #91B9F5; /* 배경색 설정 */
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.2); /* 그림자 효과 */
  margin-top: 50px;
`;
const LoginButton = styled.button`
display: block;
width: 200px; /* 버튼이 컨테이너의 가로 길이를 가지도록 함 */
background-color: #0066ff;
color: white;
border: none;
border-radius: 200px;
padding: 10px 20px;
font-size: 16px;
cursor: pointer;
`;

const SignupContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const SignupLine = styled.div`
  width: 100%;
  border-top: 1px solid white;
  margin: 20px 0;
`;

const SignupText = styled.p`
  color: black;
  font-size: 20px;
  margin: 0;
`;

const SignupButton = styled.button`
  background-color: #0066ff;
  color: white;
  border: none;
  border-radius: 200px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;


const logobuife = '/info.png';
const hiImage = '/백경이(hi).png';
const excitedImage = '/뿌공이(신남).png';


const LoginForm=()=> {
  const [userID, setuserID] = useState('');
  const [userPW, setuserPW] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {

      
      const params = new URLSearchParams();
      params.append('userID', userID);
      params.append('userPW', userPW);

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
 
        },
        credentials : 'include',
        body: params,
      };
    
  

      const response = await fetch('https://port-0-server-cloudtype-4fju66f2clmyxbee6.sel5.cloudtype.app/members/login', requestOptions);
      
      if (!response.ok) {
        throw new Error('서버 응답이 실패했습니다.');
      }
      setLoggedIn(true);
      const data = await response.text();
      //userID를 확인하기 위한 alert
      window.location.href = '/'; // URL 변경 // 로그인이 성공했을 때의 로직
       console.log(data); // 서버에서 받은 데이터 확인
      

      

       //로그인이 성공하면 다음페이지로 이동 
    } catch (error) {
      console.error('로그인 실패:', error);
      alert('아이디 또는 패스워드를 확인해주세요!');
      // 로그인 실패 시의 처리 로직을 추가하세요
    }
  };


  /*const handleLogin = async()=>{
    try {
      const response = await axios.post('https://port-0-buife-5mk12alp6foaqx.sel5.cloudtype.app/members/login', qs.stringify({
        userID: userID,
        userPW: userPW,
      }), {
        method: 'POST',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",	// Default
        },})
        console.log(response.data);
    } catch (error) {
      // 로그인 실패 시 에러 처리
      console.error('로그인 실패:', error.message);
    }
    
  };*/
  

  /*const handleLogin = async () => {
    try {
      const response = await axios.post('https://port-0-buife-5mk12alp6foaqx.sel5.cloudtype.app/members/login', {
        userID: userID,
        userPW: userPW,
      });

      // 서버에서 응답 처리
      console.log(response.data); // 서버에서 받은 데이터 확인
      // 성공적으로 로그인되었음을 처리하는 로직 추가
    } catch (error) {
      // 로그인 실패 시 에러 처리
      console.error('로그인 실패:', error.message);
    }
  };*/
  
 return (
   <div className="App">
     <div className="mainpage">
       
       <div className="mainbox">
        <Container>
          <RoundedBox>
          <Link to="/.">
            <LogoImage src={logobuife} alt="Buife 로고" />
          </Link>
        
            <InputContainer>
              <Input type="text" placeholder="이메일" onChange={(e) => setuserID(e.target.value)}/>
              <Input type="password" placeholder="비밀번호" onChange={(e) => setuserPW(e.target.value)}/>

  
            <LoginButton type="button" onClick={handleLogin}
            className="loginButton">로그인
            </LoginButton>
            </InputContainer>
            
            <SignupLine />
          
            <SignupContainer>
              <SignupText>아직 BUIFE 회원이 아니신가요?</SignupText>
                <Link to="/signup2"><SignupButton>회원가입</SignupButton></Link>
                
            </SignupContainer>


            <ImagesContainer>
            <ExcitedImage src={excitedImage} alt="뿌공이" />
            <HiImage src={hiImage} alt="백경이" />
            
            </ImagesContainer>

              
          </RoundedBox>
         </Container>
       </div>
     </div>
   </div>
 );
}



export default LoginForm;