// //파티 만들기 페이지
// //파티 모집 페이지 (partyinfo.js)에서 글쓰기 버튼 클릭시 이 페이지로 이동
// import { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';

// // import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';


// const Header = styled.header`
// background-color: #488AEE;
// // padding: 5px;
// height: 130px;
// text-align: center;
// justify-content: center;
// `;

// const Logoimg = styled.img`
// // padding: 10px;
// height: 110px;
// text-align: center;
// display: inline-block;
// cursor: pointer; /* 커서를 포인터로 변경하여 클릭 가능하게 함 */
// `;

// const StyledButton = styled.button`
// text-decoration: none;
// color: inherit;
// background-color: lightGray;
// padding: 5px 10px;
// margin-right: 15px;
// margin-top: 10px;
// border: none; /* 테두리 제거 */
// border-radius: 13px;
// display: inline-block;
// cursor: pointer;
// transition: background-color 0.3s ease-in-out;

// font-size: 13px; /* 글자 크기 지정 */
// font-weight: 400; /* 글자 두께 지정 */
// `;

// const Linkdiv = styled.div`
// background-color: #488AEE;
// text-decoration: none;
// color: inherit;
// text-align: right;
// transition: background-color 0.3s ease-in-out;
// `;

// const MyLink = styled(Link)`
// text-decoration: none;
// color: inherit;
// padding: 5px 10px;
// margin-left: 5px;
// display: inline-block;
// transition: background-color 0.3s ease-in-out;

// font-size: 13px; /* 글자 크기 지정 */
// font-weight: 400; /* 글자 두께 지정 */

// `;

// const Headerlist = styled.div`
// background-color: #488AEE;
// text-align: right;
// padding-bottom: 5px;
// padding-right: 10px;
// `;

// const StyledForm = styled(Form)`
// padding-top: 10px;
// margin: 10px;
// text-align: center;
// `;

// const PartyMake = () => {
//     const [partyName, setPartyName] = useState('');
//     const [recruitment, setRecruitment] = useState('');
//     const [partyChatUrl, setChatURL] = useState('');
//     const [partyDetail, setDescription] = useState('');
//     const [partyTag, setTags] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // 여기서 폼 데이터를 사용하거나 서버로 보낼 수 있습니다.
//         const formData = {
//         partyName,
//         recruitment,  //모집인원 수
//         partyChatUrl,      //오픈채팅 URL
//         partyDetail,  //파티에 대한 설명
//         partyTag: partyTag.split(',').map(tag => tag.trim()), // 태그를 쉼표로 분리하여 배열로 만든다.
//         };
// };


//     return (
//         <div>
//             <Linkdiv>
//             <StyledButton>로그아웃</StyledButton>
//             </Linkdiv>
//             <Header>
//                 <Link to="/."> {/* 메인화면으로 이동 */}
//                     <Logoimg src="info.png" alt="Logo" />
//                 </Link>
//                 <Headerlist>
//                     <MyLink to ="/festival-list">축제 목록</MyLink>
//                     <MyLink to ="/party-list">전체 파티 목록</MyLink>
//                     <MyLink to ="/my-party-list">내 파티</MyLink>
//                 </Headerlist>
//             </Header>

//         {/* 작성 폼 */}
//         <StyledForm onSubmit={handleSubmit}>
//         <Form.Group controlId="partyName" style={ {margin: '20px'}}>
//         <Form.Label>파티명</Form.Label>
//         <Form.Control style={{ textAlign: 'center', width: '50%', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', fontSize: '13px'}}
//             type="text"
//             placeholder="파티명을 입력하세요."
//             value={partyName}
//             onChange={(e) => setPartyName(e.target.value)}
//             required
//         />
//         </Form.Group>
//         <Form.Group controlId="recruitment" style={ {margin: '20px'}}>
//         <Form.Label>모집인원</Form.Label>
//         <Form.Control style={{ textAlign: 'center', width: '50%', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', fontSize: '13px'}}
//             type="number"
//             placeholder="모집인원 수를 선택하거나 입력해 주세요"
//             value={recruitment}
//             onChange={(e) => setRecruitment(Math.max(1, parseInt(e.target.value)))}
//             required
//         />
//         </Form.Group>
//         <Form.Group controlId="partyChatUrl" style={ {margin: '20px'}}>
//         <Form.Label>오픈채팅 URL</Form.Label>
//         <Form.Control style={{ textAlign: 'center', width: '50%', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', fontSize: '13px'}}
//             type="url"
//             placeholder="오픈채팅 URL을 입력해 주세요."
//             value={partyChatUrl}
//             onChange={(e) => setChatURL(e.target.value)}
//             required
//         />
//         </Form.Group>
//         <Form.Group controlId="partyDetail" style={ {margin: '20px'}}>
//         <Form.Label>파티에 대한 설명</Form.Label>
//         <Form.Control style={{ textAlign: 'center', width: '50%', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', fontSize: '13px'}}
//             as="textarea"
//             rows={3}
//             placeholder="파티에 대한 설명을 입력해 주세요."
//             value={partyDetail}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//         />
//         </Form.Group>
//         <Form.Group controlId="partyTag" style={ {margin: '20px'}}>
//         <Form.Label>파티 관련 태그 (최대 5개)</Form.Label>
//         <Form.Control style={{ textAlign: 'center', width: '50%', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', fontSize: '13px'}}
//             type="text"
//             placeholder="태그를 입력해 주세요. (최대 5개)"
//             value={partyTag}
//             onChange={(e) => setTags(e.target.value)}
//             maxLength={50}
//         />
//         </Form.Group>
//         <Button variant="primary" type="submit" style={{ margin: '10px'}  }>
//         파티 생성
//         </Button>
//     </StyledForm>
//         </div>
        
