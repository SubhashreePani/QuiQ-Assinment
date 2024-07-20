import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password, phoneNumber, profilePhoto, coverPhoto } = e.target.elements;

    try {
      // Create user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
      const user = userCredential.user;

      // Prepare data to send to the backend
      const userData = {
        name: name.value,
        email: email.value,
        phoneNumber: phoneNumber.value || '',
        profilePhoto: profilePhoto.value || '',
        coverPhoto: coverPhoto.value || '',
      };

      // Send user data to the backend
      await axios.post('http://localhost:5000/signup', userData);

      // Save email to localStorage
      localStorage.setItem('userEmail', email.value);

      // Redirect to profile with user ID
      navigate(`/profile/${user.uid}`);
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <input
              name="name"
              type="text"
              placeholder="Name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <input
              name="phoneNumber"
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <input
              name="profilePhoto"
              type="text"
              placeholder="Profile Photo URL"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <input
              name="coverPhoto"
              type="text"
              placeholder="Cover Photo URL"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
