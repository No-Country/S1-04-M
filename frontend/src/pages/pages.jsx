import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { About } from "../components/About";
import { Balans } from "../components/Balans";
import { ConfirmTransaction } from "../components/ConfirmTransaction";
import { HistoryTransactions } from "../components/HistoryTransactions/HistoryTransactions";
import { Home } from "../components/Home";
import { NewCard } from "../components/NewCard";
import { CloseSesion } from "../components/CloseSesion";
import { Transactions } from "../components/Transactions";
import NavBar from "../components/NavBar";
import { useLocation, useNavigate } from "react-router-dom";
import { Register } from "../components/Register";
import { Card } from "../components/Cards/Card";
import HistoryPage from "../components/HistoryPage/HistoryPage";
import Profile from "../components/Profile/Profile";
import { useSelector } from "react-redux";
import { DestinationCard } from "../components/DestinationCard";

export const Pages = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const data = useSelector((state) => state);

  useEffect(() => {
    setTimeout(() => {
      location.pathname !== "/" &&
        location.pathname !== "/register" &&
        !data.length &&
        navigate("/closesesion");
    }, 100);
  }, []);

  return (
    <div>
      {location.pathname !== "/" && location.pathname !== "/register" && (
        <NavBar />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/balans" element={<Balans />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/confirm" element={<ConfirmTransaction />} />
        <Route path="/closesesion" element={<CloseSesion />} />
        <Route path="/newtransaction" element={<Transactions />} />
        <Route path="/newcard" element={<NewCard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/card" element={<Card />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addcardtransfer" element={<DestinationCard />} />
      </Routes>
    </div>
  );
};
