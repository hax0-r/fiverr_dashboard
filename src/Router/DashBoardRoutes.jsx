import Account from '@/Pages/Account'
import Dashboard from '@/Pages/Dashboard'
import DashboardHome from '@/Pages/DashboardHome'
import Property from '@/Pages/Property'
import Setting from '@/Pages/Setting'
import Tenant from '@/Pages/Tenant'
import Transaction from '@/Pages/Transaction'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard-home" element={<DashboardHome />} />
            <Route path="/property" element={<Property />} />
            <Route path="/tenant" element={<Tenant />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/account" element={<Account />} />
            <Route path="/setting" element={<Setting />} />
        </Routes>
    )
}

export default DashboardRoutes