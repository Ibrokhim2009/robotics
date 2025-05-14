import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<ContactPage />} path="/contact" />
    </Routes>
  );
}

export default App;
