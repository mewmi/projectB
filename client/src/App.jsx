import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SongAllList from "./pages/SongAllList";
import SongSinglePage from "./pages/SongSinglePage";
import SongCreate from "./pages/SongCreate";
import SongEdit from "./pages/SongEdit";
import Navbar from "./components/Navbar";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import AccountPage from "./pages/AccountPage";
import { ChangeProfile } from "./pages/ChangeProfile";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/songs" element={<SongAllList />} />
        <Route path="/new-song" element={<SongCreate />} />
        <Route path="/songs/:id/edit" element={<SongEdit />} />
        <Route path="/songs/:id" element={<SongSinglePage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/changeProfile" element={<ChangeProfile />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
