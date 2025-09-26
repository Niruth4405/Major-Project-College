// ProfileInfo.jsx
import React from 'react';

const ProfileInfo = () => {
  const userEmail = "user@example.com"; // Replace with dynamic data as needed

  return (
    <div className="text-right">
      <div className="text-sm">{userEmail}</div>
      <button
        className="cursor-pointer mt-1 text-red-500 hover:text-red-400 font-semibold focus:outline-none"
        onClick={() => alert('Logout clicked')}
        aria-label="Logout button"
      >
        Logout
      </button>
    </div>
  );
}

export default ProfileInfo;
