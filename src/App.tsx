import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import Home from "./Home";
import Roster from "./Roster";
import Shows from "./Shows";
import SD from "./SD";
import RAW from "./RAW";
import WWEUndisputed from "./ChampionshipPages/WWEUndisputedChamp";
import WomenUndisputed from "./ChampionshipPages/WomenUndisputedChamp";
import WorldHeavyweight from "./ChampionshipPages/WorldHeavyweightChamp";
import WomenWorld from "./ChampionshipPages/WomenWorldChamp";
import Intercontinental from "./ChampionshipPages/IntercontinentalChamp";
import UnitedStates from "./ChampionshipPages/UnitedStatesChamp";
import WomenIntercontinental from "./ChampionshipPages/WomenIntercontinentalChamp";
import WomenUnitedStates from "./ChampionshipPages/WomenUnitedStatesChamp";
import RawTagTeam from "./ChampionshipPages/RawTagTeamChamps";
import SmackdownTagTeam from "./ChampionshipPages/SmackdownTagTeamChamps";

import Backlash from "./PPVPages/Backlash/Backlash";
import MITB from "./PPVPages/MITB/MITB";
import ONS from "./PPVPages/ONS/ONS";
import Summerslam from "./PPVPages/Summerslam/Summerslam";
import NoMercy from "./PPVPages/NoMercy/NoMercy";
import CyberSunday from "./PPVPages/CyberSunday/CyberSunday";
import SurvivorSeries from "./PPVPages/SurvivorSeries/SurvivorSeries";
import TLC from "./PPVPages/TLC/TLC";
import NYR from "./PPVPages/NYR/NYR";
import RoyalRumble from "./PPVPages/RoyalRumble/RoyalRumble";
import NoWayOut from "./PPVPages/NoWayOut/NoWayOut";

import Login from "./Login";
import NotFound from "./NotFound";
import MMITB from "./ChampionshipPages/MMITB";
import WMITB from "./ChampionshipPages/WMITB";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        
        {/* Protected Routes */}
        <Route path="/Home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/Roster" element={<ProtectedRoute><Roster /></ProtectedRoute>} />
        <Route path="/Shows" element={<ProtectedRoute><Shows /></ProtectedRoute>} />

        {/* Weekly Shows */}
        <Route path="/RAW" element={<ProtectedRoute><RAW /></ProtectedRoute>} />
        <Route path="/SD" element={<ProtectedRoute><SD /></ProtectedRoute>} />

        {/* Championship Pages */}
        <Route path="/WWEUndisputedChamp" element={<ProtectedRoute><WWEUndisputed /></ProtectedRoute>} />
        <Route path="/WomenUndisputedChamp" element={<ProtectedRoute><WomenUndisputed /></ProtectedRoute>} />
        <Route path="/WorldHeavyweightChamp" element={<ProtectedRoute><WorldHeavyweight /></ProtectedRoute>} />
        <Route path="/WomenWorldChamp" element={<ProtectedRoute><WomenWorld /></ProtectedRoute>} />
        <Route path="/IntercontinentalChamp" element={<ProtectedRoute><Intercontinental /></ProtectedRoute>} />
        <Route path="/UnitedStatesChamp" element={<ProtectedRoute><UnitedStates /></ProtectedRoute>} />
        <Route path="/WomenIntercontinentalChamp" element={<ProtectedRoute><WomenIntercontinental /></ProtectedRoute>} />
        <Route path="/WomenUnitedStatesChamp" element={<ProtectedRoute><WomenUnitedStates /></ProtectedRoute>} />
        <Route path="/RawTagTeamChamps" element={<ProtectedRoute><RawTagTeam /></ProtectedRoute>} />
        <Route path="/SmackdownTagTeamChamps" element={<ProtectedRoute><SmackdownTagTeam /></ProtectedRoute>} />
        <Route path="/MMITB" element={<ProtectedRoute><MMITB /></ProtectedRoute>} />
        <Route path="/WMITB" element={<ProtectedRoute><WMITB /></ProtectedRoute>} />

        {/* PPVs */}
        <Route path="/Backlash" element={<ProtectedRoute><Backlash /></ProtectedRoute>} />
        <Route path="/MITB" element={<ProtectedRoute><MITB /></ProtectedRoute>} />
        <Route path="/ONS" element={<ProtectedRoute><ONS /></ProtectedRoute>} />
        <Route path="/Summerslam" element={<ProtectedRoute><Summerslam /></ProtectedRoute>} />
        <Route path="/NoMercy" element={<ProtectedRoute><NoMercy /></ProtectedRoute>} />
        <Route path="/CyberSunday" element={<ProtectedRoute><CyberSunday /></ProtectedRoute>} />
        <Route path="/SurvivorSeries" element={<ProtectedRoute><SurvivorSeries /></ProtectedRoute>} />
        <Route path="/TLC" element={<ProtectedRoute><TLC /></ProtectedRoute>} />
        <Route path="/NYR" element={<ProtectedRoute><NYR /></ProtectedRoute>} />
        <Route path="/RoyalRumble" element={<ProtectedRoute><RoyalRumble /></ProtectedRoute>} />
        <Route path="/NoWayOut" element={<ProtectedRoute><NoWayOut /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
