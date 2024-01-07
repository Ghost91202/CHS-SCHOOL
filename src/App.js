import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import StudentDashboard from './components/StudentDashboard.js';
import AdminDashboard from './components/AdminDashboard.js';
import ClassPage from './components/ClassPage.js';
import Register from './components/RegistrationForm.js';
import Home from "./components/home.js"
import Slider from "./components/image.js"
import Fees from "./pages/fees.js"
import About from "./pages/aboutpage.js"
import Activities from "./pages/activity.js"
import AllTeams from "./pages/allteam.js"
import Team from "./pages/Team.js"
import Admission from "./pages/Admission.js"
import Intro from "./home/home.js"
import Home2 from "./chskanpurDehat/components/home.js"
import Pdf from "./chskanpurDehat/pages/certificate.js"
import Gallery from "./pages/specialday.js"
import Timing from "./pages/schooltiming.js"
import { ParallaxProvider } from "react-scroll-parallax";
const App = () => {
  const [userRole, setUserRole] = useState(null);

  const handleLogin = (role) => {
    setUserRole(role);
  };

  return (
<div className=' overflow-hidden'>
<Router>
      <Routes>
      
      <Route path="/Chs" element={<Home />} />
      <Route path="/Chs-Kanpur-Dehat" element={<Home2 />} />
      <Route path="/" element={<Intro />} />
      <Route path="/SchoolTiming" element={<Timing />} />

   
 
      <Route path="/Chs-Kanpur-Dehat/certificate" element={<Pdf />} />
      <Route path="/cbse/Gallery" element={<Gallery />} />

      <Route exact path="/mb" element={<Team />} />
        <Route path="/team/:memberId" element={<AllTeams />} />
    
      <Route path="/Activities" element={<Activities />} />
      <Route path="/chs/Admission" element={<Admission />} />
      <Route path="/About" element={<About />} />
      <Route path="/fees" element={<Fees />} />
      <Route path="/Register" element={<Register />} />
        <Route
          path="/login"
          element={userRole ? <Navigate to={`/${userRole}`} /> : <LoginForm onLogin={handleLogin} />}
        />
        <Route
          path="/student"
          element={userRole === 'student' ? <StudentDashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin"
          element={userRole === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />}
          
        />
         <Route path="/admin/classes/:className"   element={userRole === 'admin' ? <ClassPage /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
</div>
  );
};

export default App;
