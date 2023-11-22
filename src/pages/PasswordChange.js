import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

    const PasswordChangeContainer = styled.div`
    text-align: center;
    padding-top: 10px;
    padding-bottom:20px;
    `;

    const PasswordInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

    const PasswordInput = styled.input`
    margin-bottom: 10px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 15%;
    `;

    const ShowPasswordIcon = styled.span`
    position: relative;
    top: -36.5px;
    left: 120px;
    cursor: pointer;
    font-size: 18px;
    color: #777;
    transition: color 0.3s;

    &:hover {
    color: #488AEE;
    }
    `;

    const RequirementText = styled.p`
    font-size: 12px;
    color: #777;
    `;

    const SubmitButton = styled.button`
    background-color: #488AEE;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    `;

    const PasswordChange = () => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = () => {
    // 등록 버튼을 눌렀을 때 처리하는 로직 추가
    alert('수정되었습니다.');
    };
    // const [userDataArray, setUserDataArray] = useState([]);

    //     useEffect(() => {
    //     const fetchData = () => {
    //         fetch('https://cors-anywhere.herokuapp.com/https://port-0-buife-5mk12alp6foaqx.sel5.cloudtype.app/members')
    //         .then(response => {
    //             if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             console.log(`받아온 데이터:`, data); //정상 동작 확인 완료
    //             setUserDataArray(data); // 전체 데이터 배열을 가져옴
    //         })
    //         .catch(error => {
    //             console.error('Error fetching user data:', error);
    //         });
    //     };

    //     fetchData();
    //     }, []);

    return (
    <PasswordChangeContainer>
        <h2>비밀번호 변경</h2>
        <PasswordInputContainer>
        <PasswordInput
            type={showPassword ? 'text' : 'password'}
            placeholder="현재 비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <ShowPasswordIcon onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? '🙈' : '👁️'}
        </ShowPasswordIcon>
        </PasswordInputContainer>
        <PasswordInputContainer>
        <PasswordInput
            type={showPassword ? 'text' : 'password'}
            placeholder="새 비밀번호"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
        />
        <ShowPasswordIcon onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? '🙈' : '👁️'}
        </ShowPasswordIcon>
        </PasswordInputContainer>
        <PasswordInputContainer>
        <PasswordInput
            type={showPassword ? 'text' : 'password'}
            placeholder="새 비밀번호 확인"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
        <ShowPasswordIcon onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? '🙈' : '👁️'}
        </ShowPasswordIcon>
        </PasswordInputContainer>
        <RequirementText>
        * 비밀번호 요건: 8자 이상, 대문자, 숫자, 특수문자를 포함해야 합니다.
        </RequirementText>
        <SubmitButton onClick={handleSubmit}>등록</SubmitButton>
    </PasswordChangeContainer>
    );
    };

export default PasswordChange;

//서버의 로직 연동해서 수정

// // ... (이전 코드 부분은 변경되지 않음)

// const PasswordChange = () => {
//     const [password, setPassword] = useState('');
//     const [newPassword, setNewPassword] = useState('');
//     const [confirmNewPassword, setConfirmNewPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [userDataArray, setUserDataArray] = useState([]);
//     const [warningMessage, setWarningMessage] = useState('');
  
//     const handleSubmit = () => {
//       // 등록 버튼을 눌렀을 때 처리하는 로직 추가
//       // 현재 비밀번호 확인
//       const currentUser = userDataArray.find(user => user.id === 1); // 예시로 사용자 ID가 1인 경우를 가정
//       if (currentUser && currentUser.password === password) {
//         // 현재 비밀번호가 서버에 저장된 비밀번호와 일치하는 경우
//         alert('수정되었습니다.');
//         setWarningMessage(''); // 경고 메시지 초기화
//       } else {
//         // 현재 비밀번호가 서버에 저장된 비밀번호와 일치하지 않는 경우
//         setWarningMessage('현재 비밀번호가 일치하지 않습니다.');
//       }
//     };
  
//     useEffect(() => {
//       const fetchData = () => {
//         fetch('https://cors-anywhere.herokuapp.com/https://port-0-buife-5mk12alp6foaqx.sel5.cloudtype.app/members')
//           .then(response => {
//             if (!response.ok) {
//               throw new Error('Network response was not ok');
//             }
//             return response.json();
//           })
//           .then(data => {
//             console.log(`받아온 데이터:`, data);
//             setUserDataArray(data);
//           })
//           .catch(error => {
//             console.error('Error fetching user data:', error);
//           });
//       };
  
//       fetchData();
//     }, []);
  
//     return (
//       <PasswordChangeContainer>
//         <h2>비밀번호 변경</h2>
//         {warningMessage && <p style={{ color: 'red' }}>{warningMessage}</p>}
//         {/* 나머지 코드는 변경되지 않음 */}
//       </PasswordChangeContainer>
//     );
//   };
  
//   export default PasswordChange;
  