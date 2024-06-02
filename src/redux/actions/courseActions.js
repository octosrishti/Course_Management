// src/redux/actions/courseActions.js
import { FETCH_COURSES, FETCH_COURSE_DETAILS } from '../types';
import { getCourses } from '../../api';

export const fetchCourses = () => dispatch => {
  const courses = getCourses();
  dispatch({ type: FETCH_COURSES, payload: courses });
};

export const fetchCourseDetails = (id) => dispatch => {
  const course = getCourses().find(course => course.id === id);
  dispatch({ type: FETCH_COURSE_DETAILS, payload: course });
};
