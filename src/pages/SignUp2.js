import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DropdownComponent from './DropdownComponent';

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
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 200px;
  margin-top:20px;
  border:none;
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.2);
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
margin-top:10px;
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

const GenderSelector = ({ setUserGender }) => {
  const [selectedGender, setSelectedGender] = useState('Male'); // 초기값: Male

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
    setUserGender(e.target.value);
  };

  return (
    <div>
      <label>
        남성
        <input
          type="radio"
          value="Male"
          checked={selectedGender === 'Male'}
          onChange={handleGenderChange}
        />
      </label>
      <label>
        여성
        <input
          type="radio"
          value="Female"
          checked={selectedGender === 'Female'}
          onChange={handleGenderChange}
        />
      </label>
    </div>
  );
};

const SignUp2=()=> {
  const [userID, setUserID] = useState('');
  const [userPW, setUserPW] = useState('');
  const [userPWCheck,setUserPWCheck] = useState('');
  const [userBirth, setUserBirth] = useState('');
  const [userName, setUserName] = useState('');
  const [userGender, setUserGender] = useState('Male');

  const handleDateSelection = (year, month, day) => {
    // 여기서 year, month, day는 DropdownComponent에서 선택된 값들입니다.
    const formattedDate = `${year}-${month}-${day}`;
    setUserBirth(formattedDate);
  };

  // API로 데이터 전송할 때 userBirth 사용
  const handleSubmit = async () => {
    // ...
      
    try{
      const data = {
        userID: userID,
        userPW: userPW,
        userPWCheck: userPWCheck,
        userName: userName,
        userBirth: userBirth,
        userGender: userGender,
      };

          
      const response = await fetch('https://port-0-server-cloudtype-4fju66f2clmyxbee6.sel5.cloudtype.app/members/new', {
        method: 'POST',
        credentials : 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log(data)
      if (response.ok) {
        // 성공적으로 응답을 받은 경우
        // 여기에서 페이지 이동 등을 수행할 수 있습니다.
      } else {
        // 응답이 실패한 경우
        throw new Error('회원가입에 실패했습니다.');
      }
    } catch (error) {

      alert(error.message);
      
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
              <Input 
                type="text" 
                placeholder="닉네임" 
                value={userName}
                onChange={(e)=> setUserName(e.target.value)}
              />
                  
              <DropdownComponent onDateSelected={handleDateSelection}/>
                          
              <Input type="text" 
              placeholder="이메일"  
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
              />

              <Input 
              type="password" 
              placeholder="비밀번호" 
              value={userPW}
              onChange={(e)=> setUserPW(e.target.value)}
              />

              <Input 
              type="password" 
              placeholder="비밀번호 확인"
              value={userPWCheck}
              onChange={(e)=>setUserPWCheck(e.target.value)} 
              />
                  
                  <GenderSelector setUserGender={setUserGender} />
                
                <Link to={{ pathname: "/signup3", state: { userID: userID } }}>
                  <NextButton 
                  type="button" 
                  className="nextButton"
                  onClick={handleSubmit}
                  >다음 페이지</NextButton>
                </Link>

                <Link to="/loginform">
                    <BackButton type="button"
                    className="backButton">뒤로가기
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



export default SignUp2;