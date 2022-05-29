import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import TransactionHistoryWidget from "./components/TransactionHistoryWidget";
import BookingWidget from "./components/BookingWidget";
import DashboardFeatures from "./components/DashboardFeatures";
import IncomingMatchesWidget from "./components/IncomingMatchesWidget";
import PendingPaymentsWidget from "./components/PendingPaymentsWidget";
import Yard from "./components/Yard";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFound";
import SignUpPage from "./pages/SignUpPage";
import WelcomePage from "./pages/WelcomePage";
import ManageUsersWidget from "./components/ManageUsersWidget";
import ManageYardsWidget from "./components/ManageYardsWidget";

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
              path="/home/incoming-matches"
              element={<IncomingMatchesWidget />}
            ></Route>
            <Route
              path="/home/pending-payments"
              element={<PendingPaymentsWidget />}
            ></Route>
            <Route
              path="/home/transaction-history"
              element={<TransactionHistoryWidget />}
            ></Route>
            <Route
              path="/home/users"
              element={<ManageUsersWidget />}
            ></Route>
            <Route
              path="/home/yards"
              element={<ManageYardsWidget />}
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
