// import React, { Component } from 'react';
// import './carousel.css';
// // import React, { useState, useEffect } from 'react';

//     class Carousel extends Component {
//     constructor(props) {
//     super(props);
//     this.state = {
//         currentOffset: 0,
//         windowSize: 3,
//         paginationFactor: 220,
//         items: [
//         { name: '부산축제원정대', tag: ['광안리'], imageUrl: 'star.jpg' },
//         { name: '불꽃놀이', tag: ['광안리', '밤바다', '드론쇼'], imageUrl: 'nightrace.jpg' },
//         { name: '벚꽃축제', tag: ['봄', '여행'], imageUrl: 'star.jpg'},
//         { name: '부산락페스티벌', tag: ['실리카겔', '유다빈밴드'], imageUrl: 'nightrace.jpg' },
//         { name: '고등어축제', tag: ['Seafood', '바다'], imageUrl: 'star.jpg' },
//         { name: '해운대빛축제', tag: ['해운대'], imageUrl: 'star.jpg' },
//         { name: '모래축제', tag: ['모래성'], imageUrl: 'star.jpg' },
//         ],
//         partyItems: [
//             { name: '불꽃놀이팟', tag: ['Party'], imageUrl: 'star.jpg' },
//             { name: '사쿠라', tag: ['Party'], imageUrl: 'nightrace.jpg' },
//             { name: '고등어먹으러가요', tag: ['Party'], imageUrl: 'star.jpg' },
//             { name: '해운대갈사람', tag: ['Party'], imageUrl: 'nightrace.jpg' },
//             { name: '모래놀이합시당', tag: ['Party'], imageUrl: 'star.jpg' },
//             { name: '불꽃축제 보러 가요', tag: ['Party'], imageUrl: 'nightrace.jpg' },
//             { name: '벚꽃축제팟', tag: ['Party'], imageUrl: 'star.jpg' },
        
//         ],
//         isPartyMode: false, 
//         isFestivalMode: false, 
//     };
//     }
//     togglePartyMode = () => {
//         this.setState((prevState) => ({
//             isPartyMode: !prevState.isPartyMode,
//             isFestivalMode: false,
//         }));
//     };
//     toggleFestivalMode = () => {
//         this.setState((prevState) => ({
//         isFestivalMode: !prevState.isFestivalMode,
//         isPartyMode: false, // "축제" 모드로 전환할 때 "파티" 모드 비활성화
//     }));
//     };

//     atEndOfList = () => {
//     return (
//         this.state.currentOffset <=
//         (this.state.paginationFactor * -1) *
//         (this.state.items.length - this.state.windowSize)
//     );
//     };

//     atHeadOfList = () => {
//     return this.state.currentOffset === 0;
//     };

//     moveCarousel = (direction) => {
//     if (direction === 1 && !this.atEndOfList()) {
//         this.setState((prevState) => ({
//         currentOffset: prevState.currentOffset - prevState.paginationFactor,
//         }));
//     } else if (direction === -1 && !this.atHeadOfList()) {
//         this.setState((prevState) => ({
//         currentOffset: prevState.currentOffset + prevState.paginationFactor,
//         }));
//     }
//     };

//     render() {
//     const { isPartyMode, isFestivalMode } = this.state;
//     //const itemsToDisplay = isPartyMode ? this.state.partyItems : this.state.items;     
//     let itemsToDisplay = this.state.items;

//     if (isPartyMode) {
//         itemsToDisplay = this.state.partyItems;
//     } else if (isFestivalMode) {
//         itemsToDisplay = this.state.items;
//     }         

//     const customArrowStyles = {
//         arrow: {
//         fontSize: '24px', 
//         },
//     };

//     return (
        
//         <div className="card-carousel-wrapper">
//             <div className="toggle-buttons">
//             <button id='festival-button'onClick={this.toggleFestivalMode}>축제</button>
//             <button id='party-button'onClick={this.togglePartyMode}> 파티</button>
//             </div>

//         <button
//             className={`card-carousel--nav__left ${
//             this.atHeadOfList() ? 'disabled' : ''
//             }`}
//             onClick={() => this.moveCarousel(-1)}
//             disabled={this.atHeadOfList()}
//             style={customArrowStyles.arrow} 
//         >
            
//         </button>
        
