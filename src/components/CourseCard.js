// src/components/CourseCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <img src={course.thumbnail} alt={course.name} />
      <h3>{course.name}</h3>
      <p>{course.instructor}</p>
      <Link to={`/courses/${course.id}`}>View Details</Link>
    </div>
  );
};

export default CourseCard;
