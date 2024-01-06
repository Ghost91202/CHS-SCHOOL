// OTPForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { verifyOTP } from '../auth/redux/actions/authActions';

const OTPForm = ({ setLoggedIn }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: '', otp: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(verifyOTP(formData, setLoggedIn));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <label>OTP:</label>
      <input
        type="text"
        name="otp"
        value={formData.otp}
        onChange={handleInputChange}
      />
      <button type="submit">Verify OTP</button>
    </form>
  );
};

export default OTPForm;
