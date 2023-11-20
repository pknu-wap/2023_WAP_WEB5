import React, { useState } from 'react';
import './ReviewImage.css'; // 스타일을 정의한 CSS 파일을 import

const Image = ({ index, onClick }) => {
const [isSelected, setIsSelected] = useState(false);

const handleImageClick = () => {
setIsSelected(!isSelected);
onClick(index, !isSelected); // isSelected 값을 부모 컴포넌트로 전달
};

return (
<div
    className={`image ${isSelected ? 'selected' : ''}`}
    onClick={handleImageClick}
>
    {/* 이미지 내용 */}
    <img
    src={"mannerReview.png"} 
    alt={`Image ${index}`}
    />
</div>
);
};

const ReviewImage = () => {
const [selectedImageCount, setSelectedImageCount] = useState(0);
// const [selectedImageIndexes, setSelectedImageIndexes] = useState([]);

const handleImageClick = (index, isSelected) => {
if (isSelected) {
    // 이미지가 선택된 경우
    // setSelectedImageIndexes((prevIndexes) => [...prevIndexes, index]);
    setSelectedImageCount(selectedImageCount + 1);
} else {
    // 이미지가 선택 해제된 경우
    // setSelectedImageIndexes((prevIndexes) =>
    // prevIndexes.filter((prevIndex) => prevIndex !== index)
    // );
    setSelectedImageCount(selectedImageCount - 1);
}
};

return (
<div>
    <div className="image-gallery">
    {[0, 1, 2, 3, 4].map((index) => (
        <Image key={index} index={index} onClick={handleImageClick} />
    ))}
    </div>
    <p style={{textAlign: 'center', padding: '20px'}}>별점: {selectedImageCount}점</p>
    {/* <p>선택된 이미지 인덱스: {selectedImageIndexes.join(', ')}</p> */}
</div>
);
};

export default ReviewImage;
