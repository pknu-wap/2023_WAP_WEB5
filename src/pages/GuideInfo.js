// src/components/GuideInfo.js
import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
    const params = useParams();
    console.log(params);
    const [festival, setFestival] = useState(null);

    useEffect(() => {
    const fetchFestivalData = async () => {
        try {
        const response = await fetch(`https://port-0-server-cloudtype-4fju66f2clmyxbee6.sel5.cloudtype.app/festival/read-one/${params.id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch festival data');
        }

        const festivalData = await response.json();
        setFestival(festivalData);
        } catch (error) {
        console.error('Error fetching festival data:', error);
        }
    };

    fetchFestivalData();
    }, [params.id]);

    if (!festival) {
    return <p>Loading...</p>;
    }

    return (
    <GuideContainer>
        <p>주소
            <Spanlist>{festival.address}</Spanlist>
        </p>
        <p>전화번호
            <Spanlist>{festival.phone}</Spanlist>
        </p>
        <p>홈페이지
            <Spanlist>임시</Spanlist>
        </p>
        <p>이용 요금
            <Spanlist>{festival.fee}</Spanlist>
        </p>
        <p>운영시간
            <Spanlist>{festival.time}</Spanlist>
        </p>
        <p>개최 장소
            <Spanlist>{festival.place}</Spanlist>
        </p>
        <p>개최 기간
            <Spanlist>{festival.start} ~ {festival.end}</Spanlist>
        </p>
        <p>교통 정보
            <Spanlist>임시: 대연역 1번 출구에서 도보 10분</Spanlist>
        </p>
    </GuideContainer>
    );
};

export default GuideInfo;
