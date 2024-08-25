import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import DashboardHome from '../Pages/DashboardHome';
import Property from '@/Pages/Property';
import Tenant from '@/Pages/Tenant';
import Transaction from '@/Pages/Transaction';
import Account from '@/Pages/Account';
import Setting from '@/Pages/Setting';
import Dashboard from '@/Pages/Dashboard';
import Login from '@/Pages/Login';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      {/* <Route path="/dashboard-home" element={<DashboardHome />} />
      <Route path="/property" element={<Property />} />
      <Route path="/tenant" element={<Tenant />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/account" element={<Account />} />
      <Route path="/setting" element={<Setting />} /> */}
    </Routes>
  );
};

export default Router;
