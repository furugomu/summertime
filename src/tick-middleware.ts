import { Dispatch, MiddlewareAPI } from "redux";
import { speedSelector } from "./selectors";
import { Action } from "./reducers";

const tickMiddleware = (store: MiddlewareAPI) => (
  dispatch: Dispatch<Action>
) => {
  const tick = (t: number) => {
    const speed = speedSelector(store.getState());
    if (speed !== 0) {
      dispatch({ type: "time/advance", payload: t * speed });
    }
  };
  let last = Date.now();
  setInterval(() => {
    const now = Date.now();
    const diff = now - last;
    last = now;
    tick(diff);
  }, 66);
  return dispatch;
};

export default tickMiddleware;
