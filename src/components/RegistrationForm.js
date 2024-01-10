import React, { useState } from 'react';
import axios from 'axios';
import zxcvbn from 'zxcvbn'
import Navbar from '../pages/navbar';
import { FaHome } from "react-icons/fa";
const RegistrationForm = () => {
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    feedback: '',
  });
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    number: '',
    class: '',
    address: '',
    password: '',
    role: 'student',
    passportImage: null,
    fatherName: '',
    motherName: '',
    birthdate: '',
    gender: '',
  });

  const [errorMessages, setErrorMessages] = useState([]);
  // ==================password checker==========================

  const handlePasswordChange = (e) => {
    const password = e.target.value;

    // Perform custom password requirements checks
    const isPasswordValid = validatePasswordRequirements(password);

    if (isPasswordValid) {
      const result = zxcvbn(password);
      setPasswordStrength({
        score: result.score,
        feedback: getPasswordFeedback(result.score, result.feedback.suggestions),
      });
    } else {
      setPasswordStrength({
        score: 0,
        feedback: 'Password does not meet the requirements.',
      });
    }

    handleChange(e); // Continue handling the change as usual
  };

  const validatePasswordRequirements = (password) => {
    // Implement your custom password requirements (length, complexity, etc.)
    return password.length >= 8; // Example: Minimum length of 8 characters
  };


  const getPasswordFeedback = (score, suggestions) => {
    // Customize feedback based on your requirements
    if (score >= 3) {
      return 'Password is strong.';
    } else if (score === 2) {
      return 'Password is of medium strength.';
    } else {
      return 'Password is weak. ' + suggestions.join(' ');
    }
  };
  // ============================================
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      setFormData({ ...formData, passportImage: files[0] });
    } else {
      const updatedValue =
        name === 'birthdate' && type === 'date' ? new Date(value).toISOString().split('T')[0] : value;

      setFormData({ ...formData, [name]: updatedValue });
    }
  };

  const validateFileSize = (file) => {
    const maxSize = 2 * 1024 * 1024; // 2 MB
    if (file && file.size > maxSize) {
      setErrorMessages(['File size is too large. Please upload a file under 2 MB.']);
      return false;
    }
    return true;
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      setErrorMessages(['Password must contain at least 6 characters.']);
      return false;
    }
    return true;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessages(['Invalid email address.']);
      return false;
    }
    return true;
  };

  const validateGender = (gender) => {
    const validGenders = ['male', 'female'];
    if (!validGenders.includes(gender.toLowerCase())) {
      setErrorMessages(['Invalid gender. Please enter "male" or "female".']);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessages([]); // Reset error messages

    // Additional validations
    if (
      !validateFileSize(formData.passportImage) ||
      !validatePassword(formData.password) ||
      !validateEmail(formData.email) ||
      !validateGender(formData.gender)
    ) {
      return;
    }

    const requiredFields =
      formData.role === 'student'
        ? [
          'email',
          'name',
          'number',
          'class',
          'address',
          'password',
          'passportImage',
          'fatherName',
          'motherName',
          'birthdate',
          'gender',
        ]
        : ['email', 'name', 'number', 'password', 'passportImage', 'address', 'birthdate', 'gender'];

    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      setErrorMessages([`Missing required fields: ${missingFields.join(', ')}`]);
      return;
    }

    try {
      const formDataToSend = new FormData();

      Object.keys(formData).forEach((key) => {
        if (key === 'passportImage' && formData[key]) {
          formDataToSend.append(key, formData[key]);
        } else {
          formDataToSend.append(key, formData[key]);
        }
      });

      const response = await axios.post(
        formData.role === 'student' ? 'http://localhost:5000/register' : 'http://localhost:5000/register-admin',
        formDataToSend
      );

      console.log('Response:', response.data);

      // Redirect to login form on successful registration
      // You can use your preferred routing method (e.g., react-router-dom)
      window.location.href = '/login';
    } catch (error) {
      if (error.response && error.response.status === 409) {
        // User already exists (status code 409 Conflict)
        alert('Registration failed. Please try again later.');
      } else {
        // Handle other errors
        console.error('Registration error:', error.response ? error.response.data : 'Unknown error');
        console.error('Error details:', error);
        alert('User already exists. Please use a different email address.');

      }
    }
  };


  return (
    <div className=' relative w-screen overflow-hidden'>
      <Navbar />
      <div className='flex flex-col ml-10 md:ml-40 mt-10 md:mt-20'>

        <div className='flex flex-col gap-5'>
          <div className='flex gap-1'>
            <FaHome className='m-1' />
            <span>|</span>
            <div> Admission</div>
            <span>|</span>
            <div>Apply</div>
          </div>
          <h1 className='md:text-7xl text-4xl'>Apply Now</h1>
        </div>

        <div className='md:m-20 flex flex-col justify-center text-md font-semibold '>
          {/* <div className=''>
            <label>Role:</label>
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
            <br />
          </div> */}

          <div className=' bg-gray-100   p-10 m-5 md:p-32'>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              {errorMessages.length > 0 && (
                <div style={{ color: 'red', marginBottom: '10px' }}>
                  <ul>
                    {errorMessages.map((message, index) => (
                      <li key={index}>{message}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Add the role dropdown */}

              
              <div className='flex flex-col md:flex-row w-full gap-5   md:gap-20 '>
                <div className='flex flex-col md:w-96'>
                  <label>Email <span className='text-red-500'>*</span></label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className='bg-transparent underline-2 underline border-b-2 border-black' />
                  <br />
                  <label>Name <span className='text-red-500'>*</span></label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className='bg-transparent underline-2 underline border-b-2 border-black' />
                  <br />
                  <label>Number <span className='text-red-500'>*</span></label>
                  <input type="text" name="number" value={formData.number} onChange={handleChange} required className='bg-transparent underline-2 underline border-b-2 border-black' />
                  <br />

                  {/* Conditionally render fields based on the selected role */}
                  {formData.role === 'student' && (
                    <>
                      <label>Class <span className='text-red-500'>*</span></label>
                      <input type="text" name="class" value={formData.class} onChange={handleChange} required className='bg-transparent underline-2 underline border-b-2 border-black' />
                      <br />
                      <label>Address </label>
                      <input type="text" name="address" value={formData.address} onChange={handleChange} required className='bg-transparent underline-2 underline border-b-2 border-black' />
                      <br />
                    </>
                  )}



                  <label>Password <span className='text-red-500'>*</span></label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handlePasswordChange}
                    required
                    className='bg-transparent underline-2 underline border-b-2 border-black' />
                  {passwordStrength.score > 0 && (
                    <div style={{ marginTop: '5px', color: getPasswordColor(passwordStrength.score) }}>
                      {passwordStrength.feedback}
                    </div>
                  )}
                  <br />
                </div>
                <div className='flex flex-col md:w-96  '>
                <div className='bg-stone-50 p-20 flex h-96 md:flex hidden w-screen md:-z-10 -mt-80 ml-10 font-semibold'>
                    <div className='text-lg md:w-96 text-justify '>If you have any questions, please don't hesitate to get in touch via 8 000 000 0000 or <span className='text-red-500'>
                    admissions@CHS.com</span></div>
                  </div>
                  {/* Additional fields for student role */}
                  {formData.role === 'student' && (
                    <>
                      <label>Passport Image <span className='text-red-500'>*</span></label>
                      <input type="file" name="passportImage" onChange={handleChange} required />
                      <br />
                      <label>Father's Name:</label>
                      <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required className='bg-transparent underline-2 underline border-b-2 border-black' />
                      <br />
                      <label>Mother's Name:</label>
                      <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} required className='bg-transparent underline-2 underline border-b-2 border-black' />
                      <br />
                      <label>Birthdate:</label>
                      <input
                        type="date"
                        name="birthdate"
                        value={formData.birthdate || ''}
                        onChange={handleChange}
                        required
                        className='bg-transparent underline-2 underline border-b-2 border-black' />
                      <br />
                      <label>Gender:</label>
                      <input type="text" name="gender" value={formData.gender} onChange={handleChange} required className='bg-transparent underline-2 underline border-b-2 border-black' />
                      <br />
                    </>
                  )}

                  
                </div>
              </div>
              
              <button type="submit" className='bg-red-500 text-white text-lg p-2 mt-10 -mb-10 align-center flex'>Register Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const getPasswordColor = (score) => {
  if (score >= 3) {
    return 'green'; // Strong passwords
  } else if (score === 2) {
    return 'orange'; // Medium strength passwords
  } else {
    return 'red'; // Weak passwords
  }
};

export default RegistrationForm;

