import React, { useState, useEffect } from "react";
import { IoClose, IoTrashBin } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import { useAuthStore } from "../Store/useAuthStore";
import { useDiscussionStore } from "../Store/useDiscussion";
import "./Discussion.css";
import Loading from "../Layouts/Loading";
import toast from "react-hot-toast";

const categories = ["Government Job", "Private Job", "IT Job"];

const Discussion = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    name: "", location: "", qualification: "", examGiven: "", examCracked: "",
    jobRole: "", company: "", department: "", salaryPackage: "",
    advice: "", description: "", category: "",
  });

  const { authUser: user, fetchUser } = useAuthStore();
  const userId = user?.id;

  const {
    experiences,
    isFetching,
    fetchDiscussions,
    submitExperience,
    userHasPosted,
    userLikedDiscussions,
    likeDiscussion,
    deleteDiscussion,
  } = useDiscussionStore();

  useEffect(() => {
    if (!userId) fetchUser();
  }, [userId]);

  useEffect(() => {
    if (userId) fetchDiscussions(userId);
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      name: "", location: "", qualification: "", examGiven: "", examCracked: "",
      jobRole: "", company: "", department: "", salaryPackage: "",
      advice: "", description: "", category: "",
    });
  };

  const handleSubmit = () => {
    submitExperience(formData, user, () => {
      setOpen(false);
      resetForm();
    });
    toast.success("Thanks for helping others grow in their career journey!");
  };

  const filteredExperiences = experiences.filter((exp) => {
    const query = searchQuery.toLowerCase();
    return [
      exp.location, exp.examGiven, exp.examCracked,
      exp.company, exp.jobRole, exp.category
    ].some((field) => field?.toLowerCase().includes(query));
  });

  if (isFetching) return <Loading/>;

  return (
    <div className="discussion-container">
      <h1 className="discussion-title">Share Your Job/Exam Experience</h1>
      <p className="discussion-description">
        Help others by sharing your real-life job interviews or exam experiences.
        Your story could guide someone on the same path!
      </p>

      <input
        type="text"
        placeholder="Search by name, company, exam, etc."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="discussion-search-input"
      />

      {!userHasPosted ? (
        <button onClick={() => setOpen(true)} className="discussion-button">
          + Share Experience
        </button>
      ) : (
        <p className="discussion-status">
          You have already posted your experience.
        </p>
      )}

      {open && (
        <div className="discussion-popup">
          <div className="discussion-popup-content">
            <div className="discussion-popup-header">
              <h2>Share Your Experience with other's</h2>
              <button onClick={() => setOpen(false)} className="discussion-close-button">
                <IoClose size={24} />
              </button>
            </div>

            <div className="form-grid">
              {["name", "location", "qualification", "examGiven", "examCracked",
                "jobRole", "company", "department", "salaryPackage", "advice"
              ].map((field) => (
                <input
                  key={field}
                  name={field}
                  placeholder={field.replace(/([A-Z])/g, " $1").trim()}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="discussion-input"
                />
              ))}
            </div>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="discussion-select"
            >
              <option value="">Choose Category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            <textarea
              name="description"
              placeholder="Your Experience Description"
              required
              value={formData.description}
              onChange={handleChange}
              className="discussion-textarea"
            />

            <button onClick={handleSubmit} className="discussion-submit">
              Submit
            </button>
          </div>
        </div>
      )}

      <div className="discussion-list">
        {filteredExperiences.map((exp) => (
          <div key={exp.id} className="discussion-card">
            <div className="discussion-card-header">
              <h2>{exp.name}</h2>
              <span><strong>Current Location - </strong>{exp.location}</span>
            </div>

            <div className="discussion-details-grid">
              <div><strong>Category:</strong> {exp.category}</div>
              <div><strong>Qualification:</strong> {exp.qualification}</div>
              <div><strong>Exam Given:</strong> {exp.examGiven}</div>
              <div><strong>Exam Cracked:</strong> {exp.examCracked}</div>
              <div><strong>Job Role:</strong> {exp.jobRole || "N/A"}</div>
              <div><strong>Company:</strong> {exp.company || "N/A"}</div>
              <div><strong>Department:</strong> {exp.department || "N/A"}</div>
              <div><strong>Package:</strong> {exp.salaryPackage || "N/A"}</div>
              <div><strong>Email:</strong> {exp.email || "N/A"}</div>
              <div>
                <strong>Posted At:</strong> {new Date(exp.createdAt).toLocaleDateString("en-IN", {
                  day: "numeric", month: "short", year: "numeric"
                })}
              </div>
            </div>

            <div className="discussion-card-text">
              <p><strong>Advice:</strong> {exp.advice}</p>
              <p><strong>Description:</strong> {exp.description}</p>
            </div>

            <div className="like-section">
              <button
                className="like-button"
                onClick={() => likeDiscussion(exp.id, userId)}
                disabled={userLikedDiscussions.has(exp.id)}
              >
                <AiFillHeart style={{ color: "red"}} />
                {userLikedDiscussions.has(exp.id) ? "Liked" : "Like"} ({exp.likesCount || 0})
              </button>

              {exp.userId === userId && (
                <button className="delete-button" onClick={() => deleteDiscussion(exp.id, userId)}>
                  <IoTrashBin className="icon" /> Delete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discussion;