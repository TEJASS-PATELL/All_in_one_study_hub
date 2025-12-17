import { useState, useEffect, useMemo } from "react";
import { FaTrash, FaClipboardList, FaCheckCircle, FaRegCheckCircle, FaCheckDouble, FaCheck, FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
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

  useEffect(() => { localStorage.setItem("userTodos", JSON.stringify(todos)) }, [todos]);

  const progressValue = useMemo(() => {
    if (todos.length === 0) return 0;
    const completedCount = todos.filter(t => t.completed).length;
    return Math.round((completedCount / MAX_TASKS) * 100);
  }, [todos]);

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

    setTodos(prev => [...prev, { text: trimmed, completed: false }]);
    setTodoText("");
  };

  const handleCompleteTodo = (index) => {
    setTodos(prev =>
      prev.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (index) => {
    setTodos(prev => prev.filter((_, i) => i !== index));
  };

  const getProgressColor = (value) => {
    if (value === 100){
      toast.success("Awesome! You’ve completed all your daily tasks. Great job!");
      return "black";
    }
    if (value >= 70) return "#0088ff";
    if (value >= 40) return "#00ff00";
    return "red";
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
              <li key={`${todo.text}-${idx}`} className="todo-item">
                <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
                  {todo.text}
                </span>

                <button className="todo-complete-btn" onClick={() => handleCompleteTodo(idx)} title={todo.completed ? "Completed" : "Mark as completed"}>
                  {todo.completed ? <FaTimes size={16} /> : <FaCheck size={16} />}
                </button>

                <button className="todo-delete-btn" onClick={() => handleDeleteTodo(idx)} title="Delete task">
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>

          <p className="todo-counter">
            {todos.filter(t => t.completed).length}/{MAX_TASKS} tasks completed
          </p>
        </div>
      </main>

      <div className="progress-container">
        <CircularProgressbar
          value={progressValue}
          text={`${progressValue}%`}
          styles={buildStyles({
            pathTransitionDuration: 0.6,
            pathTransition: "ease-in-out",
            pathColor: getProgressColor(progressValue),
            textColor: "#111827",
            trailColor: "#e5e7eb",
          })}
        />
      </div>
    </section>
  );
};

export default TodoPage;
