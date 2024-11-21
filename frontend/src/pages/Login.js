// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
// import { login } from '../services/api';
// import { toast } from 'react-toastify';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { login: loginUser } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await login({ email, password });
//       loginUser(data.token);
//       toast.success('Login successful');
//       navigate('/');
//     } catch (error) {
//       toast.error('Invalid credentials');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;



import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { login } from '../services/api';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login: loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Reset error message before submission

    if (!email || !password) {
      setErrorMessage('Please fill in both fields');
      return;
    }

    setLoading(true);
    try {
      const { data } = await login({ email, password });
      loginUser(data.token);
      toast.success('Login successful');
      navigate('/');
    } catch (error) {
      setErrorMessage('Invalid credentials');
      toast.error('Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>

      {/* Error Message */}
      {errorMessage && (
        <div className="bg-red-100 text-red-700 p-2 mb-4 rounded-md text-center">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-all disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <div className="mt-4 text-center">
        <p>
          Don't have an account?{' '}
          <a href="/register" className="text-blue-600 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
