// import React from 'react';
// import styled from 'styled-components';
// import './partyPopup.css';
// import PartyCurrentModal from './PartyCurrentModal';

//     const Mybutton = styled.button`
//     padding: 3px 8px 3px 8px;
//     margin: 3px;
//     margin-bottom: 13px;
//     font-size: 15px;
//     border: 1px solid gray;
//     border-radius: 13px;
//     background-color: #F1F1F1;
//     color: #488AEE;
//     cursor: pointer;
//     transition: opacity 0.3s ease;
//     &:hover {
//         opacity: 0.8;
//     }
//     `;

//     const Tagdiv = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     `;

//     const Boxdiv = styled.div`
//     margin-right: 8px;
//     margin-bottom: 8px;
//     margin-top: 8px;
//     padding: 3px;
//     padding-right: 12px;
//     padding-left: 12px;
//     background-color: #F1F1F1;
//     border: 1px solid gray;
//     border-radius: 15px;
//     font-size: 12px;
//     color: #488AEE;
//     `;

//     const Divider = styled.div`
//     border-bottom: 1px solid #ccc;
//     margin: 20px 0;
//     `;

// const PartyPopup = ({ partyData }) => {
// const {
// hostNickname,
// tags,
// description,
// festivalName,
// totalParticipants,
// currentParticipants,
// deadline,
// partyCurrent,
// } = partyData;


// //팝업창 내부 데이터 컴포넌트 - 실제 데이터는 party-list.js에서 받음
// return (
// <div>
//     <div className="party-header">{hostNickname} 님이 생성한 파티</div>
//     <Tagdiv>
//     {tags.map((tag, index) => (
//         <Boxdiv key={index}>
//         #{tag}
//         </Boxdiv>
//     ))}
//     </Tagdiv>
//     <div>{description}</div>
    
//     <Divider></Divider>
    
//     <div>
//     <div>축제 이름: {festivalName}</div>
//     <div>모집 인원: {totalParticipants} 명</div>
//     <div>현재 인원: {currentParticipants} 명</div>
//     <div>모집 기한: {deadline}</div>
//     </div>
//     <div style={{justifyContent: 'right', display: 'flex'}}>
//     <Mybutton>신청 현황</Mybutton> 
//     <Mybutton>파티 마감</Mybutton>
//     <Mybutton>파티 수정</Mybutton>
//     </div>
//     <Divider></Divider>
//     {/* 신청 현황 버튼 클릭시 보이는 데이터 (파티 현황) */}
    
//     <p>신청 현황 정보</p>
//     <div>
//         <ul>
//         {partyData.partyCurrent.map((participant) => (
//         <li key={participant.id}>
//             ID: {participant.id}, District: {participant.district}, Manner: {participant.manner}
//             <Mybutton>수락</Mybutton>
//             <Mybutton>거절</Mybutton>
//         </li>
//         ))}
//         </ul>
//     </div>
// </div>
// );
// };

// export default PartyPopup;

import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import './partyPopup.css';
// import { Link } from 'react-router-dom';
// import ReviewPage from './reviewPage';
// import PartyCurrentModal from './PartyCurrentModal';

// const Mylink = styled(Link)`
// padding: 3px 8px 3px 8px;
// margin: 3px;
// margin-bottom: 13px;
// font-size: 15px;
// border: 1px solid gray;
// border-radius: 13px;
// background-color: #F1F1F1;
// color: #488AEE;
// cursor: pointer;
// transition: opacity 0.3s ease;
// &:hover {
// opacity: 0.8;
// }
// `;
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

const Tagdiv = styled.div`
display: flex;
flex-wrap: wrap;
`;

const Boxdiv = styled.div`
margin-right: 8px;
margin-bottom: 8px;
margin-top: 8px;
padding: 3px;
padding-right: 12px;
padding-left: 12px;
background-color: #F1F1F1;
border: 1px solid gray;
border-radius: 15px;
font-size: 12px;
color: #488AEE;
`;

