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


const FestivalList = () => {

const [userDataArray, setUserDataArray] = useState([]);

useEffect(() => {
const fetchData = () => {
    fetch('https://cors-anywhere.herokuapp.com/https://port-0-buife-5mk12alp6foaqx.sel5.cloudtype.app/members')
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
        <h2>User Information</h2>
        {userDataArray.map((userData, index) => (
        <div key={index}>
            <p>User ID: {userData.userID}</p>
            {/* 기타 필요한 정보도 여기에 추가할 수 있습니다 */}
        </div>
        ))}
    </div>
    ) : (
    <p>Loading user information...</p>
    )}
</div>
);
};



export default FestivalList;
