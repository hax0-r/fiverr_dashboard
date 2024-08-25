import React, { useState } from 'react';
import './App.css';
import Router from './Router/Router';
import DashboardSliderLinks from './components/ui/DashboardSliderLinks';
import DashBoardHeader from './components/ui/DashBoardHeader';
import Login from './Pages/Login';
import DashboardRoutes from './Router/DashBoardRoutes';

const App = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const handleLogin = () => {
  //   setIsAuthenticated(true);
  // };

  // if (!isAuthenticated) {
  //   return <Login onLogin={handleLogin} />;
  // }

  return (
    <>
      <Router />
      <DashBoardHeader />
      <div className="flex justify-start items-start">
        <DashboardSliderLinks />
        <div className="p-5 w-full">
          <DashboardRoutes />
        </div>
      </div>
    </>
  );
};

export default App;
