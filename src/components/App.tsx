import React from "react";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import { Provider } from "react-redux";
import SummerTime from "./SummerTime";
import tickMiddleware from "../tick-middleware";

import { DateTime } from "luxon";

(window as any).DateTime = DateTime;

const App = () => {
  const store = createStore(rootReducer, applyMiddleware(tickMiddleware));
  return (
    <Provider store={store}>
      <SummerTime />
    </Provider>
  );
};

export default App;
