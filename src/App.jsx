  // import LoginPage from "./LoginPage";


  // function App() {
  //   return <LoginPage />;
  // }

  // export default App;
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import LandingPage from "./LandingPage";
  import LandingPage2 from "./LandingPage2";  
  import LoginPage from "./LoginPage"; // Create this page
  import SignUpPage from "./SignUpPage"; // Create this page
  import Map from "./Map";
  import FileReport from "./FileReport";
  import Accounts from "./Accounts";
  import AboutUs from "./AboutUs";
  import HowItWorks from "./HowitWorks";

  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/landingpage2" element={<LandingPage2 />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/map" element={<Map/>}/>
          <Route path="/file" element={<FileReport/>}/>
          <Route path ="/profile" element={<Accounts/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/how" element={<HowItWorks/>}/>
        </Routes>
      </Router>
    );
  }

  export default App;