const Divider = styled.div`
border-bottom: 1px solid #ccc;
margin: 20px 0;
`;
const ReviewContainer = styled.div`
margin-top: 20px;
`;
const PartyPopup = ({ partyData }) => {
const {
hostNickname,
tags,
description,
festivalName,
totalParticipants,
currentParticipants,
deadline,
partyCurrent,
} = partyData;

const [showPartyCurrentInfo, setShowPartyCurrentInfo] = useState(false);
const [showReviewForm, setShowReviewForm] = useState(false);

const navigate = useNavigate();

const handleReview = () => {
    setShowReviewForm(true);
};

const directionReview = () => {
    navigate('/reviewPage');
};

return (
<div>
    <div className="party-header">{hostNickname} 님이 생성한 파티</div>
    <Tagdiv>
    {tags.map((tag, index) => (
        <Boxdiv key={index}>#{tag}</Boxdiv>
    ))}
    </Tagdiv>
    <div>{description}</div>

    <Divider></Divider>

    <div>
    <div>축제 이름: {festivalName}</div>
    <div>모집 인원: {totalParticipants} 명</div>
    <div>현재 인원: {currentParticipants} 명</div>
    <div>모집 기한: {deadline}</div>
    </div>
    <div style={{ justifyContent: 'right', display: 'flex' }}>
    <Mybutton onClick={() => setShowPartyCurrentInfo(!showPartyCurrentInfo)}>
        신청 현황
    </Mybutton>
    <Mybutton>파티 마감</Mybutton>
    <Mybutton>파티 수정</Mybutton>
    <Mybutton onClick={handleReview}>리뷰하기</Mybutton>
    </div>
    <Divider></Divider>

    {showPartyCurrentInfo && (
    <div>
        <p>신청 현황 정보</p>
        <div>
        <ul>
            {partyCurrent.map((participant) => (
            <li key={participant.id}>
                ID: {participant.id}, District: {participant.district}, Manner: {participant.manner}
                <Mybutton>수락</Mybutton>
                <Mybutton>거절</Mybutton>
            </li>
            ))}
        </ul>
        </div>
    </div>
    )}
    {showReviewForm && (
    <ReviewContainer>
        {/* 리뷰 폼이 여기에 들어갈 부분 */}
        {/* 사용자 정보 및 리뷰 남기기 버튼이 들어갈 예정 */}
        <p>사용자 정보 및 리뷰</p>
        <div>
        <ul>
            {partyCurrent.map((participant) => (
            <li key={participant.id}>
                ID: {participant.id}, District: {participant.district}, Manner: {participant.manner}
                <Mybutton style={{marginLeft: '10px'}}onClick={directionReview}>리뷰</Mybutton>    
            </li>
            ))}
        </ul>
        </div>
    </ReviewContainer>
    )}
</div>
);
};

export default PartyPopup;

// isPartyOwner 추가 - 일반 사용자에게는 신청하기 버튼만 표시됨
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import './partyPopup.css';
// import PartyCurrentModal from './PartyCurrentModal';

// const Mybutton = styled.button`
// padding: 3px 8px 3px 8px;
// margin: 3px;
// margin-bottom: 13px;
// font-size: 15px;
// border: 1px solid gray;
// border-radius: 13px;
// background-color: #F1F1F1;
// color: #488AEE;
// cursor: pointer;
// transition: opacity 0.3s ease;
// &:hover {
// opacity: 0.8;
// }
// `;

// const Tagdiv = styled.div`
// display: flex;
// flex-wrap: wrap;
// `;

// const Boxdiv = styled.div`
// margin-right: 8px;
// margin-bottom: 8px;
// margin-top: 8px;
// padding: 3px;
// padding-right: 12px;
// padding-left: 12px;
// background-color: #F1F1F1;
// border: 1px solid gray;
// border-radius: 15px;
// font-size: 12px;
// color: #488AEE;
// `;

// const Divider = styled.div`
// border-bottom: 1px solid #ccc;
// margin: 20px 0;
// `;

// const PartyPopup = ({ partyData, isPartyOwner }) => {
// const {
// hostNickname,
// tags,
// description,
// festivalName,
// totalParticipants,
// currentParticipants: initialCurrentParticipants,
// deadline,
// partyCurrent,
// } = partyData;

// const [showPartyCurrentInfo, setShowPartyCurrentInfo] = useState(false);
// const [currentParticipants, setCurrentParticipants] = useState(initialCurrentParticipants);

// const handleAccept = () => {
// // TODO: 수락 버튼 클릭 시 currentParticipants 증가 로직 추가
// setCurrentParticipants(currentParticipants + 1);
// };

// return (
// <div>
//     <div className="party-header">{hostNickname} 님이 생성한 파티</div>
//     <Tagdiv>
//     {tags.map((tag, index) => (
//         <Boxdiv key={index}>#{tag}</Boxdiv>
//     ))}
//     </Tagdiv>
//     <div>{description}</div>

//     <Divider></Divider>

//     <div>
//     <div>축제 이름: {festivalName}</div>
//     <div>모집 인원: {totalParticipants} 명</div>
//     <div>현재 인원: {currentParticipants} 명</div>
//     <div>모집 기한: {deadline}</div>
//     </div>
//     <div style={{ justifyContent: 'right', display: 'flex' }}>
//     {isPartyOwner ? (
//         <>
//         <Mybutton onClick={() => setShowPartyCurrentInfo(!showPartyCurrentInfo)}>
//             신청 현황
//         </Mybutton>
//         <Mybutton>파티 마감</Mybutton>
//         <Mybutton>파티 수정</Mybutton>
//         </>
//     ) : (
//         <Mybutton>신청하기</Mybutton>
//     )}
//     </div>
//     <Divider></Divider>

