import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { WelcomePage } from './pages/welcome/welcome.page';
import { HomePage } from './pages/home/home.page';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BadgesPage } from './pages/badges/badges.page';
import { ExplorePage } from './pages/explore/explore.page';
import { SettingsPage } from './pages/settings/settings.page';
import { ErrorPage } from './pages/error/error.page';
import { SignUpPage } from './pages/signUp/signUp.page';
import { LoginPage } from './pages/login/login.page';
import { CourseHomepagePage } from './pages/courseHomepage/courseHomepage.page';
import { VideoPage } from './pages/video/video.page';
import './App.scss';

function App() {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthStatus = () => {
    const token = localStorage.getItem("token");
    return !!token;
  };

  useEffect(() => {
    const authStatus = checkAuthStatus();
    setIsAuthenticated(authStatus);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(checkAuthStatus());
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const hideNavigationRoutes = ['/', '/signup', '/login'];
  const showNavigation = !hideNavigationRoutes.includes(location.pathname);


  const handleLoginSuccess = () => {
    setIsAuthenticated(true); 
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <>
      {showNavigation && <NavigationComponent />}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signUp" element={<SignUpPage />} />

        <Route path="/login" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />

        <Route 
          path="/homepage" 
          element={isAuthenticated ? <HomePage /> : <Navigate to="/login" replace />} 
        />
        <Route 
          path="/explore" 
          element={isAuthenticated ? <ExplorePage /> : <Navigate to="/login" replace />} 
        />
        <Route 
          path="/badges" 
          element={isAuthenticated ? <BadgesPage /> : <Navigate to="/login" replace />} 
        />
        <Route 
          path="/settings" 
          element={isAuthenticated ? <SettingsPage /> : <Navigate to="/login" replace />} 
        />
      </Routes>
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
  