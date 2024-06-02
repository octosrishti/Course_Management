// src/components/StudentDashboard.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserCourses, markCourseComplete } from '../redux/actions/userActions';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector(state => state.user.enrolledCourses);

  useEffect(() => {
    dispatch(fetchUserCourses());
  }, [dispatch]);

  const handleComplete = (id) => {
    dispatch(markCourseComplete(id));
  };

  return (
    <div className="student-dashboard">
      <h1>My Courses</h1>
      {enrolledCourses.map(course => (
        <div key={course.id} className="dashboard-course">
          <img src={course.thumbnail} alt={course.name} />
          <div>
            <h3>{course.name}</h3>
            <p>Instructor: {course.instructor}</p>
            <p>Due Date: {course.dueDate}</p>
            <progress value={course.progress} max="100"></progress>
            <button onClick={() => handleComplete(course.id)}>Mark as Complete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentDashboard;
