// import React, { useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

// const Navbar = () => {
//   const { user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   return (
//     <nav>
//       <h1>Task Manager</h1>
//       <ul>
//         {user ? (
//           <>
//             <li>{user.role === 'admin' ? 'Admin Dashboard' : 'My Tasks'}</li>
//             <li onClick={handleLogout}>Logout</li>
//           </>
//         ) : (
//           <>
//             <li><Link to="/login">Login</Link></li>
//             <li><Link to="/register">Register</Link></li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-blue-900 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-semibold tracking-wide">Task Manager</h1>
        <ul className="hidden md:flex space-x-8">
          {user ? (
            <>
              <li className="text-lg font-medium hover:text-gray-300 cursor-pointer">
                {user.role === 'admin' ? 'Admin Dashboard' : 'My Tasks'}
              </li>
              <li
                className="text-lg font-medium hover:text-gray-300 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </li>
            </>
          ) : (
            <>
              <li className="text-lg font-medium hover:text-gray-300">
                <Link to="/login">Login</Link>
              </li>
              <li className="text-lg font-medium hover:text-gray-300">
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
        {/* Mobile Menu */}
        <div className="md:hidden flex items-center space-x-4">
          <button className="text-3xl">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
