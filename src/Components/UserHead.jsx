import React, { useState } from 'react';
import { useUserAuth } from '../Context/UserAuthContext';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export default function UserHead() {
  const { user } = useUserAuth();
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const confirmLogout = window.confirm('Are you sure you want to log out?');
    if (confirmLogout) {
      try {
        await signOut(auth);
        navigate('/home');
      } catch (error) {
        console.error('Logout failed:', error);
      }
    }
  };

  const isLoggedIn = !!user;

  return (
    <div className="flex justify-end items-center p-4 text-gray-800 bg-gray-50 border-b shadow-sm relative">
      {/* Avatar and Name Section */}
      <div
        className="flex items-center gap-3 cursor-pointer hover:bg-gray-200 px-3 py-2 rounded-md transition"
        onClick={() => setShowDetails(prev => !prev)}
      >
        <img
          src={user?.photoURL || 'https://via.placeholder.com/40'}
          alt="Profile"
          className="w-10 h-10 rounded-full border border-gray-300"
        />
        <span className="font-semibold">{user?.displayName || 'Guest'}</span>
      </div>

      {/* Dropdown Card */}
      {showDetails && (
        <div
          className="absolute top-full right-4 mt-3 w-72 bg-white border border-gray-200 rounded-xl shadow-xl p-5 z-20 animate-fade-in-down"
        >
          <div className="flex items-center gap-4 mb-4">
            <img
              src={user?.photoURL || 'https://via.placeholder.com/60'}
              alt="Avatar"
              className="w-14 h-14 rounded-full border border-gray-300"
            />
            <div>
              <p className="text-lg font-semibold">{user?.displayName || 'No Name'}</p>
              <p className="text-sm text-gray-500">{user?.email || 'No Email'}</p>
            </div>
          </div>
          <hr className="my-3" />
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-medium transition-all"
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium transition-all"
            >
              Log In
            </button>
          )}
        </div>
      )}
    </div>
  );
}
