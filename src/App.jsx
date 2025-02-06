// import LoginPage from "./LoginPage";


// function App() {
//   return <LoginPage />;
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage"; // Create this page
import SignUpPage from "./SignUpPage"; // Create this page
import Map from "./Map";
import FileReport from "./FileReport";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/map" element={<Map/>}/>
        <Route path="/file" element={<FileReport/>}/>
      </Routes>
    </Router>
  );
}

export default App;
