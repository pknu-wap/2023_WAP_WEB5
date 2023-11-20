// src/components/MapInfo.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const PartyInfo = () => {
    return (
    <div>
        <h2>파티 만들기</h2>
        <p>파티 만들기 탭입니다. 여기에 위치 정보나 지도가 표시될 수 있습니다.</p>
        <MyLink to ="/partymake">글쓰기</MyLink>
        
    </div>
    );
};

export default PartyInfo;
