import { useState } from 'react'
import { LoginPage } from './pages/login/login.page'
import { HomePage } from './pages/home/home.page'
import './App.scss'

function App() {

  return (
    <>
      {/* <LoginPage /> */}
      <HomePage username='user' />


    </>
  )
}

export default App
