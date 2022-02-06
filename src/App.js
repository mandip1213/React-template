import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './compoonents/auth/Login';
import Signup from './compoonents/auth/Signup';
import LoginView from "./compoonents/Layout/LogInView"

const App = () => {
  return (
    <>
      <Router>
        {/* <Login /> */}

        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>

          <Route element={<LoginView />} L>
            <Route path="/" element={<>Home Page</>} />
          </Route>
        </Routes>

      </Router>
    </>
  )
};

export default App;
