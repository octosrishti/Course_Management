// src/redux/actions/userActions.js
import { FETCH_USER_COURSES, MARK_COURSE_COMPLETE } from '../types';
import { getUserEnrolledCourses } from '../../api';

export const fetchUserCourses = () => dispatch => {
  const userCourses = getUserEnrolledCourses();
  dispatch({ type: FETCH_USER_COURSES, payload: userCourses });
};

export const markCourseComplete = (id) => dispatch => {
  dispatch({ type: MARK_COURSE_COMPLETE, payload: id });
};
