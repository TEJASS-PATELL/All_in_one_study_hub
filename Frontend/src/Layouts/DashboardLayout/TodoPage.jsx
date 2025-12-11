import { useState, useEffect } from "react";
import { FaTrash, FaClipboardList } from "react-icons/fa";
import toast from "react-hot-toast";
import './TodoPage.css';

const TodoPage = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem("userTodos");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("userTodos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    const trimmed = todoText.trim();
    if (!trimmed) return;

    if (trimmed.length > 200) {
      toast.error("Task cannot exceed 200 characters.");
      return;
    }

    if (todos.length >= 10) {
      toast.error("You can only add up to 10 tasks.");
      return;
    }

    setTodos([...todos, trimmed]);
    setTodoText("");
  };

  return (
    <main className="dashboard-main">
    <div className="dashboard-card">

      <h3>
        <FaClipboardList style={{ marginRight: "6px" }} />
        Todo List
      </h3>

      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Add a task..."
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          className="todo-input"
          maxLength={200}
          required
        />
        <button type="submit" className="todo-add-btn">Add</button>
      </form>

      <ul className="todo-list">
        {todos.map((todo, idx) => (
          <li key={idx} className="todo-item">

            <span className="todo-text">{todo}</span>
            <button
              className="todo-delete-btn"
              onClick={() => {
                const updated = todos.filter((_, i) => i !== idx);
                setTodos(updated);
              }}
              title="Delete task" >
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>

      <p style={{ fontSize: "12px", color: "#666" }}>
        {todos.length}/10 tasks added.
      </p>

    </div>
    </main>
  );
};

export default TodoPage;
