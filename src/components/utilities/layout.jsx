import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../ui/Navbar/navbar';

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default Layout;
