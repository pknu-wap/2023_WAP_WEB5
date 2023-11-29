//파티 만들기 페이지
//파티 모집 페이지 (partyinfo.js)에서 글쓰기 버튼 클릭시 이 페이지로 이동
import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

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
const [partyRecruitLimit, setRecruitment] = useState(1);
const [partyChatUrl, setChatURL] = useState('');
const [partyDetail, setDescription] = useState('');
// const [festPk, setfestPk] = useState('');

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
    const handleSubmit = async (e) => {
    e.preventDefault();

const data = {
    partyName: partyName,
    festPk: festival.id,
    partyRecruitLimit: partyRecruitLimit,
    partyChatUrl: partyChatUrl,
    partyDetail: partyDetail,
};

try {
    const response = await fetch('https://port-0-server-cloudtype-4fju66f2clmyxbee6.sel5.cloudtype.app/party/new', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
    });
    console.log(JSON.stringify(data));

    if (response.ok) {
        const responseData = await response.json();
        console.log('Party created successfully:', responseData);
        
    } else {
        throw new Error('Failed to create party: ' + response.statusText);
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
    <Link to="/.">
        <Logoimg src={process.env.PUBLIC_URL + '/info.png'} alt="Info" />

    </Link>
    <Headerlist>
        <MyLink to="/festival-list">축제 목록</MyLink>
        <MyLink to="/party-list">전체 파티 목록</MyLink>
        <MyLink to="/my-party-list">내 파티</MyLink>
    </Headerlist>
    </Header>

    <StyledForm onSubmit={handleSubmit}>

    {/* 작성 폼 */}        
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
    {/* <Form.Group controlId="festPk" style={ {margin: '20px'}}>
        <Form.Label>festPk</Form.Label>
        <Form.Control style={{ textAlign: 'center', width: '50%', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', fontSize: '13px'}}
        type="text"
        placeholder="축제 id을 입력하세요. 13"
        value={festPk}
        onChange={(e) => setfestPk(e.target.value)}
        required
    />
    </Form.Group> */}
    <Form.Group controlId="partyRecruitLimit" style={ {margin: '20px'}}>
    <Form.Label>모집인원</Form.Label>
    <Form.Control style={{ textAlign: 'center', width: '50%', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', fontSize: '13px'}}
        type="number"
        placeholder="모집인원 수를 선택하거나 입력해 주세요"
        value={partyRecruitLimit}
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
    <Button variant="primary" type="submit" style={{ margin: '10px' }}>
    파티 생성
    </Button>
</StyledForm>
</div>
);
};

export default PartyMake;


// const PartyMake = () => {
//   // 상태 변수 정의
//   const [partyName, setPartyName] = useState('');
//   const [partyRecruitLimit, setPartyRecruitLimit] = useState('');
//   const [partyChatUrl, setPartyChatUrl] = useState('');
//   const [partyDetail, setPartyDetail] = useState('');
  
//   const params = useParams();
//     // console.log(params);
//     const [festival, setFestival] = useState(null);

//   useEffect(() => {
//     const fetchFestivalData = async () => {
//         try {
//         const response = await fetch(`https://port-0-server-cloudtype-4fju66f2clmyxbee6.sel5.cloudtype.app/festival/read-one/${params.id}`);
//         if (!response.ok) {
//             throw new Error('Failed to fetch festival data');
//         }

//         const festivalData = await response.json();
//         setFestival(festivalData);
//         } catch (error) {
//         console.error('Error fetching festival data:', error);
//         }
//     };

//     fetchFestivalData();
//     }, [params.id]);

//     if (!festival) {
//     return <p>Loading...</p>;
//     }

//   // 폼 제출 핸들러
//   const handleSubmit = async () => {

//     // 입력된 데이터를 서버로 전송하는 비동기 함수 호출
//     try {
//       const response = await sendDataToServer({
//         partyName,
//         partyRecruitLimit,
//         partyChatUrl,
//         partyDetail,
//         festPk: festival.id,
//       });
      

//       // 서버 응답 처리 (예: 성공 메시지 출력)
//       console.log('서버 응답:', response);
//     } catch (error) {
//       // 오류 처리 (예: 오류 메시지 출력)
//       console.error('서버 전송 오류:', error);
//     }
//   };

//   // 서버에 데이터 전송 함수 (가정)
//   const sendDataToServer = async (data) => {


//     const response = await fetch('https://port-0-server-cloudtype-4fju66f2clmyxbee6.sel5.cloudtype.app/party/new', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
        
//       },
//       credentials: 'include',

//       body: JSON.stringify(data),
//     });
//     console.log(JSON.stringify(data));

//     if (!response.ok) {
//       throw new Error(`서버 응답 오류: ${response.statusText}`);
//     }

//     return response.json();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Party Name:
//         <input
//           type="text"
//           value={partyName}
//           onChange={(e) => setPartyName(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Party Recruit Limit:
//         <input
//           type="text"
//           value={partyRecruitLimit}
//           onChange={(e) => setPartyRecruitLimit(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Party Chat URL:
//         <input
//           type="text"
//           value={partyChatUrl}
//           onChange={(e) => setPartyChatUrl(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Party Detail:
//         <textarea
//           value={partyDetail}
//           onChange={(e) => setPartyDetail(e.target.value)}
//         />
//       </label>
//       <br />
//       <button type="submit">제출</button>
//     </form>
//   );
// };

// export default PartyMake;

