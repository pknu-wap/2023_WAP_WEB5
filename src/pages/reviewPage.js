// import React from 'react';
import styled from 'styled-components';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ReviewImage from './reviewImage';


const Mybutton = styled.button`
padding: 3px 8px 3px 8px;
margin: 3px;
margin-bottom: 13px;
font-size: 15px;
border: 1px solid gray;
border-radius: 13px;
background-color: #F1F1F1;
color: #488AEE;
cursor: pointer;
transition: opacity 0.3s ease;
&:hover {
opacity: 0.8;
}
`;
const Divider = styled.div`
border-bottom: 1px solid #ccc;
margin: 20px 0;
`;
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


const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Reviewdiv = styled.div`
    text-align: center;
    padding: 30px;
`;

const ReviewPage = () => {
    const [partyData, setPartyData] = useState({
        hostNickname: '주인장',
        festivalName: '2023 광안리 불꽃축제',
        partyCurrent: [
            { id: 'id01', district: '남구', manner: '36.5' },
            { id: 'id02', district: '동구', manner: '70' },
            { id: 'id03', district: '북구', manner: '20' },
        ],
    });

    const navigate = useNavigate();

    const handleReviewSubmit = () => {
            alert('리뷰 작성이 완료되었습니다.');
            navigate('/party-list');
        };

    return (
        <div>
            <Linkdiv>
                <StyledButton>로그아웃</StyledButton>
            </Linkdiv>
            <Header>
                <Link to="/."> {/* 메인화면으로 이동 */}
                    <Logoimg src="info.png" alt="Logo" />
                </Link>
                <Headerlist>
                    <MyLink to="/festival-list">축제 목록</MyLink>
                    <MyLink to="/party-list">전체 파티 목록</MyLink>
                    <MyLink to="/my-party-list">내 파티</MyLink>
                </Headerlist>
            </Header>

            {/* 리뷰 작성 폼 */}
            <Reviewdiv>
                <h3>{partyData.hostNickname} 님과 함께한 파티는 어떠셨나요?</h3>
                <p>축제이름 : {partyData.festivalName}</p>
                
                {/* <p>
                    {partyData.partyCurrent.map((participant) => (
                        <span key={participant.id}>
                            {participant.id} 님과 함께한 파티는 어떠셨나요?{' '}
                        </span>
                    ))}
                </p> */}
                <Divider />
                <p>매너온도를 등록해 주세요! 백경이를 클릭하면 별점이 매겨집니다.</p>
            </Reviewdiv>

            <ImageContainer>
                        <ReviewImage />
                </ImageContainer>
            <div style={{ justifyContent: 'center', display: 'flex' }}>
                <Mybutton onClick={handleReviewSubmit}>리뷰 작성 완료</Mybutton>

            </div>
            
            
        </div>
    );
};

export default ReviewPage;

