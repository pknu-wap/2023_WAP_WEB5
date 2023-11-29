// import { useEffect, useState } from "react";
// import { useParams } from 'react-router-dom';

// const { kakao } = window;

// const FestivalMap = () => {
//     const [map, setMap] = useState(null);
//     const params = useParams();
//     const [festival, setFestival] = useState(null);

//     useEffect(() => {
        

//         const fetchFestivalData = async () => {
//             try {
//                 const response = await fetch(`https://port-0-server-cloudtype-4fju66f2clmyxbee6.sel5.cloudtype.app/festival/read-one/${params.id}`);
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch festival data');
//                 }

//                 const festivalData = await response.json();
//                 setFestival(festivalData);
//             } catch (error) {
//                 console.error('Error fetching festival data:', error);
//             }
//         };
//         const container = document.getElementById('map');
//         const options = { center: new kakao.maps.LatLng(festival.longitude, festival.latitude) };
//         const kakaoMap = new kakao.maps.Map(container, options);
//         setMap(kakaoMap);

//         fetchFestivalData();
//     }, [params.id]);

//     return (
//         <div
//             style={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 marginLeft: '5px',
//                 marginRight: '5px',
//                 marginTop: '10px',
//                 marginBottom: '20px',
//             }}
//         >
//             <div id="map" style={{ width: '60%', height: '500px' }}></div>
//         </div>
//     );
// };

// export default FestivalMap;

import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const { kakao } = window;

const FestivalMap = () => {
    const [map, setMap] = useState(null);
    const params = useParams();
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

        // Fetch festival data and set up the map
        fetchFestivalData();
    }, [params.id]);

    useEffect(() => {
        // Check if festival data is available
        if (!festival) {
            return;
        }

        // Create map options with the festival's coordinates
        const options = {
            center: new kakao.maps.LatLng(festival.longitude, festival.latitude),
        };

        // Initialize the map
        const container = document.getElementById('map');
        const kakaoMap = new kakao.maps.Map(container, options);
        setMap(kakaoMap);

        // Create a marker at the festival's location
        const markerPosition = new kakao.maps.LatLng(festival.longitude, festival.latitude);
        new kakao.maps.Marker({ map: kakaoMap, position: markerPosition });
    }, [festival]);

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

export default FestivalMap;
