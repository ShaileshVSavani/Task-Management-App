

import React, { useState, useEffect } from 'react';
import Pagination from '../components/Pagination';
import { getTasks } from '../services/api';
import { toast } from 'react-toastify';

const Dashboard = ({ user = {} }) => { // Default value added
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchTasks = async (page = 1, filter = '', sort = '') => {
    try {
      const { data } = await getTasks({ page, filter, sort });
      setTasks(data.tasks);
      setTotalPages(data.totalPages);
      setCurrentPage(data.currentPage);
    } catch (error) {
      toast.error('Failed to fetch tasks');
    }
  };

  useEffect(() => {
    fetchTasks(currentPage, filter, sort);
  }, [currentPage, filter, sort]);

  return (
    <div className="flex items-center justify-center  bg-gray-50">
      <div className="w-full max-w-3xl px-6 py-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          {user?.role === 'admin' ? 'Admin Dashboard' : 'My Tasks'}
        </h1>

        {/* Filter and Sort Section */}
        <div className="flex flex-col md:flex-row items-center justify-center space-x-4 mb-6">
          <div>
            <label className="text-gray-600 font-medium mr-2">Filter:</label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All</option>
              <option value="completed">Completed</option>
              <option value="in-progress">In Progress</option>
            </select>
          </div>

          <div>
            <label className="text-gray-600 font-medium mr-2">Sort:</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">None</option>
              <option value="dueDate">Due Date</option>
              <option value="priority">Priority</option>
            </select>
          </div>

          <button
            onClick={() => fetchTasks(1, filter, sort)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Apply
          </button>
        </div>

        {/* Task List */}
        <ul className="space-y-4">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <li
                key={task._id}
                className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {task.title}
                </h3>
                <p className="text-gray-600">Due Date: {task.dueDate}</p>
                <p className={`text-sm font-medium ${task.completed ? 'text-green-500' : 'text-yellow-500'}`}>
                  Status: {task.completed ? 'Completed' : 'In Progress'}
                </p>
              </li>
            ))
          ) : (
            <p className="text-gray-600 text-center">No tasks available.</p>
          )}
        </ul>

        {/* Pagination */}
        <div className="mt-6">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
