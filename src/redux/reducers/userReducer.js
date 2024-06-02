// src/redux/reducers/userReducer.js
import { FETCH_USER_COURSES, MARK_COURSE_COMPLETE } from '../types';

const initialState = {
  enrolledCourses: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_COURSES:
      return { ...state, enrolledCourses: action.payload };
    case MARK_COURSE_COMPLETE:
      return {
        ...state,
        enrolledCourses: state.enrolledCourses.map(course =>
          course.id === action.payload ? { ...course, progress: 100 } : course
        ),
      };
    default:
      return state;
  }
};

export default userReducer;
