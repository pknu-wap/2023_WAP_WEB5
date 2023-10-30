import React, { Component } from 'react';
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

const FestivalList = () => {
    return (
        <div>
            <h1>축제목록</h1>
            <p>축제목록페이지</p>
            <p>나중에합치기</p>
            <p>여기서 축제 클릭하면 축제상세 페이지로 이동하는 거</p>

        <MyLink to="/festival-detail">각각의 축제 누르면 각 축제 상세 페이지로 이동</MyLink>
            


        </div>
    );
    };

    export default FestivalList;