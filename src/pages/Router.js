// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import FestivalList from './pages/festival-list';
// import FestivalDetail from './pages/festival-detail';
// // import DetailInfo from "./DetailInfo";

// const App = () => {
// return (
// <BrowserRouter>
//     <Routes>
//     <Route path="/" element={<FestivalList />} />
//     {/* <Route path="/DetailInfo/:id" element={<DetailInfo />} /> */}
//     <Route path="/festival-detail/:id" element={<FestivalDetail />} />

//     </Routes>
// </BrowserRouter>
// );
// };

// export default App;

// Router.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FestivalList from './festival-list';
import FestivalDetail from './festival-detail';
import PartyMake from './partymake';
import PartyInfo from './PartyInfo';
import PartyAllList from './partyall-list';
import PartyPopup from './partyPopup';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={FestivalList} />
        <Route path="/festival-detail/:id" element={FestivalDetail} />
        {/* <Route path="/festival-detail/:id" element={FestivalDetail} /> */}
        <Route exact path="/" element={PartyInfo} />
        <Route path="/partymake/:id" element={PartyMake} />
        <Route exact path="/" element={PartyAllList} />
        <Route path="/partyPopup/:partyPk" element={PartyPopup} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
