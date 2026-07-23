import React, { useState, useEffect, useMemo } from "react";
import { LuTrash2, LuCheck, LuX, LuPlus, LuListTodo, LuInfo } from "react-icons/lu";
import toast from "react-hot-toast";
import "./TodoPage.css";

const MAX_TASKS = 10;

const TodoPage = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem("userTodos");
    if (!stored) return [];
    try {
      return JSON.parse(stored);
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("userTodos", JSON.stringify(todos));
  }, [todos]);

  const completedCount = useMemo(() => {
    return todos.filter((t) => t.completed).length;
  }, [todos]);

  useEffect(() => {
    if (completedCount === MAX_TASKS && todos.length === MAX_TASKS) {
      toast.success("Awesome! You’ve completed all your daily tasks. Great job!");
    }
  }, [completedCount, todos.length]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    const trimmed = todoText.trim();
    if (!trimmed) return;
    if (todos.length >= MAX_TASKS) {
      toast.error("You can only add up to 10 tasks.");
      return;
    }
    setTodos((prev) => [...prev, { text: trimmed, completed: false }]);
    setTodoText("");
  };

  const handleClearAll = () => {
    if (todos.length === 0) return;
    const confirmDelete = window.confirm("Are you sure you want to clear all tasks?");
    if (confirmDelete) {
      setTodos([]);
      toast.success("List cleared!");
    }
  };

  const handleCompleteTodo = (index) => {
    setTodos((prev) => prev.map((todo, i) => i === index ? { ...todo, completed: !todo.completed } : todo));
  };

  const handleDeleteTodo = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <section className="todo-main-section">
      <main className="dashboard-main">
        <div className="dashboard-card">
          <h3>
            <LuListTodo className="todo-title-icon" /> 
            Add Daily Task
          </h3>
          <p className="todo-subtitle">
            <LuInfo size={14} style={{ marginRight: '4px' }} />
            You can add up to {MAX_TASKS} tasks. Keep growing!
          </p>

          <form onSubmit={handleAddTodo} className="todo-form">
            <input
              type="text"
              placeholder="What needs to be done?"
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
              className="todo-input"
              maxLength={250}
              required
            />
            <button type="submit" className="todo-add-btn" aria-label="Add todo">
              <LuPlus size={24} />
            </button>
          </form>

          <ul className="todo-list">
            {todos.map((todo, idx) => (
              <li key={idx} className="todo-item">
                <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
                  {todo.text}
                </span>
                <div className="todo-actions">
                  <button
                    className={`todo-complete-btn ${todo.completed ? "btn-completed" : ""}`}
                    onClick={() => handleCompleteTodo(idx)}
                    title={todo.completed ? "Mark as Incomplete" : "Mark as Done"}
                  >
                    {todo.completed ? <LuX size={18} /> : <LuCheck size={18} />}
                  </button>

                  <button
                    className="todo-delete-btn"
                    onClick={() => handleDeleteTodo(idx)}
                    title="Delete Task"
                  >
                    <LuTrash2 size={18} />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="todo-footer">
            {todos.length > 0 && (
              <button onClick={handleClearAll} className="clear-all-btn" title="Clear All Tasks">
                <LuTrash2 size={18} /> 
              </button>
            )}
          </div>
        </div>
      </main>

      
    </section>
  );
};

export default TodoPage;