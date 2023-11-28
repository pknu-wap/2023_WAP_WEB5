//     // import React from 'react';
//     import styled from 'styled-components';
//     import React, { useState, useEffect } from 'react';

//     const InfoContainer = styled.div`
//     text-align: center;
//     margin-bottom: 20px;
//     `;
//     const InfoItem = styled.div`
//     margin-bottom: 10px;
//     `;

//     // 
    
//     // ... (이전 코드 부분은 변경되지 않음)

// const MyPageInfo = () => {
//     const [userDataArray, setUserDataArray] = useState([]);
//     const loggedInUserId = 'donggunmaru@gmail.com'; // 예시로 로그인된 사용자 ID가 1인 경우를 가정
  
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
//             setUserDataArray(data); // 전체 데이터 배열을 가져옴
//           })
//           .catch(error => {
//             console.error('Error fetching user data:', error);
//           });
//       };
  
//       fetchData();
//     }, []);
  
//     // 로그인된 사용자의 정보만 필터링
//     const loggedInUserInfo = userDataArray.find(user => user.userID === loggedInUserId);
  
//     return (
//       <InfoContainer>
//         <h2>임시 기본 정보</h2>
//         {loggedInUserInfo && (
//           <div>
//             <InfoItem>{loggedInUserInfo.userID}</InfoItem>
//             <InfoItem>{loggedInUserInfo.userBirth}</InfoItem>
//             <InfoItem>{loggedInUserInfo.userName}</InfoItem>
//             <InfoItem>{loggedInUserInfo.userGender}</InfoItem>
//           </div>
//         )}
//       </InfoContainer>
//     );
//   };
  
//   export default MyPageInfo;
  

 // import React from 'react';
 import styled from 'styled-components';
 import React, { useState, useEffect } from 'react';

 const InfoContainer = styled.div`
 text-align: center;
 margin-bottom: 20px;
 `;
 const InfoItem = styled.div`
 margin-bottom: 10px;
 `;

 const MyPageInfo = () => {
     const [userData, setUserData] = useState([]);

     useEffect(() => {
     const fetchData = () => {
         fetch('https://port-0-server-cloudtype-4fju66f2clmyxbee6.sel5.cloudtype.app/mypage',
         {
            credentials : 'include'
         })
         .then(response => {
             if (!response.ok) {
             throw new Error('Network response was not ok');
             }
             return response.json();
         })
         .then(data => {
             console.log(`받아온 데이터:`, data); //정상 동작 확인 완료
             setUserData(data); // 전체 데이터 배열을 가져옴
         })
         .catch(error => {
             console.error('Error fetching user data:', error);
         });
     };

     fetchData();
     }, []);

 return (
 <InfoContainer>
     <h2>임시 기본 정보</h2>
         <InfoItem>{userData.userID}</InfoItem>
         <InfoItem>{userData.userBirth}</InfoItem>
         <InfoItem>{userData.userName}</InfoItem>
         <InfoItem>{userData.userGender}</InfoItem>
         <InfoItem>{userData.userRating}</InfoItem>

     
 </InfoContainer>

 
 );
 };

 export default MyPageInfo;