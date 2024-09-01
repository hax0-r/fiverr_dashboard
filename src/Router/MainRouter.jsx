import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '@/Pages/Login';
import Error from '@/Pages/Error';
import ComingSoon from '@/Pages/ComingSoon';
import PlaceDetails from '@/Pages/PlaceDetails';
import SubPlaceDetails from '@/Pages/SubPlaceDetails';
import SelectDate from '@/Pages/Home/SelectDate';
import TenantInformation from '@/Pages/Home/TenantInformation';
import PaymentDetail from '@/Pages/Home/PaymentDetail';
import PaymentConfirmed from '@/Pages/Home/PaymentConfirmed';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      {/* Dynamic route for place details */}
      <Route path="/home/:placeName" element={<PlaceDetails />} />

      {/* Nested dynamic route for sub-card details */}
      <Route path="/home/:placeName/:subCardId" element={<SubPlaceDetails />} />
      <Route path="/home/:placeName/:subCardId/select-date" element={<SelectDate />} />
      <Route path="/home/:placeName/:subCardId/select-date/tenant-information" element={<TenantInformation />} />
      <Route path="/home/:placeName/:subCardId/select-date/tenant-information/payment-detail" element={<PaymentDetail />} />
      <Route path="/home/:placeName/:subCardId/select-date/tenant-information/payment-detail/payment-confirmed" element={<PaymentConfirmed />} />

      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Router;