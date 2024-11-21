const express = require('express');
const { getTasks, createTask } = require('../controllers/taskController');
const { authenticate, authorize } = require('../middlewares/auth');
const router = express.Router();

// router.get('/', authenticate, authorize(['user', 'admin']), getTasks);

router.get('/', authenticate, authorize, async (req, res) => {
    try {
      const { page = 1, limit = 10, filter, sort } = req.query;
  
      const query = {};
      if (filter) {
        query.completed = filter === 'completed';
      }
  
      const tasks = await Task.find(query)
        .sort(sort ? { [sort]: 1 } : {})
        .skip((page - 1) * limit)
        .limit(parseInt(limit));
  
      const totalTasks = await Task.countDocuments(query);
  
      res.status(200).json({
        tasks,
        totalPages: Math.ceil(totalTasks / limit),
        currentPage: parseInt(page),
      });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching tasks', error });
    }
  });
  

router.post('/', authenticate, authorize(['user', 'admin']), createTask);

module.exports = router;
