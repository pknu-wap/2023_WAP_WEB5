/* global kakao */
import React, { useEffect, useState } from 'react';

const { kakao } = window;

const MapTest = () => {
    const [map, setMap] = useState(null);
    const [userMarker, setUserMarker] = useState(null);

    // 처음 지도 그리기
    useEffect(() => {
    const container = document.getElementById('map');
    const options = { center: new kakao.maps.LatLng(33.450701, 126.570667) };
    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);

    // 사용자의 현재 위치를 가져와 지도 중앙으로 이동
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const userPosition = new kakao.maps.LatLng(lat, lng);
        kakaoMap.panTo(userPosition);

        // 사용자의 현재 위치에 Marker 표시
        const marker = new kakao.maps.Marker({
            position: userPosition,
            map: kakaoMap,
            icon: new kakao.maps.MarkerImage(
            'https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png',
            new kakao.maps.Size(32, 32),
            {
                offset: new kakao.maps.Point(16, 32),
            }
            ),
        });
        setUserMarker(marker);
        });
    }
    }, []);

    return (
    <div
        style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '5px',
        marginRight: '5px',
        marginTop: '10px',
        marginBottom: '20px',
        }}
    >
        <div id="map" style={{ width: '60%', height: '500px' }}></div>
    </div>
    );
};

export default MapTest;
