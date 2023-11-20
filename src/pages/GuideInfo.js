// src/components/GuideInfo.js
import React from 'react';
import styled from 'styled-components';

const GuideContainer = styled.div`
text-align: left;
margin: 0 auto;
max-width: 400px;
padding-top:20px;
`

const Spanlist = styled.span`
margin-left: 10px;
color: Gray;
`
const GuideInfo = ({ festData }) => {
    const { phone, address,start, end, time, place, fee } = festData;
    return (
    <GuideContainer>
        <p>주소
            <Spanlist>{address}</Spanlist>
        </p>
        <p>전화번호
            <Spanlist>{phone}</Spanlist>
        </p>
        <p>홈페이지
            <Spanlist>임시</Spanlist>
        </p>
        <p>이용 요금
            <Spanlist>{fee}</Spanlist>
        </p>
        <p>운영시간
            <Spanlist>{time}</Spanlist>
        </p>
        <p>개최 장소
            <Spanlist>{place}</Spanlist>
        </p>
        <p>개최 기간
            <Spanlist>{start} ~ {end}</Spanlist>
        </p>
        <p>교통 정보
            <Spanlist>임시: 대연역 1번 출구에서 도보 10분</Spanlist>
        </p>
    </GuideContainer>
    );
};

export default GuideInfo;
