import React, { useState } from 'react';
import { Navigate } from 'react-router';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #488aee; /* 배경색 설정 */
  padding: 20px; /* 적절한 패딩 추가 */
  min-height: 95vh;
`;

const LogoImage = styled.img`
  width: 800px; /* 큰 로고 크기 */
  height: auto;
  margin-top: -400px;
  margin-bottom: -350px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 200px;
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





const logobuife = '/logobuife.png';
const hiImage = '/백경이(hi).png';
const excitedImage = '/뿌공이(신남).png';



function SignUp() {

 return (
   <div className="App">
     <div className="mainpage">
       
       <div className="mainbox">
        <Container>
          <RoundedBox>
            <LogoImage src={logobuife} alt="Buife 로고" />

        
            <InputContainer>
              <Input type="text" placeholder="이메일" />
              <Input type="password" placeholder="비밀번호" />
              <Input type="password" placeholder="비밀번호 확인" />

  
                <Link to="signup2">
                    <LoginButton type="button"
                    className="loginButton">다음 페이지
                    </LoginButton>
                </Link>
            </InputContainer>
        

              
          </RoundedBox>
         </Container>
       </div>
     </div>
   </div>
 );
}



export default SignUp;