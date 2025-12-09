import React from 'react';

// Basic citation component for APA format
export const Citation = ({ id, text }) => {
  return (
    <span className="citation" style={{fontSize: '0.85em', color: '#666', marginLeft: '0.25em'}}>
      [{text}]
    </span>
  );
};

// Component for academic definitions
export const Definition = ({ term, children }) => {
  return (
    <div className="definition" style={{borderLeft: '3px solid #25c2a0', paddingLeft: '1em', margin: '1em 0', backgroundColor: '#f8f9fa', padding: '1em'}}>
      <strong>{term}:</strong> {children}
    </div>
  );
};

// Component for learning objectives
export const LearningObjectives = ({ children }) => {
  return (
    <div className="learning-objectives" style={{border: '1px solid #25c2a0', borderRadius: '4px', padding: '1em', margin: '1em 0', backgroundColor: '#e8f4f8'}}>
      <strong>Learning Objectives:</strong>
      <ul style={{marginTop: '0.5em'}}>{children}</ul>
    </div>
  );
};