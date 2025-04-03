import { useState } from 'react'
import { LoginPage } from './pages/login/login.page'
import { HomePage } from './pages/home/home.page'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationComponent } from './components/navigation/navigation.component'
import { BadgesPage } from './pages/badges/badges.page';
import { ExplorePage } from './pages/explore/explore.page';
import { SettingsPage } from './pages/settings/settings.page';
import { ErrorPage } from './pages/error/error.page';
import './App.scss'

function App() {

  return (
    <>
      <BrowserRouter>
      <NavigationComponent />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/badges" element={<BadgesPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
