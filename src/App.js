import { Route, Routes } from 'react-router-dom';
import Mypage from './pages/Mypage';
import Mainpage from './pages/Mainpage';
import FestivalList from './pages/festival-list';
import PartyList from './pages/party-list';
import PartyMake from './pages/partymake';
import PartyPopup from './pages/partyPopup';
import ReviewPage from './pages/reviewPage';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import './App.css';
import FestivalDetail from './pages/festival-detail';


function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Mainpage />} />
      <Route path="/Mypage" element={<Mypage/>} />
      <Route path="/festival-list" element={<FestivalList />} />
      <Route path="/festival-detail" element={<FestivalDetail />} />
      <Route path="/party-list" element={<PartyList/>} />
      <Route path="/partymake" element={<PartyMake/>} />
      <Route path="/partyPopup" element={<PartyPopup/>} />
      <Route path="/reviewPage" element={<ReviewPage/>} />

    </Routes>
  );

}

export default App;