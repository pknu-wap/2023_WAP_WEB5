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
`
const Description = styled.div`
float: left;
margin-left: 50px;

`
const DetailInfo = () => {
    return (
    <div>
        {/* <ImageContainer> */}
                <DetailImage src='star.jpg' alt="이미지" />
        {/* </ImageContainer> */}
        <Description>
                <p>description</p>
                <p>2023 부산 광안리 불꽃 축제</p>
        </Description>
        
    </div>
    

    
    );
    };

export default DetailInfo;

//백엔드랑 연동하는 함수 코드?
// import React, { useState, useEffect } from 'react';

// const [data, setData] = useState(null);

//     useEffect(() => {
//     // 데이터베이스에서 데이터를 가져오는 비동기 함수를 호출
//     fetchDataFromDatabase()
//         .then((result) => {
//         setData(result);
//         })
//         .catch((error) => {
//         console.error('데이터 가져오기 실패:', error);
//         });
//     }, []);
// // 데이터베이스에서 데이터를 가져오는 비동기 함수
// const fetchDataFromDatabase = async () => {
//     // 데이터베이스에서 데이터를 가져와서 반환하는 로직을 작성
//     // 실제로는 데이터베이스에서 데이터를 가져오는 코드를 구현해야 합니다.
//     // 예를 들어, API 요청 또는 데이터베이스 쿼리를 사용할 수 있습니다.
//     // 가져온 데이터는 이미지 URL 및 설명을 포함해야 합니다.
//     return {
//         imageUrl: '이미지 URL',
//         description: '이미지 설명',
//     };
//     };

// const DetailInfo = () => {
//     return (
//     <div>
//         <h2>상세 정보</h2>
//         <p>이 페이지는 상세 정보 탭입니다. 다양한 상세 정보가 여기에 표시됩니다.</p>
//         <div>
//         {data && (
//         <div className="image-container">
//             <div className="image">
//             <img src={data.imageUrl} alt="이미지" />
//             </div>
//             <div className="description">
//             <p>{data.description}</p>
//             </div>
//         </div>
//         )}
//     </div>
//     </div>
    

    
//     );
//     };

// export default DetailInfo;
