import React from 'react';
import './App.css';
import MainRouter from './Router/MainRouter';
import DashboardRoutes from './Router/DashboardRoutes';
import DashBoardHeader from './components/ui/DashBoardHeader';
import DashboardSliderLinks from './components/ui/DashboardSliderLinks';
import { useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();

  const isDashboardRoute = location.pathname.startsWith('/dashboard') ||
    location.pathname.startsWith('/property') ||
    location.pathname.startsWith('/tenant') ||
    location.pathname.startsWith('/transaction') ||
    location.pathname.startsWith('/account') ||
    location.pathname.startsWith('/setting');

  return (
    <>
      {!isDashboardRoute && <MainRouter />}
      {isDashboardRoute && (
        <>
          <DashBoardHeader />
          <div className="flex justify-start items-start">
            <DashboardSliderLinks />
            <div className="p-5 pl-32 pt-28 w-full">
              <DashboardRoutes />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default App;
