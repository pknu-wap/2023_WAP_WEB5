// src/components/DetailInfo.js
import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const DetailImage = styled.img`
// border: 3px solid Red;
width: 30%;
height: 450px;
margin-left: 100px;
margin-right: 20px;
float: left;
`;

const Description = styled.div`
float: left;
margin-left: 50px;
`;

const DetailInfo = () => {
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
    <div>
        <Description>
        <DetailImage src={festival.image || process.env.PUBLIC_URL + '/mannerReview.png'}/>

                <p>축제 이름: {festival.name}</p>
                <p>축제 설명: {festival.detail}</p>
        </Description>
        
    </div>
    

    
    );
    };

export default DetailInfo;
