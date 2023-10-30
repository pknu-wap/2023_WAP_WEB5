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
const GuideInfo = () => {
    return (
    <GuideContainer>
        <p>주소
            <Spanlist>부산광역시 남구 대연동</Spanlist>
        </p>
        <p>전화번호
            <Spanlist>051-607-6362</Spanlist>
        </p>
        <p>홈페이지</p>
        <p>이용 요금
            <Spanlist>무료</Spanlist>
        </p>
        <p>요일 및 시간
            <Spanlist>연중무휴</Spanlist>
        </p>
        <p>교통 정보
            <Spanlist>지하철 2호선 대연역 1번 출구에서 도보 10분</Spanlist>
        </p>
    </GuideContainer>
    );
};

export default GuideInfo;
