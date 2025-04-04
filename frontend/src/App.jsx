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

import { OutletComponent } from './components/outlet/outlet.component';
import './App.scss';

function App() {
  const location = useLocation();

  // Define the routes where the navigation bar should be displayed
  const hideNavigationRoutes = ['/', '/signup'];
  const showNavigation = !hideNavigationRoutes.includes(location.pathname);


  console.log('Current Path:', location.pathname);
  console.log('Show Navigation:', showNavigation);

  return (
    <>
      {showNavigation && <NavigationComponent />}
      <Routes>
        <Route path="/" element={<OutletComponent />} >
          <Route path="/" element={<WelcomePage />} />
          <Route path="/signUp" element={<SignUpPage />} />

        </Route>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/badges" element={<BadgesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<ErrorPage />} />
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