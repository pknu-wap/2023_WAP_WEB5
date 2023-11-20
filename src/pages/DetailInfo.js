// src/components/DetailInfo.js
//일단 이미지 임시로 넣어놓음
import React from 'react';
import styled from 'styled-components';

// const ImageContainer = styled.div`
// width: 40%;
// margin-left: 20px;
// border: 3px solid Green;
// `

const DetailImage = styled.img`
// border: 3px solid Red;
width: 30%;
height: 450px;
margin-left: 100px;
float: left;
`;

const Description = styled.div`
float: left;
margin-left: 50px;
`;

const DetailInfo = ({ festData }) => {
    const { image, description } = festData;

    return (
    <div>
        {/* <ImageContainer> */}
                <DetailImage src={image} alt="이미지" />
        {/* </ImageContainer> */}
        <Description>
                <p>{description}</p>
        </Description>
        
    </div>
    

    
    );
    };

export default DetailInfo;
