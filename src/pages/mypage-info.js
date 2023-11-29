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
    <h2>기본 정보</h2>
        <InfoItem>이메일 (ID): {userData.userID}</InfoItem>
        <InfoItem>생년월일: {userData.userBirth}</InfoItem>
        <InfoItem>사용자 이름: {userData.userName}</InfoItem>
        <InfoItem>성별: {userData.userGender}</InfoItem>
        <InfoItem>매너온도: {userData.userRating}</InfoItem>

    
</InfoContainer>


);
};

export default MyPageInfo;