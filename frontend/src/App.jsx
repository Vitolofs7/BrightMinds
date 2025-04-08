import { useState, useEffect } from 'react';
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthStatus = () => {
    const token = localStorage.getItem("token");
    console.log("Checking Auth Status - Token:", token);
    return !!token;
  };

  // Al montar el componente, se chequea la autenticación
  useEffect(() => {
    const authStatus = checkAuthStatus();
    setIsAuthenticated(authStatus);
    console.log("Auth Status after mount:", authStatus);
  }, []);

  // Escucha cambios en la ubicación para actualizar el estado de autenticación
  useEffect(() => {
    const authStatus = checkAuthStatus();
    setIsAuthenticated(authStatus);
    console.log("Auth Status after location change:", authStatus);
  }, [location]);

  // Listener para cambios en localStorage (útil si se abren varias pestañas)
  useEffect(() => {
    const handleStorageChange = () => {
      const authStatus = checkAuthStatus();
      setIsAuthenticated(authStatus);
      console.log("Auth Status after storage change:", authStatus);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const hideNavigationRoutes = ['/', '/signup', '/login'];
  const showNavigation = !hideNavigationRoutes.includes(location.pathname);
  console.log("Location:", location.pathname);
  console.log("Show Navigation:", showNavigation);


  const handleLoginSuccess = () => {
    console.log("Login success, setting authentication...");
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    console.log("Logging out, removing token...");
    localStorage.removeItem("token");
    setIsAuthenticated(false);
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
            path='/courseHomepage'
            element={isAuthenticated ? <CourseHomepagePage /> : <Navigate to="/login" replace />}
          />

          <Route
            path='/video'
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
