import React from "react";
import { createStore } from "redux";

function Redux() {
  // Actions
  const increment = () => {
    return {
      type: "INCREMENT"
    };
  };

  const decrement = () => {
    return {
      type: "DECREMENT"
    };
  };

  // Reducer
  const counter = (state = 0, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
    }
  };

  // Store
  const store = createStore(
    counter,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(() => console.log(store.getState()));

  // Dipatcher
  store.dispatch(increment());
  store.dispatch(decrement());

  return <div></div>;
}

export default Redux;
