// src/pages/NotFound.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-green-600">404</h1>
      <p className="text-xl mt-4 mb-6">Oops! Page not found.</p>
      <NavLink
        to="/"
        className="text-white bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Go Back Home
      </NavLink>
    </div>
  );
};

export default NotFound;
