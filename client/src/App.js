import { BrowswerRouter, Navigate, Routes, Route } from "react-roter-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
function App() {
  return (
    <div className="app">
      <BrowswerRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </BrowswerRouter>
    </div>
  );
}

export default App;
