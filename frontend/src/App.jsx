import { useState } from 'react';
import { WelcomePage } from './pages/welcome/welcome.page';
import { HomePage } from './pages/home/home.page';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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

  // Define the routes where the navigation bar should be displayed
  const hideNavigationRoutes = ['/', '/signup', '/login'];
  const showNavigation = !hideNavigationRoutes.includes(location.pathname);

  return (
    <>
      {showNavigation && <NavigationComponent />}
      <main>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/courseHomepage" element={<CourseHomepagePage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/badges" element={<BadgesPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<ErrorPage />} />

        </Routes>
      </main>
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