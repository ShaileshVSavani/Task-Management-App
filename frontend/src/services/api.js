// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api';

// const api = axios.create({
//   baseURL: API_URL,
// });

// // Add Authorization header if token is available
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('authToken');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export const register = (data) => api.post('/auth/register', data);
// export const login = (data) => api.post('/auth/login', data);
// export const getTasks = () => api.get('/tasks');
// export const createTask = (data) => api.post('/tasks', data);

// export default api;



import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

// Add Authorization header if token is available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error); // Handle request errors
  }
);

// Handle response errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server responded with an error
      console.error('API Error:', error.response.data);
    } else {
      // Network or other errors
      console.error('Network Error:', error.message);
    }
    return Promise.reject(error);
  }
);

// Authentication APIs
export const register = (data) => api.post('/auth/register', data);
export const login = (data) => api.post('/auth/login', data);

// Task APIs with support for pagination, filtering, and sorting
export const getTasks = ({ page = 1, filter = '', sort = '' }) =>
  api.get('/tasks', {
    params: { page, filter, sort },
  });

export const createTask = (data) => api.post('/tasks', data);

// You can also export any other API methods like updating or deleting tasks
export const updateTask = (taskId, data) => api.put(`/tasks/${taskId}`, data);
export const deleteTask = (taskId) => api.delete(`/tasks/${taskId}`);

export default api;
