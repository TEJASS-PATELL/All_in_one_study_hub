import React from "react";

import { useEffect, useState } from "react";
import "./ProfilePage.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useRoadmapStore } from "../Store/useRoadmap";
import Loading from "../Layouts/Loading";

export default function Profile() {
    const {
    roadmapData,
    roadmapTitle,
    showForm,
    loading,
    fetchRoadmap,
    saveRoadmap,
    deleteRoadmap,
  } = useRoadmapStore();
  const [formData, setFormData] = useState({
    jobType: "",
    jobRoles: "",
    education: "",
    skills: "",
    status: "",
    notes: "",
    roadmapDuration: "",
  });

  useEffect(() => {
    fetchRoadmap();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveRoadmap(formData);
  };

  const handleDeleteRoadmap = async () => {
    deleteRoadmap();
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="profile-page-main">
      <header className="profile-page-header">
      </header>

      <section className="profile-page-content">
        {showForm ? (
          <div className="profile-page-card">
            <form className="profile-page-form" onSubmit={handleSubmit}>
              <div className="profile-form-group">
                <label>Job Type You're Preparing For:</label>
                <select
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleChange}
                  required>
                  <option value="">Select</option>
                  <option value="government">Government Job</option>
                  <option value="private">Private Job</option>
                  <option value="it">IT Job</option>
                </select>
              </div>
              <div className="profile-form-group">
                <label>Interested Job Roles:</label>
                <input
                  type="text"
                  name="jobRoles"
                  value={formData.jobRoles}
                  onChange={handleChange}
                  placeholder="e.g. Software Developer, Bank PO"
                  required
                />
              </div>
              <div className="profile-form-group">
                <label>Education Background:</label>
                <input
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  placeholder="e.g. B.Tech in CSE, B.Sc"
                  required
                />
              </div>
              <div className="profile-form-group">
                <label>Skills You Have:</label>
                <textarea
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="e.g. JavaScript, Typing, Reasoning, Excel"
                  required
                />
              </div>
              <div className="profile-form-group">
                <label>Current Preparation Status:</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="starting">Just Starting</option>
                  <option value="mid">In Progress</option>
                  <option value="almost">Almost Ready</option>
                  <option value="completed">Fully Prepared</option>
                </select>
              </div>
              <div className="profile-form-group">
                <label>Roadmap Duration:</label>
                <input
                  type="text"
                  name="roadmapDuration"
                  value={formData.roadmapDuration}
                  onChange={handleChange}
                  placeholder="e.g. 6 months, 1 year"
                  required
                />
              </div>
              <div className="profile-form-group">
                <label>Any Additional Notes:</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="e.g. I need mock test help, or interview tips"
                />
              </div>

              <button type="submit" className="profile-submit-button">
                Save Profile
              </button>
            </form>
          </div>
        ) : (
          <div className="roadmap-view">
            <div className="roadmap-header">
              <h1>{roadmapTitle}</h1>
              <div className="roadmap-header-icon">
                <FaEdit
                  className="edit-icon"
                  onClick={() => setShowForm(true)}
                  title="Edit Roadmap"
                  style={{ cursor: "pointer", color: "black" }}
                />
                <FaTrash
                  className="delete-icon"
                  onClick={handleDeleteRoadmap}
                  title="Delete Roadmap"
                  style={{ cursor: "pointer", color: "red", marginLeft: "10px" }}
                />
              </div>
            </div>

            <div className="timeline">
              {roadmapData.map((step, index) => (
                <div
                  key={index}
                  className={`timeline-step ${index % 2 === 0 ? "left" : "right"}`}>
                  <div
                    className={`timeline-content ${index % 2 === 0 ? "left" : "right"}`}>
                    <span className="step-number">Step {step.step}</span>
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>

                    <div className="step-extra">
                      <p>
                        <strong>Timeframe:</strong> {step.timeframe}
                      </p>
                      {step.notes && (
                        <p>
                          <strong>Notes:</strong> {step.notes}
                        </p>
                      )}
                      {step.tips && (
                        <p>
                          <strong>Tips:</strong> {step.tips}
                        </p>
                      )}
                      {step.importantPoints && (
                        <p>
                          <strong>Important Points:</strong> {step.importantPoints}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
