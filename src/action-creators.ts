import { TimeAction, SpeedAction } from "./reducers";
import { DateTime } from "luxon";

export const advance = (t: number): TimeAction => ({
  type: "time/advance",
  payload: t
});

export const set = (datetime: DateTime): TimeAction => ({
  type: "time/set",
  payload: datetime
});

export const setSpeed = (speed: number): SpeedAction => ({
  type: "speed/set",
  payload: speed
});
