import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import CliPaymentNotLiveYet from "./components/CliPaymentNotLiveYet";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-800 text-gray-800">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/cli-payment" element={<CliPaymentNotLiveYet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
