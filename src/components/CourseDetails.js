// src/components/CourseDetails.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseDetails } from '../redux/actions/courseActions';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const course = useSelector(state => state.courses.courseDetails);

  useEffect(() => {
    dispatch(fetchCourseDetails(Number(id)));
  }, [dispatch, id]);

  if (!course) return <div>Loading...</div>;

  return (
    <div className="course-details">
      <h1>{course.name}</h1>
      <h2>Instructor: {course.instructor}</h2>
      <p>{course.description}</p>
      <p>Status: {course.enrollmentStatus}</p>
      <p>Duration: {course.duration}</p>
      <p>Schedule: {course.schedule}</p>
      <p>Location: {course.location}</p>
      <p>Prerequisites: {course.prerequisites.join(', ')}</p>
      <h3>Syllabus</h3>
      <ul>
        {course.syllabus.map((week, index) => (
          <li key={index}>
            <strong>Week {week.week}: </strong>
            {week.topic}
            <p>{week.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;
