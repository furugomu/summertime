import { DateTime } from "luxon";
import { combineReducers } from "redux";

export type TimeAction =
  | { type: "time/set"; payload: DateTime }
  | { type: "time/advance"; payload: number };
const initialState = DateTime.utc(1948, 5, 1, 15).minus({ seconds: 5 });
const time = (state: DateTime = initialState, action: TimeAction) => {
  switch (action.type) {
    case "time/set":
      return action.payload;
    case "time/advance":
      return state.plus({ milliseconds: action.payload });
    default:
      return state;
  }
};

export type SpeedAction = { type: "speed/set"; payload: number };
const speed = (state: number = 1, action: SpeedAction) => {
  switch (action.type) {
    case "speed/set":
      return action.payload;
    default:
      return state;
  }
};

export type Action = TimeAction | SpeedAction;

const rootReducer = combineReducers({ time, speed });
export default rootReducer;
export type State = ReturnType<typeof rootReducer>;
