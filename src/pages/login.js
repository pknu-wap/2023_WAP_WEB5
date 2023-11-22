    import React, { Component } from 'react';
    import { Link } from 'react-router-dom';
    import styled from 'styled-components';
    import { useNavigate } from 'react-router-dom';
    
    // 공통 스타일을 정의한 styled-components

    const StyledDiv = styled.div`
    padding-right: 15px; /* padding 추가 */
    `;
    const StyledButton = styled.button`
    text-decoration: none;
    color: inherit;
    background-color: lightGray;
    padding: 5px 10px;
    border: none; /* 테두리 제거 */
    border-radius: 13px;
    display: inline-block;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    font-size: 13px; /* 글자 크기 지정 */
    font-weight: 400; /* 글자 두께 지정 */
    `;

    const MyLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    background-color: lightGray;
    padding: 5px 10px;
    margin-left: 10px;
    border-radius: 13px;
    display: inline-block;
    transition: background-color 0.3s ease-in-out;

    font-size: 13px; /* 글자 크기 지정 */
    font-weight: 400; /* 글자 두께 지정 */

    `;

    class Login extends Component {
    constructor(props) {
    super(props);
    this.state = {
        isLoggedIn: false, // 초기 로그인 상태는 로그아웃 상태
    };
    }

    handleLogin = () => {
    // 사용자가 로그인 버튼을 클릭할 때 호출되는 함수
    this.setState({
        isLoggedIn: true, // 로그인 상태로 변경
    });
    };

    handleLogout = () => {
    // 사용자가 로그아웃 버튼을 클릭할 때 호출되는 함수
    this.setState({
        isLoggedIn: false, // 로그아웃 상태로 변경
    });
    };

    render() {
    const { isLoggedIn } = this.state;
    function Login() {
        const navigate = useNavigate();
        
        }
    return (
        <StyledDiv>
        {isLoggedIn ? ( // isLoggedIn 상태에 따라 다른 버튼 렌더링
            <div>
            <StyledButton onClick={this.handleLogout}>로그아웃</StyledButton>
            <MyLink to="/Mypage">마이페이지</MyLink>
            </div>
        ) : (
            <MyLink to="/LoginForm">
            <StyledButton onClick={this.handleLogin}>로그인</StyledButton>
            </MyLink>
        )}
        </StyledDiv>
    );
    }
    }

    export default Login;
