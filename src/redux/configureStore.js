import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Technical } from "./technical";
import { Economical } from "./economical";
import { Sport } from "./sport";
import { Science } from "./science";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      economical: Economical,
      technical: Technical,
      sport: Sport,
      science: Science,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
