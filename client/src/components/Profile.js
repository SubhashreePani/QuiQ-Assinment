import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QRCodeGenerator from './QRCodeGenerator';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const email = localStorage.getItem('userEmail'); // Get email from localStorage
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/email/${email}`);
        setUser(response.data);
      } catch (err) {
        setError('Failed to fetch user data');
        console.error('Error details:', err.message); // Detailed error logging
      } finally {
        setLoading(false);
      }
    };

    if (email) {
      fetchUser();
    } else {
      setError('No email found. Please log in again.');
      setLoading(false);
    }
  }, [email]);

  if (loading) return <div className="flex justify-center items-center h-screen"><span className="text-xl">Loading...</span></div>;
  if (error) return <div className="flex justify-center items-center h-screen"><span className="text-red-500 text-xl">{error}</span></div>;
  if (!user) return <div className="flex justify-center items-center h-screen"><span className="text-xl">No user data available</span></div>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center mb-6">
          <img
            src={user.profilePhoto || 'https://via.placeholder.com/150'} // Use static image if profilePhoto is not available
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full border-4 border-blue-500"
          />
          <h1 className="text-3xl font-bold mt-4">{user.name}</h1>
          <p className="text-gray-600 mb-2">{user.email}</p>
          <p className="text-gray-500 mb-4">{user.phoneNumber}</p>
        </div>
        <QRCodeGenerator userId={user._id} />
        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={() => window.location.reload()}
            className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors"
          >
            Refresh Data
          </button>
          <button
            onClick={() => navigate('/interactive-image')} // Navigate to the interactive image page
            className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-colors"
          >
            View Interactive Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