//     {showPartyCurrentInfo && (
//     <div>
//         <p>신청 현황 정보</p>
//         <div>
//         <ul>
//             {partyCurrent.map((participant) => (
//             <li key={participant.id}>
//                 ID: {participant.id}, District: {participant.district}, Manner: {participant.manner}
//                 <Mybutton onClick={handleAccept}>수락</Mybutton>
//                 <Mybutton>거절</Mybutton>
//             </li>
//             ))}
//         </ul>
//         </div>
//     </div>
//     )}
// </div>
// );
// };

// export default PartyPopup;

//파티장이 수락하기 전까지 신청 대기중이라고 표시됨
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import './partyPopup.css';
// import PartyCurrentModal from './PartyCurrentModal';

// const Mybutton = styled.button`
// padding: 3px 8px 3px 8px;
// margin: 3px;
// margin-bottom: 13px;
// font-size: 15px;
// border: 1px solid gray;
// border-radius: 13px;
// background-color: #F1F1F1;
// color: #488AEE;
// cursor: pointer;
// transition: opacity 0.3s ease;
// &:hover {
// opacity: 0.8;
// }
// `;

// const Tagdiv = styled.div`
// display: flex;
// flex-wrap: wrap;
// `;

// const Boxdiv = styled.div`
// margin-right: 8px;
// margin-bottom: 8px;
// margin-top: 8px;
// padding: 3px;
// padding-right: 12px;
// padding-left: 12px;
// background-color: #F1F1F1;
// border: 1px solid gray;
// border-radius: 15px;
// font-size: 12px;
// color: #488AEE;
// `;

// const Divider = styled.div`
// border-bottom: 1px solid #ccc;
// margin: 20px 0;
// `;

// const PartyPopup = ({ partyData, isPartyOwner }) => {
// const {
// hostNickname,
// tags,
// description,
// festivalName,
// totalParticipants,
// currentParticipants: initialCurrentParticipants,
// deadline,
// partyCurrent,
// } = partyData;

// const [showPartyCurrentInfo, setShowPartyCurrentInfo] = useState(false);
// const [currentParticipants, setCurrentParticipants] = useState(initialCurrentParticipants);
// const [isApplying, setIsApplying] = useState(false);
// const [appliedMessage, setAppliedMessage] = useState('');

// const handleAccept = () => {
// // TODO: 수락 버튼 클릭 시 currentParticipants 증가 로직 추가
// setCurrentParticipants(currentParticipants + 1);
// };

// const handleApply = () => {
// if (isApplying) {
//     setAppliedMessage('이미 신청한 파티입니다.');
//     alert('이미 신청한 파티입니다.');
// } else {
//     setIsApplying(true);
//     setAppliedMessage('파티장이 수락할 때까지 대기해 주세요.');
//     alert('파티장이 수락할 때까지 대기해 주세요.');
// }
// };

// return (
// <div>
//     <div className="party-header">{hostNickname} 님이 생성한 파티</div>
//     <Tagdiv>
//     {tags.map((tag, index) => (
//         <Boxdiv key={index}>#{tag}</Boxdiv>
//     ))}
//     </Tagdiv>
//     <div>{description}</div>

//     <Divider></Divider>

//     <div>
//     <div>축제 이름: {festivalName}</div>
//     <div>모집 인원: {totalParticipants} 명</div>
//     <div>현재 인원: {currentParticipants} 명</div>
//     <div>모집 기한: {deadline}</div>
//     </div>
//     <div style={{ justifyContent: 'right', display: 'flex' }}>
//     {isPartyOwner ? (
//         <>
//         <Mybutton onClick={() => setShowPartyCurrentInfo(!showPartyCurrentInfo)}>
//             신청 현황
//         </Mybutton>
//         <Mybutton>파티 마감</Mybutton>
//         <Mybutton>파티 수정</Mybutton>
//         </>
//     ) : (
//         <Mybutton onClick={handleApply}>
//         {isApplying ? '신청 대기 중' : '신청하기'}
//         </Mybutton>
//     )}
//     </div>
//     {appliedMessage && <p>{appliedMessage}</p>}
//     <Divider></Divider>

//     {showPartyCurrentInfo && (
//     <div>
//         <p>신청 현황 정보</p>
//         <div>
//         <ul>
//             {partyCurrent.map((participant) => (
//             <li key={participant.id}>
//                 ID: {participant.id}, District: {participant.district}, Manner: {participant.manner}
//                 <Mybutton onClick={handleAccept}>수락</Mybutton>
//                 <Mybutton>거절</Mybutton>
//             </li>
//             ))}
//         </ul>
//         </div>
//     </div>
//     )}
// </div>
// );
// };

// export default PartyPopup;

