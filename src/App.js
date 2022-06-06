import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import HistoryWidget from "./components/HistoryWidget";
import BookingWidget from "./components/BookingWidget";
import DashboardFeatures from "./components/DashboardFeatures";
import IncomingMatchesWidget from "./components/IncomingMatchesWidget";
import Yard from "./components/Yard";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFound";
import SignUpPage from "./pages/SignUpPage";
import WelcomePage from "./pages/WelcomePage";
import ManageUsersWidget from "./components/ManageUsersWidget";
import ManageYardsWidget from "./components/ManageYardsWidget";
import YardRatingWidget from "./components/YardRatingWidget";
import VouchersWidget from "./components/VouchersWidget";
import VoucherManagementWidget from "./components/VoucherManagementWidget";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import MatchManagementWidget from "./components/MatchManagementWidget";
import YardDetails from "./components/YardDetails";
import WelcomeWidget from "./components/WelcomeWidget";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route exact path="/" element={<WelcomePage />}>
            <Route exact path="/" element={<WelcomeWidget />}></Route>
            <Route path="/yard/:id" element={<Yard />}></Route>
            <Route exact path="/admin" element={<HomePage />}></Route>
            <Route path="/vouchers" element={<VouchersWidget />}></Route>
            <Route exact path="/admin" element={<DashboardFeatures />}></Route>
            <Route path="/admin/booking" element={<BookingWidget />}></Route>
            <Route
              path="/admin/incoming-matches"
              element={<IncomingMatchesWidget />}
            ></Route>
            <Route
              path="/admin/transaction-history"
              element={<HistoryWidget />}
            ></Route>
            <Route path="/admin/users" element={<ManageUsersWidget />}></Route>
            <Route path="/admin/yards" element={<ManageYardsWidget />}></Route>
            <Route path="/admin/rating" element={<YardRatingWidget />}></Route>
            <Route path="/admin/vouchers" element={<VouchersWidget />}></Route>
            <Route
              path="/admin/voucher-management"
              element={<VoucherManagementWidget />}
            ></Route>
            <Route
              path="/admin/match-management"
              element={<MatchManagementWidget />}
            ></Route>
            <Route path="/admin/yards/:id" element={<YardDetails />}></Route>
          </Route>
          <Route exact path="/login" element={<LoginPage />}></Route>
          <Route exact path="/signup" element={<SignUpPage />}></Route>
          <Route
            exact
            path="/forgot-password"
            element={<ForgotPassword />}
          ></Route>
          <Route
            exact
            path="/reset-password"
            element={<ResetPassword />}
          ></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
