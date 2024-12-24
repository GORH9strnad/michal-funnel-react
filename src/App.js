import { memo } from "react";
import "./App.css";
import LandingPage from "./user_interface/templates/landing_page/LandingPage";
import { Route, Routes } from "react-router-dom";
import ThankingPage from "./user_interface/templates/thanking_page/ThankingPage";

function App() {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="thanking" element={<ThankingPage />} />
    </Routes>
  );
}

export default memo(App);
