import * as ActionTypes from "./actionTypes";

const initialState = { isLoading: true, errMess: null, articles: [] };

export const Science = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCHED_SCIENCE_ARTICLE:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        articles: action.payload,
      };

    case ActionTypes.SCIENCE_ARTICLE_LOADING:
      return { ...state, isLoading: true, errMess: null, articles: [] };

    case ActionTypes.SCIENCE_ARTICLE_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
