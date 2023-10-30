import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Imagediv= styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
`

const Img = styled.img`
    width: 200px;
    margin: 10px 10px auto;
`

const items = [
    'http://bnx.oa.gg/img/20160913PM122333_5909.jpg',
    'http://bnx.oa.gg/img/20160913PM122312_9304.jpg',
    'http://bnx.oa.gg/img/20160913PM122323_2917.jpg',
    'http://bnx.oa.gg/img/20160913PM122333_5909.jpg',
    'http://bnx.oa.gg/img/20160913PM122333_5909.jpg',
    'http://bnx.oa.gg/img/20160913PM122333_5909.jpg',
    'http://bnx.oa.gg/img/20160913PM122333_5909.jpg',
    'http://bnx.oa.gg/img/20160913PM122333_5909.jpg',
    'http://bnx.oa.gg/img/20160913PM122333_5909.jpg',
    'http://bnx.oa.gg/img/20160913PM122333_5909.jpg',
    'http://bnx.oa.gg/img/20160913PM122333_5909.jpg',
    'http://bnx.oa.gg/img/20160913PM122333_5909.jpg',
    'http://bnx.oa.gg/img/20160913PM122333_5909.jpg',
    'http://bnx.oa.gg/img/20160913PM122333_5909.jpg',
    'http://bnx.oa.gg/img/20160913PM122333_5909.jpg',
    'http://bnx.oa.gg/img/20160913PM122333_5909.jpg',
    'http://bnx.oa.gg/img/20160913PM122333_5909.jpg',
    'star.jpg',
];


const PhotoInfo = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(items.length / itemsPerPage);

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
        const currentItems = items.slice(startIndex, endIndex);

        return (
            <div>
                <Imagediv>
                    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '10px' }}>
                        {currentItems.map((item, index) => (
                            <Img key={index} src={item} alt=""></Img>
                        ))}
                    </section>
                </Imagediv>
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
        );
    };

export default PhotoInfo;
