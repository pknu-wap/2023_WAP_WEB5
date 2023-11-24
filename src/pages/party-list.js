// src/components/MapInfo.js
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import ListPage from './Listpage';
import FilterComponent from './FilterComponent';
import { Link } from 'react-router-dom';
import modalStyles from './ModalStyle'; // 스타일 파일 import

// // 공통 스타일을 정의한 styled-components
const StyledDiv = styled.div`
padding-left: 15px; /* padding 추가 */
padding-right: 15px; /* padding 추가 */
`;


const data = [
    { id: 1, title: '품목 1', date: '2023-11-13' },
    { id: 2, title: '품목 2', date: '2023-11-14' },
    { id: 3, title: '품목 3', date: '2023-11-15' },
    { id: 4, title: '품목 4', date: '2023-11-16' },
    { id: 5, title: '품목 5', date: '2023-11-17' },
    { id: 6, title: '품목 6', date: '2023-11-18' },
    { id: 1, title: '품목 1', date: '2023-11-13' },
    { id: 2, title: '품목 2', date: '2023-11-14' },
    { id: 3, title: '품목 3', date: '2023-11-15' },
    { id: 4, title: '품목 4', date: '2023-11-16' },
    { id: 5, title: '품목 5', date: '2023-11-17' },
    { id: 6, title: '품목 6', date: '2023-11-18' },
    { id: 1, title: '품목 1', date: '2023-11-13' },
    { id: 2, title: '품목 2', date: '2023-11-14' },
    { id: 3, title: '품목 3', date: '2023-11-15' },
    { id: 4, title: '품목 4', date: '2023-11-16' },
    { id: 5, title: '품목 5', date: '2023-11-17' },
    { id: 6, title: '품목 8', date: '2023-11-18' },

  ];

const PartyList= () => {

    

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const totalPages = Math.ceil(data.length / itemsPerPage);

    
    const handleClick = (page) => {
        setCurrentPage(page);
    };


        const handlePrevClick = () => {
            setCurrentPage((prev) => prev - 1);
        };

        const handleNextClick = () => {
            setCurrentPage((prev) => prev + 1);
        };

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentItems = data.slice(startIndex, endIndex);


    return (
    <div>
        <h2 style={{display:'flex',justifyContent:'center'}}>2023 부산 광안리 불꽃 축제</h2>

        <div>
            <Link to="/partymake"><button style={modalStyles.writeButton}>글쓰기</button></Link>
            <FilterComponent />
            
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <ListPage/>
                <div style={{marginBottom: '20px', position: 'fixed', bottom: 0, display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <div style={{ display: 'flex' }}>
                        <button onClick={handlePrevClick} disabled={currentPage === 1}>
                            {'<'}
                        </button>
                        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                            (page) => (
                                <button
                                key={page}
                                onClick={() => handleClick(page)}
                                disabled={page === currentPage}
                                style={{ margin: '0 10px', color: page === currentPage ? '#488AEE' : 'black' }}
                            >
                                {page}
                            </button>
                            )
                        )}
                        <button onClick={handleNextClick} disabled={currentPage === totalPages}>
                            {'>'}
                        </button>
                    </div>
                </div>
            </div>
    </div>
    
    );
};

export default PartyList;