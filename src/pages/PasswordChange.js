import React, { useState } from 'react';
import styled from 'styled-components';

    const PasswordChangeContainer = styled.div`
    text-align: center;
    padding-top: 10px;
    padding-bottom:20px;
    `;

    const PasswordInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

    const PasswordInput = styled.input`
    margin-bottom: 10px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 15%;
    `;

    const ShowPasswordIcon = styled.span`
    position: relative;
    top: -36.5px;
    left: 120px;
    cursor: pointer;
    font-size: 18px;
    color: #777;
    transition: color 0.3s;

    &:hover {
    color: #488AEE;
    }
    `;

    const RequirementText = styled.p`
    font-size: 12px;
    color: #777;
    `;

    const SubmitButton = styled.button`
    background-color: #488AEE;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    `;

    const PasswordChange = () => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = () => {
    // 등록 버튼을 눌렀을 때 처리하는 로직 추가
    alert('수정되었습니다.');
    };

    return (
    <PasswordChangeContainer>
        <h2>비밀번호 변경</h2>
        <PasswordInputContainer>
        <PasswordInput
            type={showPassword ? 'text' : 'password'}
            placeholder="현재 비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <ShowPasswordIcon onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? '🙈' : '👁️'}
        </ShowPasswordIcon>
        </PasswordInputContainer>
        <PasswordInputContainer>
        <PasswordInput
            type={showPassword ? 'text' : 'password'}
            placeholder="새 비밀번호"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
        />
        <ShowPasswordIcon onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? '🙈' : '👁️'}
        </ShowPasswordIcon>
        </PasswordInputContainer>
        <PasswordInputContainer>
        <PasswordInput
            type={showPassword ? 'text' : 'password'}
            placeholder="새 비밀번호 확인"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
        <ShowPasswordIcon onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? '🙈' : '👁️'}
        </ShowPasswordIcon>
        </PasswordInputContainer>
        <RequirementText>
        * 비밀번호 요건: 8자 이상, 대문자, 숫자, 특수문자를 포함해야 합니다.
        </RequirementText>
        <SubmitButton onClick={handleSubmit}>등록</SubmitButton>
    </PasswordChangeContainer>
    );
    };

export default PasswordChange;
