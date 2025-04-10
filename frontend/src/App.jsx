import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { WelcomePage } from './pages/welcome/welcome.page';
import { HomePage } from './pages/home/home.page';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ExplorePage } from './pages/explore/explore.page';
import { SettingsPage } from './pages/settings/settings.page';
import { SignUpPage } from './pages/signUp/signUp.page';
import { LoginPage } from './pages/login/login.page';
import { CourseHomepagePage } from './pages/courseHomepage/courseHomepage.page';
import { VideoPage } from './pages/video/video.page';
import './App.scss';
import { ProfilePage } from './pages/profile/profile.page';
import { OutletComponent } from './components/outlet/outlet.component';

function App() {
  const location = useLocation();


  const isAuthenticated = !!localStorage.getItem("token");

  const hideNavigationRoutes = ['/', '/signup', '/login'];
  const showNavigation = !hideNavigationRoutes.includes(location.pathname);

  const handleLoginSuccess = () => {
    window.location.href = "/homepage";
  };

  const handleLogout = () => {
    console.log("Logging out, removing token...");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <>
        {showNavigation && <NavigationComponent />}

        <main>
          <Routes>
            <Route path='/' element={<OutletComponent />}>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/signUp" element={isAuthenticated ? <Navigate to="/homepage" replace /> : <SignUpPage />} />
              <Route path="/login" element={isAuthenticated ? <Navigate to="/homepage" replace /> : <LoginPage onLoginSuccess={handleLoginSuccess} />} />
            </Route>
            {/* Ruta protegida para homepage */}

            <Route
              path="/homepage"
              element={isAuthenticated ? <HomePage /> : <Navigate to="/login" replace />}
            />

            {/* Ruta protegida para explorar */}
            <Route
              path="/explore"
              element={isAuthenticated ? <ExplorePage /> : <Navigate to="/login" replace />}
            />

            <Route
              path='/Courses/:courseSlug'
              element={isAuthenticated ? <CourseHomepagePage /> : <Navigate to="/login" replace />}
            />

            <Route
              path='/Courses/:courseSlug/:videoId'
              element={isAuthenticated ? <VideoPage /> : <Navigate to="/login" replace />}
            />

            {/* Ruta protegida para settings */}
            <Route
              path="/settings"
              element={isAuthenticated ? <SettingsPage /> : <Navigate to="/login" replace />}
            />

            {/* Ruta protegida para el perfil */}
            <Route
              path="/profile"
              element={isAuthenticated ? <ProfilePage onLogout={handleLogout} /> : <Navigate to="/login" replace />}
            />
          </Routes>
        </main >


    </>
  );
}

export default function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