//         <div className="card-carousel">
//             <div className="card-carousel--overflow-container">
//             <div
//                 className="card-carousel-cards"
//                 style={{
//                 transform: `translateX(${this.state.currentOffset}px)`,
//                 }}
//             >
//                 {/* 축제 메인 포스터 표시하는 부분 */}
//                 {itemsToDisplay.map((item, index) => (
//                 <div className="card-carousel--card" key={index}>
//                     <img src={item.imageUrl} alt={`Image ${index+1}`} />

//                     {/* 축제 이름과 태그를 표시하는 부분 */}
//                     <div className="card-carousel--card--footer">
//                     <p>{item.name}</p>
//                     {item.tag.map((tag, tagIndex) => (
//                         <p
//                         className={`tag ${tagIndex > 0 ? 'secondary' : ''}`}
//                         key={tagIndex}
//                         >
//                         {tag}
//                         </p>
//                     ))}
//                     </div>
//                 </div>
//                 ))}
//             </div>
//             </div>
//         </div>
//         <button
//             className={`card-carousel--nav__right ${
//             this.atEndOfList() ? 'disabled' : ''
//             }`}
//             onClick={() => this.moveCarousel(1)}
//             disabled={this.atEndOfList()}
//             style={customArrowStyles.arrow} 
//         >
//         </button>
//         </div>
//     );
//     }
//     }

//     export default Carousel;



// import React, { Component } from 'react';
// import './carousel.css';

// class Carousel extends Component {
// constructor(props) {
// super(props);
// this.state = {
// currentOffset: 0,
// windowSize: 3,
// paginationFactor: 220,
// items: [],
// partyItems: [],
// isPartyMode: false,
// isFestivalMode: false,
// };
// }

// componentDidMount() {
// this.fetchData('https://cors-anywhere.herokuapp.com/https://port-0-buife-5mk12alp6foaqx.sel5.cloudtype.app/festival/popular', 'items');
// this.fetchData('https://cors-anywhere.herokuapp.com/https://port-0-buife-5mk12alp6foaqx.sel5.cloudtype.app/festival/popular', 'partyItems');
// }

// fetchData = (url, type) => {
// fetch(url, {
//     headers: {
//     'Accept': 'application/json',
//     },
// })
//     .then(response => response.json())
//     .then(data => {
//     console.log(`받아온 데이터 (${type}):`, data); //정상 동작 확인 완료
//     this.setState({
//         [type]: data,
//     });
//     })
//     .catch(error => console.error('데이터를 불러오는 중 에러 발생:', error));
// };

// togglePartyMode = () => {
// this.setState((prevState) => ({
// isPartyMode: !prevState.isPartyMode,
// isFestivalMode: false,
// }));
// };

// toggleFestivalMode = () => {
// this.setState((prevState) => ({
// isFestivalMode: !prevState.isFestivalMode,
// isPartyMode: false,
// }));
// };

// atEndOfList = () => {
// return (
//     this.state.currentOffset <=
//     (this.state.paginationFactor * -1) *
//     (this.state.items.length - this.state.windowSize)
// );
// };

// atHeadOfList = () => {
// return this.state.currentOffset === 0;
// };

// moveCarousel = (direction) => {
// if (direction === 1 && !this.atEndOfList()) {
//     this.setState((prevState) => ({
//     currentOffset: prevState.currentOffset - prevState.paginationFactor,
//     }));
// } else if (direction === -1 && !this.atHeadOfList()) {
//     this.setState((prevState) => ({
//     currentOffset: prevState.currentOffset + prevState.paginationFactor,
//     }));
// }
// };

// render() {
// const { isPartyMode, isFestivalMode } = this.state;
// let itemsToDisplay = this.state.items;

// if (isPartyMode) {
// itemsToDisplay = this.state.partyItems;
// } else if (isFestivalMode) {
// itemsToDisplay = this.state.items;
// }

// const customArrowStyles = {
// arrow: {
//     fontSize: '24px',
// },
// };

// return (
// <div className="card-carousel-wrapper">
//     {/* ... (나머지 코드는 변경되지 않음) */}
//     <div className="toggle-buttons">
//         <button id='festival-button'onClick={this.toggleFestivalMode}>축제</button>
//         <button id='party-button'onClick={this.togglePartyMode}> 파티</button>
//         </div>

//     <button
//         className={`card-carousel--nav__left ${
//         this.atHeadOfList() ? 'disabled' : ''
//         }`}
//         onClick={() => this.moveCarousel(-1)}
//         disabled={this.atHeadOfList()}
//         style={customArrowStyles.arrow} 
//     >
        
//     </button>
    
