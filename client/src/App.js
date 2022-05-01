import React from "react"
import LandingPage from "./pages/LandingPage/LandingPage"
import BookingsPage from "./pages/BookingsPage/BookingsPage"
import NotFoundPage from "./pages/NotFoundPage"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ResultsPage from "./pages/ResultsPage/ResultsPage"

// This file renders the Landing Page

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<LandingPage />}/>
          <Route exact path="/results" element={<ResultsPage />}/>
          <Route exact path="/bookings" element={<BookingsPage />}/>
          <Route exact path="/404" element={<NotFoundPage />}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
