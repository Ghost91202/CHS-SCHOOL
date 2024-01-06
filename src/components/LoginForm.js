import React, { useState, useEffect } from 'react';
import Navbar from "../pages/navbar"
import { FaHome } from "react-icons/fa";
import loginimg from "../assets/72351f9d3ad5e1074662490290ef160c.jpg"
// import axios from 'axios';
import axios from 'axios'; const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });



  useEffect(() => {
    // Check if there is a token in local storage on component mount
    const token = localStorage.getItem('token');
    if (token) {
      // Set the token in Axios defaults if it exists
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // You may want to verify the token on the server side for additional security
      // Assuming you have an endpoint to verify the token on the server
      // axios.get('YOUR_API_BASE_URL/verify-token')
      //   .then(response => {
      //     if (response.data.valid) {
      //       // Token is valid, proceed with user authentication
      //       const role = response.data.role; // Adjust accordingly
      //       onLogin(role);
      //     } else {
      //       // Token is invalid, clear local storage
      //       localStorage.removeItem('token');
      //     }
      //   })
      //   .catch(error => {
      //     console.error('Token verification error:', error.message);
      //     // Handle error as needed
      //   });
    }
  }, [onLogin]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', formData);

      if (response && response.data) {
        const { token, role } = response.data;

        // Set the token in local storage
        localStorage.setItem('token', token);

        // Set the token in Axios defaults for subsequent requests
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        // Store the token in a cookie
        document.cookie = `token=${token}; path=/`;  // Modify the path as needed

        // Notify the parent component about successful login
        onLogin(role);
      } else {
        console.error('Login error: Invalid response format');
      }
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : 'Unknown error');
    }
  };


  return (
    <div className='flex relative w-screen overflow-hidden h-screen' >

      <Navbar />
      <div className='flex flex-col ml-40 mt-20'>


        <div className='flex flex-col gap-5'>
          <div className='flex gap-1'>
            <FaHome className='m-1' />
            <span>|</span>
            <div> Admission</div>
            <span>|</span>
            <div>Apply</div>
          </div>
          <h1 className='text-7xl'>Apply Now</h1>
        </div>
        <div className='flex'>
          <div className='text-md font-semibold bg-gray-100 p-10 m-32 w-3/4 '>

            <form onSubmit={handleSubmit}>
              <div className='flex gap-2 flex-col'>

                <label>Email <span className='text-red-500'>*</span></label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className='bg-transparent underline-2 underline border-b-2 border-black' />

                <label>Password <span className='text-red-500 mt-6'>*</span></label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required className='bg-transparent underline-2 underline border-b-2 border-black' />

                <button type="submit" className='bg-red-500 text-white text-lg p-2 mt-10 mb-10 justify-center flex'>Login</button>
              </div>
            </form>
          </div>

          <div>
            <img src={loginimg} alt="chs school" className='flex w-screen -mt-28 -ml-18'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
