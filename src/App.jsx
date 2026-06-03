import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Homepage from "./pages/homepage";
import Flowerpage from "./pages/flowerpage";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
const App = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Homepage />} />
          <Route path="/flower" element={<Flowerpage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};
export default App;
