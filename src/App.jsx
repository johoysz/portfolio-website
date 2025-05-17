import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import CliPaymentNotLiveYet from "./components/CliPaymentNotLiveYet";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-800 text-gray-800">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/cli-payment" element={<CliPaymentNotLiveYet />} />
            <Route path="*" element={<ErrorPage />} /> {/* Catch all none existing routes */}
          </Routes>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
