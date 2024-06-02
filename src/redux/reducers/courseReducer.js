// src/redux/reducers/courseReducer.js
import { FETCH_COURSES, FETCH_COURSE_DETAILS } from '../types';

const initialState = {
  courses: [],
  courseDetails: null,
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES:
      return { ...state, courses: action.payload };
    case FETCH_COURSE_DETAILS:
      return { ...state, courseDetails: action.payload };
    default:
      return state;
  }
};

export default courseReducer;
