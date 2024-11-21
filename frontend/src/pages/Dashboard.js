// import React, { useState, useEffect, useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';
// import { getTasks, createTask } from '../services/api';
// import { toast } from 'react-toastify';
// import TaskModal from '../components/TaskModal';

// const Dashboard = () => {
//   const { user } = useContext(AuthContext);
//   const [tasks, setTasks] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [newTask, setNewTask] = useState({
//     title: '',
//     description: '',
//     priority: 'Low',
//     dueDate: '',
//   });

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     try {
//       const { data } = await getTasks();
//       setTasks(data);
//     } catch (error) {
//       toast.error('Failed to fetch tasks');
//     }
//   };

//   const handleCreateTask = async () => {
//     try {
//       await createTask(newTask);
//       toast.success('Task created successfully');
//       setShowModal(false);
//       fetchTasks();
//     } catch (error) {
//       toast.error('Failed to create task');
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewTask((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div>
//       <h1>{user.role === 'admin' ? 'Admin Dashboard' : 'My Tasks'}</h1>
//       <button onClick={() => setShowModal(true)}>Add Task</button>

//       <ul>
//         {tasks.map((task) => (
//           <li key={task._id}>
//             <h3>{task.title}</h3>
//             <p>{task.description}</p>
//             <p>Priority: {task.priority}</p>
//             <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
//             <p>Status: {task.completed ? 'Completed' : 'In Progress'}</p>
//           </li>
//         ))}
//       </ul>

//       {showModal && (
//         <TaskModal
//           title="Create Task"
//           onClose={() => setShowModal(false)}
//           onSave={handleCreateTask}
//         >
//           <form>
//             <input
//               type="text"
//               name="title"
//               placeholder="Task Title"
//               value={newTask.title}
//               onChange={handleInputChange}
//               required
//             />
//             <textarea
//               name="description"
//               placeholder="Task Description"
//               value={newTask.description}
//               onChange={handleInputChange}
//               required
//             />
//             <select
//               name="priority"
//               value={newTask.priority}
//               onChange={handleInputChange}
//             >
//               <option value="Low">Low</option>
//               <option value="Medium">Medium</option>
//               <option value="High">High</option>
//             </select>
//             <input
//               type="date"
//               name="dueDate"
//               value={newTask.dueDate}
//               onChange={handleInputChange}
//               required
//             />
//           </form>
//         </TaskModal>
//       )}
//     </div>
//   );
// };

// export default Dashboard;



import React, { useState, useEffect } from 'react';
import Pagination from '../components/Pagination';
import { getTasks } from '../services/api';
import { toast } from 'react-toastify';

const Dashboard = ({ user }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    


    

  const fetchTasks = async (page = 1, filter = '', sort = '') => {
    try {
      const { data } = await getTasks({ page, filter, sort }); // Adjust the API call as needed
      setTasks(data.tasks);
      setTotalPages(data.totalPages);
      setCurrentPage(data.currentPage);
    } catch (error) {
      toast.error('Failed to fetch tasks');
    }
  };

  // Fetch tasks on component mount or when dependencies change
  useEffect(() => {
    fetchTasks(currentPage, filter, sort);
  }, [currentPage, filter, sort]);

  return (
    <div>
      <h1>{user.role === 'admin' ? 'Admin Dashboard' : 'My Tasks'}</h1>
      <div>
        <label>Filter:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">All</option>
          <option value="completed">Completed</option>
          <option value="in-progress">In Progress</option>
        </select>

        <label>Sort:</label>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">None</option>
          <option value="dueDate">Due Date</option>
          <option value="priority">Priority</option>
        </select>

        <button onClick={() => fetchTasks(1, filter, sort)}>Apply</button>
      </div>

      <ul>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task._id}>
              <h3>{task.title}</h3>
              <p>Due Date: {task.dueDate}</p>
              <p>Status: {task.completed ? 'Completed' : 'In Progress'}</p>
            </li>
          ))
        ) : (
          <p>No tasks available.</p>
        )}
      </ul>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default Dashboard;
