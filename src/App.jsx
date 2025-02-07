import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import Map from "./Map";
import FileReport from "./FileReport";
import Accounts from "./Accounts";
import AboutUs from "./AboutUs";
import BotpressChat from "./components/botpressChat"; // Import BotpressChat component

function App() {
  return (
    <Router>
      {/* Include Botpress Chat globally */}
      <BotpressChat />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/map" element={<Map />} />
        <Route path="/file" element={<FileReport />} />
        <Route path="/profile" element={<Accounts />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
