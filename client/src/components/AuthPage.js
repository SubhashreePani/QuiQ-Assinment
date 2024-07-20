import React from 'react';
import { Link } from 'react-router-dom'; // For navigation, if using React Router

const AuthPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Welcome</h1>
        <div className="flex flex-col space-y-4">
          <Link to="/signup">
            <button className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
              Signup
            </button>
          </Link>
          <Link to="/login">
            <button className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
