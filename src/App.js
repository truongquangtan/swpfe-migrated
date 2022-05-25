import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import BookingWidget from "./components/BookingWidget";
import DashboardFeatures from "./components/DashboardFeatures";
import PendingPaymentsWidget from "./components/PendingPaymentsWidget";
import Yard from "./components/Yard";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFound";
import SignUpPage from "./pages/SignUpPage";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route exact path="/" element={<WelcomePage />}></Route>
          <Route exact path="/home" element={<HomePage />}>
            <Route exact path="/home" element={<DashboardFeatures />}></Route>
            <Route path="/home/booking" element={<BookingWidget />}></Route>
            <Route path="/home/yard/:id" element={<Yard />}></Route>
            <Route
              path="/home/pending-payments"
              element={<PendingPaymentsWidget />}
            ></Route>
          </Route>
          <Route exact path="/login" element={<LoginPage />}></Route>
          <Route exact path="/signup" element={<SignUpPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