//     <div className="card-carousel">
//         <div className="card-carousel--overflow-container">
//         <div
//             className="card-carousel-cards"
//             style={{
//             transform: `translateX(${this.state.currentOffset}px)`,
//             }}
//         >
//             {/* 축제 메인 포스터 표시하는 부분 */}
//             {itemsToDisplay.map((item, index) => (
//             <div className="card-carousel--card" key={index}>
//                 <img src={item.image || 'mannerReview.png'} alt={`Image ${index+1}`} />

//                 {/* 축제 이름과 태그를 표시하는 부분 */}
//                 <div className="card-carousel--card--footer">
//                 <p>{item.name}</p>
//                 <p className="tag secondary">Start: {item.start}</p>
//         {/* <p className="tag secondary">End: {item.end}</p> */}
//                 {/* {item.tag.map((tag, tagIndex) => (
//                     <p
//                     className={`tag ${tagIndex > 0 ? 'secondary' : ''}`}
//                     key={tagIndex}
//                     >
//                     {tag}
//                     </p>
//                 ))} */}
//                 </div>
//             </div>
//             ))}
//         </div>
//         </div>
//     </div>
//     <button
//         className={`card-carousel--nav__right ${
//         this.atEndOfList() ? 'disabled' : ''
//         }`}
//         onClick={() => this.moveCarousel(1)}
//         disabled={this.atEndOfList()}
//         style={customArrowStyles.arrow} 
//     >
//     </button>
// </div>
// );
// }
// }

// export default Carousel;

import React, { Component } from 'react';
import './carousel.css';

class Carousel extends Component {
constructor(props) {
super(props);
this.state = {
currentOffset: 0,
windowSize: 3,
paginationFactor: 220,
items: [],

};
}

componentDidMount() {
this.fetchData('https://port-0-server-cloudtype-4fju66f2clmyxbee6.sel5.cloudtype.app/festival/popular', 'items');
}

fetchData = (url, type) => {
fetch(url, {
    headers: {
    'Accept': 'application/json',
    },
})
    .then(response => response.json())
    .then(data => {
    console.log(`받아온 데이터 (${type}):`, data); //정상 동작 확인 완료
    this.setState({
        [type]: data,
    });
    })
    .catch(error => console.error('데이터를 불러오는 중 에러 발생:', error));
};


atEndOfList = () => {
return (
    this.state.currentOffset <=
    (this.state.paginationFactor * -1) *
    (this.state.items.length - this.state.windowSize)
);
};

atHeadOfList = () => {
return this.state.currentOffset === 0;
};

moveCarousel = (direction) => {
if (direction === 1 && !this.atEndOfList()) {
    this.setState((prevState) => ({
    currentOffset: prevState.currentOffset - prevState.paginationFactor,
    }));
} else if (direction === -1 && !this.atHeadOfList()) {
    this.setState((prevState) => ({
    currentOffset: prevState.currentOffset + prevState.paginationFactor,
    }));
}
};

render() {
let itemsToDisplay = this.state.items;


const customArrowStyles = {
arrow: {
    fontSize: '24px',
},
};

return (
<div className="card-carousel-wrapper">

    <button
        className={`card-carousel--nav__left ${
        this.atHeadOfList() ? 'disabled' : ''
        }`}
        onClick={() => this.moveCarousel(-1)}
        disabled={this.atHeadOfList()}
        style={customArrowStyles.arrow} 
    >
        
    </button>
    
    <div className="card-carousel">
        <div className="card-carousel--overflow-container">
        <div
            className="card-carousel-cards"
            style={{
            transform: `translateX(${this.state.currentOffset}px)`,
            }}
        >
            {/* 축제 메인 포스터 표시하는 부분 */}
            {itemsToDisplay.map((item, index) => (
            <div className="card-carousel--card" key={index}>
                <img src={item.image || 'mannerReview.png'} alt={`Image ${index+1}`} />

                {/* 축제 이름과 태그를 표시하는 부분 */}
                <div className="card-carousel--card--footer">
                <p className="fest-name">{item.name}</p>
                <p className="tag secondary">{item.start} ~ {item.end}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>
    <button
        className={`card-carousel--nav__right ${
        this.atEndOfList() ? 'disabled' : ''
        }`}
        onClick={() => this.moveCarousel(1)}
        disabled={this.atEndOfList()}
        style={customArrowStyles.arrow} 
    >
    </button>
</div>
);
}
}

export default Carousel;