import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilesPage from "./pages/ProfilePages";
import ProfileDetails from "./pages/ProfileDetails";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<ProfilesPage />} />
          <Route path="/profile/:id" element={<ProfileDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;