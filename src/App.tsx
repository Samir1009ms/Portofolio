import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Stack } from '@mui/material';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Stack justifyContent='space-between' sx={{ background: 'radial-gradient(100% 100% at 50% 100%, #1F1E1B 21.52%, #1B1A17 100%);', minHeight: '100vh', padding: { xs: "12px", md: "5px 100px" } }}>
      <Navbar />
      <Outlet />
      <Footer />
    </Stack>
  );
}

export default App;
