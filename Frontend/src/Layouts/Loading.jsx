import React from 'react';
import './Loading.css'; 

export default function Loading() {
  return (
    <div className="spinner-container" aria-label="Content is loading">
      <div className="loading-spinner"></div>
    </div>
  );
}
