import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import PartyPopup from './partyPopup';
import { Link } from 'react-router-dom';
import modalStyles from './ModalStyle'; // 스타일 파일 import
import Modal from 'react-modal';
import './partyPopup.css';


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

const Linkdiv = styled.div`
background-color: #488AEE;
text-decoration: none;
color: inherit;
text-align: right;
transition: background-color 0.3s ease-in-out;
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

const Headerlist = styled.div`
background-color: #488AEE;
text-align: right;
padding-bottom: 5px;
padding-right: 10px;
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

const Title = styled.h2`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  left: -500px;
  margin-top:40px;
`;

const DropdownContainer = styled.div`
  position: absolute;
  top:30px;
  left: calc(50% - 600px); /* 중간에서 왼쪽으로 이동 */
`;

const Dropdown = styled.div`
  border: 3px solid #ccc;
  border-radius: 20px;
  padding: 8px;
  cursor: pointer;
  width: 100px;
  text-align: center;
`;

const DropdownMenu = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: #fff;
  border: 3px solid #ccc;
  border-radius: 10px;
  width: 100px;
  max-height: 200px; /* 최대 높이 설정 */
  overflow-y: auto; /* 세로 스크롤이 필요한 경우 스크롤 표시 */
  z-index: 1;
`;

const DropdownItem = styled.div`
  padding: 5px;
  cursor: pointer;
`;

//partyall-list container
const Container = styled.div`
  position: relative;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RoundedBox = styled.div`
  border-radius: 80px;
  border: 3px solid #ccc;
  padding: 10px;
  margin-right: 40px;
  margin-top:100px;
  width: 270px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RoundedBox1 = styled.div`
  border-radius: 80px;
  border:none
  padding: 10px;
  margin-bottom:10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:70px;
  height:30px;
  display:flex;
  background-color:#E3E3E3
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto; /* 페이지네이션을 컨테이너의 아래로 밀어냅니다. */
  margin-bottom: 20px; 
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin: 0px 0;
`;

const FestName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto; /* 아래로 밀어냅니다. */
  margin-bottom: 20px; 
`;

const PartyName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px; /* 아래로 밀어냅니다. */
  margin-bottom: 20px; 
`;
const PartyDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto; /* 아래로 밀어냅니다. */
  margin-bottom: 20px; 
`;

const FestEnd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto; /* 아래로 밀어냅니다. */
  margin-bottom: 20px; 
`;

const Closedbutton = styled.button`
padding: 2px 10px 2px 10px;
border-radius: 10px;
background-color: lightgray; 
font-size: 16px;
color: gray;
`;
const PartyAllList= () => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedParty, setSelectedParty] = useState(null);

  
    const totalPages = 7; // 전체 페이지 수
    const [partiesData, setPartiesData] = useState([]);

    const fetchData = async (page) => {
        try {
          const response = await fetch(`https://port-0-server-cloudtype-4fju66f2clmyxbee6.sel5.cloudtype.app/party?page=${page}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
          });
      
          if (!response.ok) {
            throw new Error('서버 응답이 실패했습니다.');
          }
      
          const data = await response.json();
          setPartiesData(data);
        } catch (error) {
          console.error('파티 목록을 불러오는데 실패했습니다:', error);
        }
      };

      useEffect(() => {
        // 페이지 로드 시 첫 번째 페이지의 파티 목록 가져오기
        fetchData(1);
      }, []);
    
       //파티팝업창
    const [isModalOpen, setIsModalOpen] = useState(false);
    const OpenModal = (party) => {
      setSelectedParty(party);
     setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    

      //페이지네이션 기능
      const partiesPerPage = 4;
      const [currentPage, setCurrentPage] = useState(1);
    
      const indexOfLastParty = currentPage * partiesPerPage;
      const indexOfFirstParty = indexOfLastParty - partiesPerPage;
      const currentParties = partiesData.slice(indexOfFirstParty, indexOfLastParty);
    
      const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        fetchData(pageNumber);
      };
    
      const handlePrevPage = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      };
    
      const handleNextPage = () => {
        const totalPages = Math.ceil(partiesData.length / partiesPerPage);
        if (currentPage < totalPages) {
          setCurrentPage(currentPage + 1);
        }
      };


      
      // 드롭다운 기능
      const [isOpen, setIsOpen] = useState(false);
      const [selectedLocation, setSelectedLocation] = useState('전체');
    
      const locations = ['전체','남구', '수영구', '부산진구', '동래구','북구','금정구','연제구','사상구','강서구','서구','동구','중구','사하구','영도구','해운대구','기장군'];
    
      const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
      };
    
      const handleLocationSelect = (location) => {
        setSelectedLocation(location);
        setIsOpen(false);
      };

      //선택한 지역구에 따라 파티 필터링

    const filteredParties = selectedLocation !== '전체' 
    ? partiesData.filter(party => party.festAddress === selectedLocation) 
    : partiesData;
    return (
    <div>

        <div>
            <Linkdiv>
                <StyledButton>로그아웃</StyledButton>
                </Linkdiv>
            <Header>
            <Link to="/."> {/* 메인화면으로 이동 */}
                <Logoimg src="info.png" alt="Logo" />
            </Link>
                <Headerlist>
                
                <MyLink to ="/festival-list">축제 목록</MyLink>
                <MyLink to ="/partyall-list">전체 파티 목록</MyLink>
                <MyLink to ="/my-party-list">내 파티</MyLink>
                </Headerlist>
            </Header>
        <Title>전체 파티 목록</Title>

        <Container>

        <DropdownContainer>
                <Dropdown onClick={handleToggleDropdown}>
                {selectedLocation}
                <DropdownMenu isOpen={isOpen}>
                {locations.map((location) => (
                    <DropdownItem key={location} onClick={() => handleLocationSelect(location)}>
                    {location}
                    </DropdownItem>
                ))}
                </DropdownMenu>
            </Dropdown>
        </DropdownContainer>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
             {filteredParties.map((party) => (
             <RoundedBox key={party.partyPk} onClick={() => OpenModal(party.partyPk)}>
                    <FestName style={{fontSize:"20px"}}>{party.festName}</FestName>

                    <RoundedBox1 >
                     <p style={{margin:'0',fontSize:'15px' ,color:'#676767'}}>{party.festAddress}</p>
                    </RoundedBox1>

                    <HorizontalLine />

                    <PartyName style={{fontSize:"17px"}}>
                        {party.partyName}</PartyName>
                    <PartyDetail>{party.partyDetail}</PartyDetail>
                    <FestEnd>{party.festEnd}</FestEnd>
            </RoundedBox>
                ))}
                </div>


            <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="Party Details Modal"
                >
                    {/* <PartyPopup/> */}
                    {selectedParty && <PartyPopup partyPk={selectedParty} />}
                    <div style={{justifyContent: 'right', display: 'flex'}}>
                    <Closedbutton onClick={closeModal}>닫기</Closedbutton>
                    </div>
                    </Modal>

                <PaginationContainer>
                    <button onClick={handlePrevPage} style={{fontSize:'20px'}}>{'< '}</button>
                    {Array.from({ length: Math.min(6,totalPages) }, (_, index) => (
                    <button key={index + 1} style={{fontSize:'20px'}} onClick={() => handlePageChange(index + 1)}>
                        {index + 1}
                    </button>
                    ))}
                    <button onClick={handleNextPage} style={{fontSize:'20px'}}>{' >'}</button>
                </PaginationContainer>
                
                </Container>
            </div>
    </div>
    
    );
};

export default PartyAllList;