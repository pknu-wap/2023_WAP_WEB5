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
const SignUpButton = styled.button`
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
margin-top:20px;
`;

const BackButton = styled.button`
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
margin-top:20px;
`;



const logobuife = '/info.png';


const SignUp3 =()=> {
  const location = useLocation();
  const userID = location.state?.userID || '';
  const [code, setCode] = useState('');

  
  const handleSubmit = async () => {
    try {

      
      const params = new URLSearchParams();
      params.append('code', code);


      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
 
        },
        credentials : 'include',
        body: params.toString(),
      };
   
  

      const response = await fetch('https://port-0-server-cloudtype-4fju66f2clmyxbee6.sel5.cloudtype.app/members/new/emailCheck', requestOptions);
      
      if (!response.ok) {
        throw new Error('서버 응답이 실패했습니다🔐.');
      }

      const data = await response.text();
      window.location.href = '/loginform'; // URL 변경 // 로그인이 성공했을 때의 로직
       console.log(data); // 서버에서 받은 데이터 확인

       //로그인이 성공하면 다음페이지로 이동 
    } catch (error) {
      console.error('회원가입 실패:', error);
 
      // 로그인 실패 시의 처리 로직을 추가하세요
    }
  };
 
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
            <Input
             type="text" 
             placeholder="인증번호 입력"
             onChange={(e) => setCode(e.target.value)}
            />

                    <SignUpButton 
                    type="button"
                    className="signupButton"
                    onClick={handleSubmit}
                    >회원가입
                    </SignUpButton>
                    
                    <Link to="/signup2">
                    <BackButton type="button"
                    className="BackButton">뒤로가기
                    </BackButton>
                    </Link>

            </InputContainer>
        
          </RoundedBox>
         </Container>
       </div>
     </div>
   </div>
 );
}



export default SignUp3;