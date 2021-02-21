import * as ActionTypes from "./actionTypes";

const initialState = { isLoading: true, errMess: null, articles: [] };

export const Economical = (state = initialState, action) => {
  console.log("inside reducer", action.type);
  switch (action.type) {
    case ActionTypes.FETCHED_ECONOMICAL_ARTICLE:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        articles: action.payload,
      };

    case ActionTypes.ECONOMICAL_ARTICLE_LOADING:
      return { ...state, isLoading: true, errMess: null, articles: [] };

    case ActionTypes.ECONOMICAL_ARTICLE_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
