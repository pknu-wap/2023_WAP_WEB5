import { Link } from 'react-router-dom';
import MapTest from './Maptest.js';
// import MultipleItems from './slider.js';
import Carousel from './carousel';
import Login from './login';
import styled from 'styled-components';
// import LoginForm from './LoginForm.js';

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

const Linkdiv = styled(Link)`
text-decoration: none;
color: inherit;
margin-left: 5px;
display: inline-block;
transition: background-color 0.3s ease-in-out;

font-size: 13px; /* 글자 크기 지정 */
font-weight: 400; /* 글자 두께 지정 */

`;

const Mainpage = () => {
    return (
    <div>
        <nav className="navigator">
        <MyLink to="/festival-list">축제목록</MyLink>
        <MyLink to="/partyall-list">파티목록</MyLink>
        <Linkdiv>
        {/* <LoginForm /> */}
        <Login />
        <MyLink to="/Mypage">마이페이지</MyLink>

        </Linkdiv>
        
        </nav>

        <header className="Header">
        <img src="info.png" alt="Logo" />
        {/* <p id="BIF"><strong>Busan Internal Festival</strong></p> */}
        </header>
    

        <Carousel />

        <div className="Map"> 
        <MapTest />
        </div>
        
    </div>
);
};

export default Mainpage;