import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./FirstMile/Components/Footer";
import Navbar from "./FirstMile/Components/Navbar";
import FirstMileLogin from "./FirstMile/Pages/FirstMileLogin";
import HomePage from "./FirstMile/Pages/HomePage";
import LastMileLogin from "./FirstMile/Pages/LastMileLogin";
import PendingOrders from "./LastMile/PendingOrders";
import Bookingpage from "./FirstMile/Pages/Bookingpage";
import CreateBooking from "./FirstMile/Pages/CreateBooking";
import Dashboard from "./LastMile/Dashboard";
import ForgotPassword from "./FirstMile/Pages/ForgotPassword";
import Sidepanel from "./FirstMile/Components/Sidepanel";
import Basketpage from "./FirstMile/Pages/Basketpage";
import CreateRunsheet from "./LastMile/CreateRunsheet";
import PrintPage from "./FirstMile/Pages/PrintPage";
import LastMileSidePanel from "./LastMile/LastMileSidePanel";
import RiderActivity from "./LastMile/RiderActivity";
import CloseRunsheet from "./LastMile/CloseRunsheet";
import Receive from "./LastMile/Receive";
import { PendingOrdersContext } from "./context/PendingOrdersContext";
function App() {
  const location = useLocation(); 

  const pagesWithNavbar = ["/"];
  const pagesWithSidepanel = ["/bookingpage", "/basketpage"];
  const pagesWithLastMileSidePanel = ["/dashboard", "/rider-activity", "/close-runsheet", "/receive","/create-runsheet"];
  const pagesWithoutFooter = ["/printpage"];

  const showNavbar = pagesWithNavbar.includes(location.pathname);
  const showSidePanel = pagesWithSidepanel.includes(location.pathname);
  const showLastMileSidePanel = pagesWithLastMileSidePanel.includes(location.pathname);
  const showFooter = !pagesWithoutFooter.includes(location.pathname); 
  return (
    <>
      {showNavbar && <Navbar />}
      {showSidePanel && !showLastMileSidePanel && <Sidepanel />}
      {showLastMileSidePanel && <LastMileSidePanel />}

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/firstmilelogin" element={<FirstMileLogin />} />
          <Route path="/lastmilelogin" element={<LastMileLogin />} />
          <Route path="/pendingorders" element={<PendingOrders />} />
          <Route path="/bookingpage" element={<Bookingpage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createbooking" element={<CreateBooking />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/basketpage" element={<Basketpage />} />
          <Route path="/create-runsheet" element={<CreateRunsheet />} />
          <Route path="/printpage" element={<PrintPage />} />
          <Route path="/rider-activity" element={<RiderActivity />} />
          <Route path="/close-runsheet" element={<CloseRunsheet />} />
          <Route path="/receive" element={<Receive />} />
        </Routes>
      </main>

      {showFooter && <Footer />} 
    </>
  );
}

export default App;
