import { useState, useEffect, useMemo, useCallback } from "react";
import { FaTrash, FaClipboardList, FaCheck, FaTimes, FaPlus } from "react-icons/fa";
import toast from "react-hot-toast";
import "./TodoPage.css";
import Calender from "../../Components/Calender";
import ProgressBar from "../../Components/ProgressBar";
import { useCelebration } from "../../hooks/useCelebration";

const MAX_TASKS = 10;

const TodoPage = () => {
  const [todoText, setTodoText] = useState("");
  const { triggerCelebration } = useCelebration();
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

  const progressValue = useMemo(() => {
    if (todos.length === 0) return 0;
    const completedCount = todos.filter((t) => t.completed).length;
    return Math.round((completedCount / MAX_TASKS) * 100);
  }, [todos]);

  useEffect(() => {
    if (progressValue === 100 && todos.length > 0) {
      triggerCelebration();
      toast.success("Awesome! You’ve completed all your daily tasks. Great job!", {
        id: "complete-toast",
        icon: "🎉",
        duration: 5000,
      });
    }
  }, [progressValue, todos.length, triggerCelebration]);

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

  const handleCompleteTodo = (index) => {
    setTodos((prev) =>
      prev.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  const getProgressColor = useCallback((value) => {
    if (value === 100) return "#000000";
    if (value >= 70) return "#0088ff";
    if (value >= 40) return "#2fff00";
    return "red";
  }, []);

  return (
    <section className="todo-main-section">
      <main className="dashboard-main">
        <div className="dashboard-card">
          <h3>
            <FaClipboardList className="todo-title-icon" />
            Add Daily Task
          </h3>
          <p>You can add up to {MAX_TASKS} tasks. Keep growing!</p>

          <form onSubmit={handleAddTodo} className="todo-form">
            <input
              type="text"
              placeholder="Add a task..."
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
              className="todo-input"
              maxLength={250}
              required
            />
            <button type="submit" className="todo-add-btn" aria-label="Add todo">
              <FaPlus />
            </button>
          </form>

          <ul className="todo-list">
            {todos.length === 0 ? (
              <p className="empty-msg">No tasks yet. Start your day now!</p>
            ) : (
              todos.map((todo, idx) => (
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
                      {todo.completed ? <FaTimes size={14} /> : <FaCheck size={14} />}
                    </button>
                    <button
                      className="todo-delete-btn"
                      onClick={() => handleDeleteTodo(idx)}
                      title="Delete Task"
                    >
                      <FaTrash size={14} />
                    </button>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </main>

      <div className="progress-container">
        <Calender />
        <div className="progress-fixed">
          <ProgressBar value={progressValue} getColor={getProgressColor} />
          <p className="todo-counter">
            {todos.filter((t) => t.completed).length} / {MAX_TASKS} Completed
          </p>
        </div>
      </div>
    </section>
  );
};

export default TodoPage;