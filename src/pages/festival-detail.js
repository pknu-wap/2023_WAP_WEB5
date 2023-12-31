//축제 상세 목록 페이지 -> 1. 상세정보 2. 이용안내 3. 지도 4. 관련사진 5. 파티 모집
//축제를 클릭하면 가장 먼저 보이는 메인 페이지
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DetailInfo from './DetailInfo';
import GuideInfo from './GuideInfo';
import MapInfo from './MapInfo';
import PhotoInfo from './PhotoInfo';
import PartyInfo from './PartyInfo';


const Header = styled.header`
background-color: #488AEE;
// padding: 5px;
height: 130px;
text-align: center;
justify-content: center;
`;

const Logoimg = styled.img`
// padding: 10px;
height: 110px;
text-align: center;
display: inline-block;
cursor: pointer; /* 커서를 포인터로 변경하여 클릭 가능하게 함 */
`;

const StyledButton = styled.button`
text-decoration: none;
color: inherit;
background-color: lightGray;
padding: 5px 10px;
margin-right: 15px;
margin-top: 10px;
border: none; /* 테두리 제거 */
border-radius: 13px;
display: inline-block;
cursor: pointer;
transition: background-color 0.3s ease-in-out;

font-size: 13px; /* 글자 크기 지정 */
font-weight: 400; /* 글자 두께 지정 */
`;

const Linkdiv = styled.div`
background-color: #488AEE;
text-decoration: none;
color: inherit;
text-align: right;
transition: background-color 0.3s ease-in-out;
`;

const MyLink = styled(Link)`
text-decoration: none;
color: inherit;
padding: 5px 10px;
margin-left: 5px;
display: inline-block;
transition: background-color 0.3s ease-in-out;

font-size: 13px; /* 글자 크기 지정 */
font-weight: 400; /* 글자 두께 지정 */

`;

const Headerlist = styled.div`
background-color: #488AEE;
text-align: right;
padding-bottom: 5px;
padding-right: 10px;
`;


const Nevigatordiv = styled.div`
margin-top: 20px;
margin-bottom: 20px;
display: flex;
justify-content: center;
`
{/*버튼 요소 가운데 정렬 text-align*/}
const Listdiv1 = styled.div` 
    width: 100%;
    height: 100%;
    padding-bottom: 5px;
    text-align: center; 
    border-bottom: 2px solid Black;
`
const Listdiv2 = styled.div` 
    width: 100%;
    height: 100%;
    padding-bottom: 5px;
    text-align: center;
    border-bottom: 2px solid Black;
`
const Listdiv3 = styled.div` 
    width: 100%;
    height: 100%;
    padding-bottom: 5px;
    text-align: center;
    border-bottom: 2px solid Black;
`
const Listdiv4 = styled.div` 
    width: 100%;
    height: 100%;
    padding-bottom: 5px;
    text-align: center;
    border-bottom: 2px solid Black;
`
const Listdiv5 = styled.div` 
    width: 100%;
    height: 100%;
    padding-bottom: 5px;
    text-align: center;
    border-bottom: 2px solid Black;
`

const FestivalDetail = () => {
    
    const [activeTab, setActiveTab] = useState('detail'); // 기본 탭은 'detail'
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
            <Linkdiv>
            <StyledButton>로그아웃</StyledButton>
            </Linkdiv>
        <Header>
        <Link to="/."> {/* 메인화면으로 이동 */}
            {/* <Logoimg src="info.png" alt="Logo" /> */}
            <Logoimg src={process.env.PUBLIC_URL + '/info.png'} alt="Info" />

            {/* <Logoimg src={Logo} alt="Logo" /> */}

        </Link>
            <Headerlist>
            <MyLink to ="/festival-list">축제 목록</MyLink>
            <MyLink to ="/partyall-list">전체 파티 목록</MyLink>
            <MyLink to ="/my-party-list">내 파티</MyLink>
            </Headerlist>
        </Header>

        <Nevigatordiv>
                <Listdiv1 style={{borderBlockEndColor: activeTab === 'detail' ? '#488AEE' : 'black', color: activeTab === 'detail' ? '#488AEE' : 'black'}}><button style={{Color: activeTab === 'detail' ? '#488AEE' : 'black', color: activeTab === 'detail' ? '#488AEE' : 'black'}} onClick={() => setActiveTab('detail')}>상세 정보</button></Listdiv1>
                <Listdiv2 style={{borderBlockEndColor: activeTab === 'guide' ? '#488AEE' : 'black', color: activeTab === 'guide' ? '#488AEE' : 'black'}}><button style={{Color: activeTab === 'guide' ? '#488AEE' : 'black', color: activeTab === 'guide' ? '#488AEE' : 'black'}} onClick={() => setActiveTab('guide')}>이용 안내 </button></Listdiv2>
                <Listdiv3 style={{borderBlockEndColor: activeTab === 'map' ? '#488AEE' : 'black', color: activeTab === 'map' ? '#488AEE' : 'black'}}><button style={{Color: activeTab === 'map' ? '#488AEE' : 'black', color: activeTab === 'map' ? '#488AEE' : 'black'}} onClick={() => setActiveTab('map')}>지도</button></Listdiv3>
                <Listdiv4 style={{borderBlockEndColor: activeTab === 'photo' ? '#488AEE' : 'black', color: activeTab === 'photo' ? '#488AEE' : 'black'}}><button style={{Color: activeTab === 'photo' ? '#488AEE' : 'black', color: activeTab === 'photo' ? '#488AEE' : 'black'}} onClick={() => setActiveTab('photo')}>관련 사진</button></Listdiv4>
                <Listdiv5 style={{borderBlockEndColor: activeTab === 'party' ? '#488AEE' : 'black', color: activeTab === 'party' ? '#488AEE' : 'black'}}><button style={{Color: activeTab === 'party' ? '#488AEE' : 'black', color: activeTab === 'party' ? '#488AEE' : 'black'}} onClick={() => setActiveTab('party')}>파티 모집</button></Listdiv5>
        </Nevigatordiv>
        <div>
            {/* <p>{festival.id}</p>
            <p>{festival.phone}</p> */}

            {activeTab === 'detail' && <DetailInfo festData={festival}/>}
            {activeTab === 'guide' && <GuideInfo festData={festival}/>}
            {activeTab === 'map' && <MapInfo />}
            {activeTab === 'photo' && <PhotoInfo festData={festival}/>}
            {activeTab === 'party' && <PartyInfo />}

        </div>

        </div>
        
    );
};





    export default FestivalDetail;