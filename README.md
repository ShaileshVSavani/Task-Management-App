### README: Task Management App

---

## **Task Management App**

A simple task management application built with a React frontend and Node.js backend, connected to MongoDB Atlas for data storage. Users can register, log in, and manage their tasks, with features tailored for both regular users and administrators.

---

### **Features**
1. **User Authentication**
   - Register with a username, email, and password.
   - Login with email and password.
   - Protected routes for authorized users.

2. **Role-Based Dashboard**
   - Admin users can access the Admin Dashboard.
   - Regular users can view and manage their tasks.

3. **Task Management**
   - Add, update, and delete tasks.
   - Mark tasks as completed.

---

### **Technologies Used**
#### **Frontend**
- **React**: SPA (Single Page Application) development.
- **Tailwind CSS**: For responsive and professional styling.
- **React Router**: For seamless navigation.
- **Axios**: For API requests.

#### **Backend**
- **Node.js**: Runtime for backend operations.
- **Express**: Backend framework for building APIs.
- **MongoDB Atlas**: Cloud database for data storage.
- **Mongoose**: Object Data Modeling (ODM) for MongoDB.

---

### **Prerequisites**
1. Node.js and npm installed on your local machine.
2. MongoDB Atlas account and database set up.
3. Ensure your IP is whitelisted in MongoDB Atlas (or use `0.0.0.0/0` for open access).

---

### **Getting Started**

#### **1. Clone the Repository**
```bash
git clone https://github.com/ShaileshVSavani/Task-Management-App.git
cd task-management-app
```

#### **2. Backend Setup**
1. Navigate to the backend folder:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file:
   ```env
   PORT=5000
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-secret-key>
   ```
4. Start the backend server:
   ```
   node server.js
   ```
   The backend should be running on [http://localhost:5000](http://localhost:5000).

#### **3. Frontend Setup**
1. Navigate to the frontend folder:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React development server:
   ```
   npm start
   ```
   The frontend should be running on [http://localhost:3000](http://localhost:3000).

---

### **Environment Variables**
- Configure the following variables in your `.env` file:
  - **`MONGO_URI`**: Your MongoDB Atlas connection string.
  - **`JWT_SECRET`**: A secret key for token encryption.
  - **`PORT`**: Backend server port (default: `5000`).


---

### **API Endpoints**

#### **Authentication**
| Method | Endpoint             | Description          |

| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | Login and get token |

#### **Task Management**
| Method   | Endpoint           | Description                   |

| GET      | `/api/tasks`       | Get all tasks (user-specific) |
| POST     | `/api/tasks`       | Create a new task             |
| PUT      | `/api/tasks/:id`   | Update a task by ID           |
| DELETE   | `/api/tasks/:id`   | Delete a task by ID           |

---

### **Available Scripts**

#### **Backend**
- **`npm start`**: Start the backend server.

#### **Frontend**
- **`npm start`**: Start the frontend development server.
- **`npm run build`**: Build the app for production.

---

### **Screenshots**
1. **Login Page**
   - User-friendly login form.
2. **Dashboard**
   - Clean UI for managing tasks.
3. **Admin Dashboard**
   - Additional tools for administrators.

---



