import { Route, Routes } from 'react-router-dom';
import Mypage from './pages/Mypage';
import Mainpage from './pages/Mainpage';
import FestivalList from './pages/festival-list';
import PartyList from './pages/party-list';

import React from 'react';
import './App.css';
import FestivalDetail from './pages/festival-detail';
import Logintest from './pages/logintest';


function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Mainpage />} />
      <Route path="/Mypage" element={<Mypage/>} />
      <Route path="/festival-list" element={<FestivalList />} />
      <Route path="/festival-detail" element={<FestivalDetail />} />
      <Route path="/party-list" element={<PartyList/>} />
      <Route path="/logintest" element={<Logintest/>} />
    </Routes>
  );

}

export default App;