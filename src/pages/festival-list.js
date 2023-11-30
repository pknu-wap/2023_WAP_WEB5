// import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';


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
const Divider = styled.div`
border-bottom: 1px solid #ccc;
margin: 20px 0;
`;

const FestivalList = () => {

const [userDataArray, setUserDataArray] = useState([]);

useEffect(() => {
const fetchData = () => {
    fetch('https://port-0-server-cloudtype-4fju66f2clmyxbee6.sel5.cloudtype.app/festival/list')
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        setUserDataArray(data); // 전체 데이터 배열을 가져옴
    })
    .catch(error => {
        console.error('Error fetching user data:', error);
    });
};

fetchData();
}, []);

return (
<div>
    {userDataArray.length > 0 ? (
    <div>
        <h2>전체 축제 목록</h2>
        {userDataArray.map((festival) => (
        <div key={festival.id}>
            {/* <MyLink to={"/festival-detail"}>축제 이름: {festival.name}</MyLink> */}
            <li>
                <p>festival number: {festival.id}</p>
            <MyLink key={festival.id} to={`/festival-detail/${festival.id}` }>클릭시 상세 페이지로 이동합니다.: {festival.name}</MyLink>
            </li>
            <img style={{width: '120px'}} src={festival.image || 'mannerReview.png'} />
            
            <Divider></Divider>

        </div>
        ))}
    </div>
    ) : (
    <p>Loading information...</p>
    )}
</div>
);
};



export default FestivalList;
