// import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
// import ReviewPopup from './ReviewPopup';
import React, { useState } from 'react';
import Modal from 'react-modal';
import PartyPopup from './partyPopup';
import styled from 'styled-components';
import './partyPopup.css';


const Closedbutton = styled.button`
padding: 2px 10px 2px 10px;
border-radius: 10px;
background-color: lightgray; 
font-size: 16px;
color: gray;
`;

// 예제 데이터, 각 파티 클릭하면 저장돼 있는 데이터 받아옴?
const partyData = {
hostNickname: '주인장',
tags: ['광안리', '불꽃', '여행'],
description: '광안리 불꽃축제 보러 가실 분들 모집합니다!',
festivalName: '2023 광안리 불꽃축제',
totalParticipants: 10,
currentParticipants: 5,
deadline: '2023-12-01',
partyCurrent: [
    { id: 'id01', district: '남구', manner: '36.5'},
    { id: 'id02', district: '동구', manner: '70'},
    { id: 'id03', district: '북구', manner: '20'},
],
};



const PartyList = () => {
const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = () => {
    setIsModalOpen(true);
};

const closeModal = () => {
    setIsModalOpen(false);
};



return (
    <div>
    {/* Party List... */}
    <h1>파티목록</h1>
    <button onClick={openModal}>임시 참여 버튼</button> {/* 누르면 modal 창이 뜸*/}

    {/* Modal */}
    <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Party Details Modal"
    >
        <PartyPopup partyData={partyData} />
        <div style={{justifyContent: 'right', display: 'flex'}}>
        <Closedbutton onClick={closeModal}>닫기</Closedbutton>
        </div>
    </Modal>

    



    </div>
);
};

export default PartyList;
