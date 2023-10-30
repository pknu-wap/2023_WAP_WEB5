    import React from 'react';
    import styled from 'styled-components';

    const InfoContainer = styled.div`
    text-align: center;
    margin-bottom: 20px;
    `;
    const InfoItem = styled.div`
    margin-bottom: 10px;
    `;

    const infoData = [
    '아이디 testid1234',
    '생년월일 2003년 1월 3일',
    '닉네임 testnickname',
    '성별 여',
    ];

    const MyPageInfo = () => {
    return (
    <InfoContainer>
        <h2>기본 정보</h2>
        {infoData.map((info, index) => (
        <InfoItem key={index}>{info}</InfoItem>
        ))}
    </InfoContainer>

    
    );
    };

    export default MyPageInfo;
