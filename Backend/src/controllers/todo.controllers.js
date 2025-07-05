import Todo from "../model/todoSchema.js";

// All controllers now require req.auth.userId from Clerk

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ CreatedAt: -1 });
    res.status(200).json(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json({ todo, message: "Todo fetched successfully" });
  } catch (error) {
    console.error("Error fetching todo by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createTodo = async (req, res) => {
  try {
    const { title, description, date, category } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }
    const newTodo = new Todo({ title, description, date, category  });
    await newTodo.save();
    res.status(201).json({ todo: newTodo, message: "Todo created successfully" });
  } catch (error) {
    console.error("Error creating todo:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    const todo = await Todo.findOneAndUpdate(
      { _id: id },
      { title, description, completed },
      { new: true }
    );
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json({ todo, message: "Todo updated successfully" });
  } catch (error) {
    console.error("Error updating todo:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteTodoById = async (req, res) => {
  try {
    const { id } = req.params;


    const todo = await Todo.findOneAndDelete({ _id: id });
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};