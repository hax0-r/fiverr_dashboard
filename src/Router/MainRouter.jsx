import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '@/Pages/Login';
import Error from '@/Pages/Error';
import ComingSoon from '@/Pages/ComingSoon';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="coming-soon" element={<ComingSoon />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Router;