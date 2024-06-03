import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './components/login.component'
import SignUp from './components/register.component'
import LandingPage from './components/landingPage.component'
import HomePage from './pages/homepage.component'
import StatusPage from './pages/statuspage.component'
import FlowPage from './pages/flowpage.component'
import HistoryPage from './pages/historypage.component'
import UploadPIB from './pages/pibpage.component'

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              P  A  B  E  A  N
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                {/* <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/home-page" element={<HomePage />} />
              <Route path="/landing-page" element={<LandingPage />} />
              <Route path="/upload-pib" element={<UploadPIB />} />
              <Route path="/cek-status" element={<StatusPage />} />
              <Route path="/alur-impor" element={<FlowPage />} />
              <Route path="/riwayat-permintaan" element={<HistoryPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App;