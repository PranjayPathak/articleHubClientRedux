import * as ActionTypes from "./actionTypes";

const initialState = { isLoading: true, errMess: null, articles: [] };

export const Technical = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCHED_TECHNICAL_ARTICLE:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        articles: action.payload,
      };

    case ActionTypes.TECHNICAL_ARTICLE_LOADING:
      return { ...state, isLoading: true, errMess: null, articles: [] };

    case ActionTypes.TECHNICAL_ARTICLE_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
