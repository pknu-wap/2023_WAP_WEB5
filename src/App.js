import { Route, Routes } from 'react-router-dom';
import Mypage from './pages/Mypage';
import Mainpage from './pages/Mainpage';
import FestivalList from './pages/festival-list';
import PartyList from './pages/party-list';
import PartyAllList from './pages/partyall-list';
import PartyMake from './pages/partymake';
import PartyPopup from './pages/partyPopup';
import ReviewPage from './pages/reviewPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './pages/LoginForm';
import SignUp2 from './pages/SignUp2';
import SignUp3 from './pages/SignUp3';
import Mypartylist from './pages/my-party-list';
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
      <Route path="/partyall-list" element={<PartyAllList/>} />
      <Route path="/partymake" element={<PartyMake/>} />
      <Route path="/partyPopup" element={<PartyPopup/>} />
      <Route path="/reviewPage" element={<ReviewPage/>} />
      <Route path="/LoginForm" element={<LoginForm/>} />
      <Route path="/SignUp2" element={<SignUp2/>} />
      <Route path="/SignUp3" element={<SignUp3/>} />
      <Route path="/my-party-list" element={<Mypartylist/>} />

    </Routes>
  );

}

export default App;