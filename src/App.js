import 'tailwindcss/tailwind.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import ProfileSetup from './ProfileSetup';
import OptionCard from './OptionCard';
import VerifyEmailPage from './VerifyEmailPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpForm />} exact />
        <Route path="/profile-setup" element={<ProfileSetup />} />
        <Route path="/option-card" element={<OptionCard />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
