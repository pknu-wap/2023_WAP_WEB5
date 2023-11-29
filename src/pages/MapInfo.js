// src/components/MapInfo.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FestivalMap from './festival-map.js';
// import { Link } from 'react-router-dom';

const MapInfo = () => {
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

    // const latitude = festival.latitude;
    // const longitude = festival.longitude;
    return (
    <div>
        <h2>지도</h2>
        {/* <FestivalMap /> */}
        {/* <FestivalMap /> */}
        
        <p>지도 탭입니다. 여기에 위치 정보나 지도가 표시될 수 있습니다.</p>
        <div className="Map"> 
        <FestivalMap/>
        </div>
    </div>
    );
};

export default MapInfo;
