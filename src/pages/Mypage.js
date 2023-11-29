import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MyPageInfo from './mypage-info';
import PasswordChange from './PasswordChange';

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

const infoData = {
    userID: 'testid1234',
    userBirth:'2003년 1월 3일',
    userName: 'testnickname',
    userGender: '여',
};

const Mypage = () => {
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
            <MyLink to ="/partyall-list">전체 파티 목록</MyLink>
            <MyLink to ="/my-party-list">내 파티</MyLink>
            </Headerlist>
            <MyPageInfo infoData={infoData}/>
            <PasswordChange/>



        </Header>
        </div>
        
    );
    };

    export default Mypage;


