import React, { useState } from 'react';
import { Navigate } from 'react-router';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #488aee; /* 배경색 설정 */
  padding: 20px; /* 적절한 패딩 추가 */
  min-height: 100vh;
  
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
const NextButton = styled.button`
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




function SignUp() {
  const [userID, setUserID] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    navigate(`/signup3`,{state:{ userID }});
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
              <Input type="text" 
              placeholder="이메일"  
              value={userID}
              onChange={(e) => setUserID(e.target.value)}/>
              <Input type="password" placeholder="비밀번호" />
              <Input type="password" placeholder="비밀번호 확인" />

  
                
                    <NextButton 
                    type="button"
                    className="loginButton"
                    onClick={handleNext}
                    >다음 페이지
                    </NextButton>
               
            </InputContainer>
        

              
          </RoundedBox>
         </Container>
       </div>
     </div>
   </div>
 );
}



export default SignUp;