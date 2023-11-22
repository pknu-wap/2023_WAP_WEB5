import React, { useState } from 'react';
import { Navigate } from 'react-router';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #488aee; /* 배경색 설정 */
  padding: 20px; /* 적절한 패딩 추가 */
  min-height: 100vh;
  
`;

const LogoImage = styled.img`
  width: 400px; /* 큰 로고 크기 */
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
  margin-bottom: 30px;
  margin-top: 30px;
  padding: 10px;
  border-radius: 200px;
  border: none;
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.4);
  
`;


const RoundedBox = styled.div`
  border-radius: 200px;
  width:700px;
  height:800px;
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
box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.2);
`;




const logobuife = '/info.png';


const SignUp3 =()=> {
  const location = useLocation();
  const userID = location.state?.userID || '';
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


            <p>인증번호가 {userID}으로 전송되었습니다. 인증번호 8자리를 아래에 입력해주세요.</p>
            <input type="text" placeholder="인증번호 입력" />

                    <LoginButton type="button"
                    className="loginButton">회원가입
                    </LoginButton>
                
            </InputContainer>
        
          </RoundedBox>
         </Container>
       </div>
     </div>
   </div>
 );
}



export default SignUp3;