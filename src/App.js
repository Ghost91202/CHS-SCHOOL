import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Loading from "./pages/loading.js"
const StudentDashboard = lazy(() => import('./components/StudentDashboard.js'));
const AdminDashboard = lazy(() => import('./components/AdminDashboard.js'));
const ClassPage = lazy(() => import('./components/ClassPage.js'));
const Register = lazy(() => import('./components/RegistrationForm.js'));
const Home = lazy(() => import('./components/home.js'));
const Slider = lazy(() => import('./components/image.js'));
const Fees = lazy(() => import('./pages/fees.js'));
const About = lazy(() => import('./pages/aboutpage.js'));
const Activities = lazy(() => import('./pages/activity.js'));
const AllTeams = lazy(() => import('./pages/allteam.js'));
const Team = lazy(() => import('./pages/Team.js'));
const Admission = lazy(() => import('./pages/Admission.js'));
const Intro = lazy(() => import('./home/home.js'));
const Home2 = lazy(() => import('./chskanpurDehat/components/home.js'));
const Pdf = lazy(() => import('./chskanpurDehat/pages/certificate.js'));
const Gallery = lazy(() => import('./pages/gallery.js'));
const Testi = lazy(() => import('./pages/testi.js'));
const Client = lazy(() => import('./components/client3.js'));
const Timing = lazy(() => import('./pages/timing.js'));
const Parent = lazy(() => import('./pages/Forparents.js'));
const Earlyage = lazy(() => import('./pages/earlyage.js'));
const Primary = lazy(() => import('./pages/Primary.js'));



class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}



const App = () => {
  const [userRole, setUserRole] = useState(null);

  const handleLogin = (role) => {
  try {
    localStorage.setItem('userRole', role);
    setUserRole(role);
  } catch (error) {
    console.error('Error accessing localStorage:', error);
  }
};


  return (
    <div className=' overflow-hidden'>
      <Router>
        <Routes>
       
          <Route
            path="/Chs"
            element={
              <ErrorBoundary>
              <Suspense fallback={
            <div className='flex justify-center h-screen w-screen items-center'>
              <Loading/>
            </div>
              }>
                <Home />
              </Suspense>
               </ErrorBoundary>
            }
          />
          <Route
            path="/Chs-Kanpur-Dehat"
            element={
              <ErrorBoundary>
              <Suspense fallback={ <div className='flex justify-center h-screen w-screen items-center'>
              <Loading/>
            </div>}>
                <Home2 />
              </Suspense>
              </ErrorBoundary>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback={ <div className='flex justify-center h-screen w-screen items-center'>
              <Loading/>
            </div>}>
                <Intro />
              </Suspense>
            }
          />
          <Route
            path="/Early-Years"
            element={
              <Suspense fallback={ <div className='flex justify-center h-screen w-screen items-center'>
              <Loading/>
            </div>}>
                <Earlyage />
              </Suspense>
            }
          />
          <Route
            path="/Primary"
            element={
              <Suspense fallback={ <div className='flex justify-center h-screen w-screen items-center'>
              <Loading/>
            </div>}>
                <Primary />
              </Suspense>
            }
          />
          <Route
            path="/certificate"
            element={
              <Suspense fallback={ <div className='flex justify-center h-screen w-screen items-center'>
              <Loading/>
            </div>}>
                <Pdf />
              </Suspense>
            }
          />
          <Route
            path="/client"
            element={
              <Suspense fallback={ <div className='flex justify-center h-screen w-screen items-center'>
              <Loading/>
            </div>}>
                <Client />
              </Suspense>
            }
          />
          <Route
            path="/Parent"
            element={
              <Suspense fallback={ <div className='flex justify-center h-screen w-screen items-center'>
              <Loading/>
            </div>}>
                <Parent />
              </Suspense>
            }
          />
          <Route
            path="/Testi"
            element={
              <Suspense fallback={ <div className='flex justify-center h-screen w-screen items-center'>
              <Loading/>
            </div>}>
                <Testi />
              </Suspense>
            }
          />
          <Route
            path="/Gallery"
            element={
              <Suspense fallback={ <div className='flex justify-center h-screen w-screen items-center'>
              <Loading/>
            </div>}>
                <Gallery />
              </Suspense>
            }
          />
          <Route
            path="/Timing"
            element={
              <Suspense fallback={ <div className='flex justify-center h-screen w-screen items-center'>
              <Loading/>
            </div>}>
                <Timing />
              </Suspense>
            }
          />
          <Route
            exact
            path="/mb"
            element={
              <Suspense fallback={ <div className='flex justify-center h-screen w-screen items-center'>
              <Loading/>
            </div>}>
                <Team />
              </Suspense>
            }
          />
          <Route
            path="/team/:memberId"
            element={
              <Suspense fallback={ <div className='flex justify-center h-screen w-screen items-center'>
              <Loading/>
            </div>}>
                <AllTeams />
              </Suspense>
            }
          />
          <Route
            path="/Activities"
            element={
              <Suspense fallback={ <div className='flex justify-center h-screen w-screen items-center'>
              <Loading/>
            </div>}>
                <Activities />
              </Suspense>
            }
          />
          <Route
            path="/chs/Admission"
            element={
              <Suspense fallback={ <div className='flex justify-center h-screen w-screen items-center'>
              <Loading/>
            </div>}>
                <Admission />
              </Suspense>
            }
          />
          <Route
            path="/About"
            element={
              <Suspense fallback={ <div className='flex justify-center h-screen w-screen items-center'>
              <Loading/>
            </div>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/fees"
            element={
              <Suspense fallback={ <div className='flex justify-center h-screen w-screen items-center'>
              <Loading/>
            </div>}>
                <Fees />
              </Suspense>
            }
          />
          <Route
            path="/Register"
            element={
              <Suspense fallback={ <div className='flex justify-center h-screen w-screen items-center'>
              <Loading/>
            </div>}>
                <Register />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              userRole ? (
                <Navigate to={`/${userRole}`} />
              ) : (
                <Suspense fallback={ <div className='flex justify-center h-screen w-screen items-center'>
              <Loading/>
            </div>}>
                  <LoginForm onLogin={handleLogin} />
                </Suspense>
              )
            }
          />
          <Route
            path="/student"
            element={
              userRole === 'student' ? (
                <Suspense fallback={ <div className='flex justify-center h-screen w-screen items-center'>
              <Loading/>
            </div>}>
                  <StudentDashboard />
                </Suspense>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/admin"
            element={
              userRole === 'admin' ? (
                <Suspense fallback={ <div className='flex justify-center h-screen w-screen items-center'>
              <Loading/>
            </div>}>
                  <AdminDashboard />
                </Suspense>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/admin/classes/:className"
            element={
              userRole === 'admin' ? (
                <Suspense fallback={ <div className='flex justify-center h-screen w-screen items-center'>
              <Loading/>
            </div>}>
                  <ClassPage />
                </Suspense>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