//리뷰 폼 추가 기능
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import './partyPopup.css';
// import PartyCurrentModal from './PartyCurrentModal';

// const Mybutton = styled.button`
// padding: 3px 8px 3px 8px;
// margin: 3px;
// margin-bottom: 13px;
// font-size: 15px;
// border: 1px solid gray;
// border-radius: 13px;
// background-color: #F1F1F1;
// color: #488AEE;
// cursor: pointer;
// transition: opacity 0.3s ease;
// &:hover {
// opacity: 0.8;
// }
// `;

// const Tagdiv = styled.div`
// display: flex;
// flex-wrap: wrap;
// `;

// const Boxdiv = styled.div`
// margin-right: 8px;
// margin-bottom: 8px;
// margin-top: 8px;
// padding: 3px;
// padding-right: 12px;
// padding-left: 12px;
// background-color: #F1F1F1;
// border: 1px solid gray;
// border-radius: 15px;
// font-size: 12px;
// color: #488AEE;
// `;

// const Divider = styled.div`
// border-bottom: 1px solid #ccc;
// margin: 20px 0;
// `;

// const ReviewContainer = styled.div`
// margin-top: 20px;
// `;

// const PartyPopup = ({ partyData, isPartyOwner }) => {
// const {
// hostNickname,
// tags,
// description,
// festivalName,
// totalParticipants,
// currentParticipants: initialCurrentParticipants,
// deadline,
// partyCurrent,
// } = partyData;

// const [showPartyCurrentInfo, setShowPartyCurrentInfo] = useState(false);
// const [currentParticipants, setCurrentParticipants] = useState(initialCurrentParticipants);
// const [isApplying, setIsApplying] = useState(false);
// const [appliedMessage, setAppliedMessage] = useState('');
// const [showReviewForm, setShowReviewForm] = useState(false);

// const handleAccept = () => {
// // TODO: 수락 버튼 클릭 시 currentParticipants 증가 로직 추가
// setCurrentParticipants(currentParticipants + 1);
// };

// const handleApply = () => {
// if (isApplying) {
//     setAppliedMessage('이미 신청한 파티입니다.');
//     console.warn('이미 신청한 파티입니다.');
// } else {
//     setIsApplying(true);
//     setAppliedMessage('파티장이 수락할 때까지 대기해 주세요.');
//     console.warn('파티장이 수락할 때까지 대기해 주세요.');
// }
// };

// const handleReview = () => {
// setShowReviewForm(true);
// };

// return (
// <div>
//     <div className="party-header">{hostNickname} 님이 생성한 파티</div>
//     <Tagdiv>
//     {tags.map((tag, index) => (
//         <Boxdiv key={index}>#{tag}</Boxdiv>
//     ))}
//     </Tagdiv>
//     <div>{description}</div>

//     <Divider></Divider>

//     <div>
//     <div>축제 이름: {festivalName}</div>
//     <div>모집 인원: {totalParticipants} 명</div>
//     <div>현재 인원: {currentParticipants} 명</div>
//     <div>모집 기한: {deadline}</div>
//     </div>
//     <div style={{ justifyContent: 'right', display: 'flex' }}>
//     {isPartyOwner ? (
//         <>
//         <Mybutton onClick={() => setShowPartyCurrentInfo(!showPartyCurrentInfo)}>
//             신청 현황
//         </Mybutton>
//         <Mybutton>파티 마감</Mybutton>
//         <Mybutton>파티 수정</Mybutton>
//         </>
//     ) : (
//         <>
//         <Mybutton onClick={handleApply}>
//             {isApplying ? '신청 대기 중' : '신청하기'}
//         </Mybutton>
//         <Mybutton onClick={handleReview}>리뷰하기</Mybutton>
//         </>
//     )}
//     </div>
//     {appliedMessage && <p>{appliedMessage}</p>}
//     <Divider></Divider>

//     {showPartyCurrentInfo && (
//     <div>
//         <p>신청 현황 정보</p>
//         <div>
//         <ul>
//             {partyCurrent.map((participant) => (
//             <li key={participant.id}>
//                 ID: {participant.id}, District: {participant.district}, Manner: {participant.manner}
//                 <Mybutton onClick={handleAccept}>수락</Mybutton>
//                 <Mybutton>거절</Mybutton>
//             </li>
//             ))}
//         </ul>
//         </div>
//     </div>
//     )}

//     {showReviewForm && (
//     <ReviewContainer>
//         {/* 리뷰 폼이 여기에 들어갈 부분 */}
//         {/* 사용자 정보 및 리뷰 남기기 버튼이 들어갈 예정 */}
//         <p>사용자 정보 및 리뷰 남기기 폼이 들어갈 부분</p>
//     </ReviewContainer>
//     )}
// </div>
// );
// };

// export default PartyPopup;
