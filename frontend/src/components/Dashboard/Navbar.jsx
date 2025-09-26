// Navbar.jsx
import React from 'react';
import ProfileInfo from './ProfileInfo';

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-4 py-3 flex justify-between items-center">
      <div className="text-lg font-semibold">
        Dashboard
      </div>
      <div>
        <ProfileInfo />
      </div>
    </nav>
  );
}

export default Navbar;
