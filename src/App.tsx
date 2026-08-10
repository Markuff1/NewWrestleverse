import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import Login from "./Login";
import NotFound from "./NotFound";
import CookieConsent from "./legal/CookieConsent";

const Home = lazy(() => import("./Home"));
const Roster = lazy(() => import("./Roster"));
const Shows = lazy(() => import("./Shows"));
const SD = lazy(() => import("./SD"));
const RAW = lazy(() => import("./RAW"));
const Draft = lazy(() => import("./Draft"));
const News = lazy(() => import("./News"));
const PrivacyPolicy = lazy(() => import("./legal/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./legal/TermsAndConditions"));

const WWEUndisputed = lazy(() => import("./ChampionshipPages/WWEUndisputedChamp"));
const WomenUndisputed = lazy(() => import("./ChampionshipPages/WomenUndisputedChamp"));
const WorldHeavyweight = lazy(() => import("./ChampionshipPages/WorldHeavyweightChamp"));
const WomenWorld = lazy(() => import("./ChampionshipPages/WomenWorldChamp"));
const Intercontinental = lazy(() => import("./ChampionshipPages/IntercontinentalChamp"));
const UnitedStates = lazy(() => import("./ChampionshipPages/UnitedStatesChamp"));
const WomenIntercontinental = lazy(() => import("./ChampionshipPages/WomenIntercontinentalChamp"));
const WomenUnitedStates = lazy(() => import("./ChampionshipPages/WomenUnitedStatesChamp"));
const RawTagTeam = lazy(() => import("./ChampionshipPages/RawTagTeamChamps"));
const SmackdownTagTeam = lazy(() => import("./ChampionshipPages/SmackdownTagTeamChamps"));
const MMITB = lazy(() => import("./ChampionshipPages/MMITB"));
const WMITB = lazy(() => import("./ChampionshipPages/WMITB"));

const Backlash = lazy(() => import("./PPVPages/Backlash/Backlash"));
const MITB = lazy(() => import("./PPVPages/MITB/MITB"));
const ONS = lazy(() => import("./PPVPages/ONS/ONS"));
const Summerslam = lazy(() => import("./PPVPages/Summerslam/Summerslam"));
const NoMercy = lazy(() => import("./PPVPages/NoMercy/NoMercy"));
const CyberSunday = lazy(() => import("./PPVPages/CyberSunday/CyberSunday"));
const SurvivorSeries = lazy(() => import("./PPVPages/SurvivorSeries/SurvivorSeries"));
const TLC = lazy(() => import("./PPVPages/TLC/TLC"));
const NYR = lazy(() => import("./PPVPages/NYR/NYR"));
const RoyalRumble = lazy(() => import("./PPVPages/RoyalRumble/RoyalRumble"));
const NoWayOut = lazy(() => import("./PPVPages/NoWayOut/NoWayOut"));
const OverTheLimit = lazy(() => import("./PPVPages/OverTheLimit/OverTheLimit"));
const NOC = lazy(() => import("./PPVPages/NOC/NightOfChampions"));
const EC = lazy(() => import("./PPVPages/EC/EC"));
const HIAC = lazy(() => import("./PPVPages/HIAC/HIAC"));
const Wrestlemania = lazy(() => import("./PPVPages/Wrestlemania/Wrestlemania"));
const CIP = lazy(() => import("./PPVPages/ClashInParis/CIP"));
const Armageddon = lazy(() => import("./PPVPages/Armageddon/Armageddon"));
const ER = lazy(() => import("./PPVPages/ER/ER"));
const BraggingRights = lazy(() => import("./PPVPages/BR/BraggingRights"));

function App() {
  return (
    <Router>
      <Suspense fallback={null}>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Login />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
          <Route path="*" element={<NotFound />} />

          {/* Protected Routes */}
          <Route path="/Home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/Roster" element={<ProtectedRoute><Roster /></ProtectedRoute>} />
          <Route path="/Shows" element={<ProtectedRoute><Shows /></ProtectedRoute>} />
          <Route path="/News" element={<ProtectedRoute><News /></ProtectedRoute>} />

          {/* Weekly Shows */}
          <Route path="/RAW" element={<ProtectedRoute><RAW /></ProtectedRoute>} />
          <Route path="/SD" element={<ProtectedRoute><SD /></ProtectedRoute>} />
          <Route path="/Draft" element={<ProtectedRoute><Draft /></ProtectedRoute>} />

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
          <Route path="/OverTheLimit" element={<ProtectedRoute><OverTheLimit /></ProtectedRoute>} />
          <Route path="/NOC" element={<ProtectedRoute><NOC /></ProtectedRoute>} />
          <Route path="/HIAC" element={<ProtectedRoute><HIAC /></ProtectedRoute>} />
          <Route path="/EC" element={<ProtectedRoute><EC /></ProtectedRoute>} />
          <Route path="/Wrestlemania" element={<ProtectedRoute><Wrestlemania /></ProtectedRoute>} />
          <Route path="/ClashInParis" element={<ProtectedRoute><CIP /></ProtectedRoute>} />
          <Route path="/Armageddon" element={<ProtectedRoute><Armageddon /></ProtectedRoute>} />
          <Route path="/ER" element={<ProtectedRoute><ER /></ProtectedRoute>} />
          <Route path="/BraggingRights" element={<ProtectedRoute><BraggingRights /></ProtectedRoute>} />
        </Routes>
      </Suspense>

      <CookieConsent />
    </Router>
  );
}

export default App;
