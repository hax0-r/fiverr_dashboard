import Account from '@/Pages/Account';
import AddProperty from '@/Pages/AddProperty';
import Dashboard from '@/Pages/Dashboard';
import Occupancy from '@/Pages/Dashboard/Occupancy';
import DashboardHome from '@/Pages/DashboardHome';
import Property from '@/Pages/Property';
import AddRoomType from '@/Pages/Property/AddRoomType';
import DetailProperty from '@/Pages/Property/DetailProperty';
import PropertyRoomDetails from '@/Pages/Property/PropertyRoomDetails';
import RoomList from '@/Pages/Property/RoomList';
import Setting from '@/Pages/Setting';
import Tenant from '@/Pages/Tenant';
import TransactionList from '@/Pages/Transaction-list';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path="/dashboard-home" element={<DashboardHome />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/occupancy" element={<Occupancy />} />
            <Route path="/property" element={<Property />} />
            <Route path="/property/:id" element={<DetailProperty />} />
            <Route path="/property/:id/add-room-type" element={<AddRoomType />} />
            <Route path="/property/:id/room-list" element={<RoomList />} />
            <Route path="/property/:id/room-list/:ids" element={<PropertyRoomDetails />} />
            <Route path="/property/add-property" element={<AddProperty />} />
            <Route path="/tenant" element={<Tenant />} />
            <Route path="/transaction-list" element={<TransactionList />} />
            <Route path="/account" element={<Account />} />
            <Route path="/setting" element={<Setting />} />
        </Routes>
    );
};

export default DashboardRoutes;
