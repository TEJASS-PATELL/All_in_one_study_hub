import { useState, useEffect, useMemo } from "react";
import { FaTrash, FaClipboardList } from "react-icons/fa";
import toast from "react-hot-toast";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./TodoPage.css";

const MAX_TASKS = 10;

const TodoPage = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem("userTodos");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("userTodos", JSON.stringify(todos));
  }, [todos]);

  const progressValue = useMemo(() => {
    return Math.round((todos.length / MAX_TASKS) * 100);
  }, [todos.length]);

  const handleAddTodo = (e) => {
    e.preventDefault();

    const trimmed = todoText.trim();
    if (!trimmed) return;

    if (trimmed.length > 250) {
      toast.error("Task cannot exceed 250 characters.");
      return;
    }

    if (todos.length >= MAX_TASKS) {
      toast.error("You can only add up to 10 tasks.");
      return;
    }

    setTodos((prev) => [...prev, trimmed]);
    setTodoText("");
  };

const getProgressColor = (value) => {
  if (value === 100) return "black"; 
  if (value >= 70) return "#0088ff"; 
  if (value >= 40) return "#00ff00"; 
  return "red";               
};

  const handleDeleteTodo = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <section className="todo-main-section">
      <main className="dashboard-main">
        <div className="dashboard-card">
          <h3>
            <FaClipboardList className="todo-title-icon" />
            Add Daily Task
          </h3>

          <form onSubmit={handleAddTodo}>
            <input
              type="text"
              placeholder="Add a task..."
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
              className="todo-input"
              maxLength={250}
              required
            />
            <button type="submit" className="todo-add-btn">
              Add
            </button>
          </form>

          <ul className="todo-list">
            {todos.map((todo, idx) => (
              <li key={`${todo}-${idx}`} className="todo-item">
                <span className="todo-text">{todo}</span>
                <button
                  className="todo-delete-btn"
                  onClick={() => handleDeleteTodo(idx)}
                  title="Delete task"
                >
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>

          <p className="todo-counter">
            {todos.length}/{MAX_TASKS} tasks added
          </p>
        </div>
      </main>
      <div className="progress-container">
        <CircularProgressbar
          value={progressValue}
          text={`${progressValue}%`}
          styles={buildStyles({
            pathTransitionDuration: 0.6,
            pathColor: getProgressColor(progressValue),
            textColor: "#111",
            trailColor: "#e5e7eb",
          })}
        />
      </div>
    </section>
  );
};

export default TodoPage;