//     );
// };
// export default PartyMake;

//파티 만들기 페이지
//파티 모집 페이지 (partyinfo.js)에서 글쓰기 버튼 클릭시 이 페이지로 이동
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

// import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


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

const StyledForm = styled(Form)`
padding-top: 10px;
margin: 10px;
text-align: center;
`;

const PartyMake = () => {
    const [partyName, setPartyName] = useState('');
    const [recruitment, setRecruitment] = useState('');
    const [partyChatUrl, setChatURL] = useState('');
    const [partyDetail, setDescription] = useState('');
    const [partyTag, setTags] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 여기서 폼 데이터를 사용하거나 서버로 보낼 수 있습니다.
        const formData = {
        partyName,
        recruitment,  //모집인원 수
        partyChatUrl,      //오픈채팅 URL
        partyDetail,  //파티에 대한 설명
        partyTag: partyTag.split(',').map(tag => tag.trim()), // 태그를 쉼표로 분리하여 배열로 만든다.
        };
        try {
            const response = await fetch('https://cors-anywhere.herokuapp.com/https://port-0-buife-5mk12alp6foaqx.sel5.cloudtype.app/party/new', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
      
            if (response.ok) {
              const responseData = await response.json();
              console.log('Party created successfully:', responseData);
            } else {
              console.error('Failed to create party:', response.statusText);
            }
          } catch (error) {
            console.error('Error while creating party:', error);
          }
       
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
                    <MyLink to ="/festival-list">축제 목록</MyLink>
                    <MyLink to ="/party-list">전체 파티 목록</MyLink>
                    <MyLink to ="/my-party-list">내 파티</MyLink>
                </Headerlist>
            </Header>

        {/* 작성 폼 */}
        <StyledForm onSubmit={handleSubmit}>
        <Form.Group controlId="partyName" style={ {margin: '20px'}}>
        <Form.Label>파티명</Form.Label>
        <Form.Control style={{ textAlign: 'center', width: '50%', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', fontSize: '13px'}}
            type="text"
            placeholder="파티명을 입력하세요."
            value={partyName}
            onChange={(e) => setPartyName(e.target.value)}
            required
        />
        </Form.Group>
        <Form.Group controlId="recruitment" style={ {margin: '20px'}}>
        <Form.Label>모집인원</Form.Label>
        <Form.Control style={{ textAlign: 'center', width: '50%', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', fontSize: '13px'}}
            type="number"
            placeholder="모집인원 수를 선택하거나 입력해 주세요"
            value={recruitment}
            onChange={(e) => setRecruitment(Math.max(1, parseInt(e.target.value)))}
            required
        />
        </Form.Group>
        <Form.Group controlId="partyChatUrl" style={ {margin: '20px'}}>
        <Form.Label>오픈채팅 URL</Form.Label>
        <Form.Control style={{ textAlign: 'center', width: '50%', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', fontSize: '13px'}}
            type="url"
            placeholder="오픈채팅 URL을 입력해 주세요."
            value={partyChatUrl}
            onChange={(e) => setChatURL(e.target.value)}
            required
        />
        </Form.Group>
        <Form.Group controlId="partyDetail" style={ {margin: '20px'}}>
        <Form.Label>파티에 대한 설명</Form.Label>
        <Form.Control style={{ textAlign: 'center', width: '50%', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', fontSize: '13px'}}
            as="textarea"
            rows={3}
            placeholder="파티에 대한 설명을 입력해 주세요."
            value={partyDetail}
            onChange={(e) => setDescription(e.target.value)}
            required
        />
        </Form.Group>
        <Form.Group controlId="partyTag" style={ {margin: '20px'}}>
        <Form.Label>파티 관련 태그 (최대 5개)</Form.Label>
        <Form.Control style={{ textAlign: 'center', width: '50%', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', fontSize: '13px'}}
            type="text"
            placeholder="태그를 입력해 주세요. (최대 5개)"
            value={partyTag}
            onChange={(e) => setTags(e.target.value)}
            maxLength={50}
        />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ margin: '10px'}  }>
        파티 생성
        </Button>
    </StyledForm>
        </div>
        
    );
};
export default PartyMake;