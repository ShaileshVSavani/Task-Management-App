const Task = require('../models/Task');

const getTasks = async (req, res) => {
  const { role, id } = req.user;
  try {
    const tasks = role === 'admin'
      ? await Task.find()
      : await Task.find({ userId: id });

    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const createTask = async (req, res) => {
  const { title, description, dueDate, priority } = req.body;
  try {
    const task = new Task({ ...req.body, userId: req.user.id });
    await task.save();
    res.status(201).json({ message: 'Task created', task });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getTasks, createTask };
