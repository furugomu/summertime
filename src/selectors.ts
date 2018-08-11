import { State } from "./reducers";
import { DateTime } from "luxon";
import { createSelector } from "reselect";

export const timeSelector = (state: State): DateTime => state.time;

// ミリ秒が半端だとオフセットが小数になっておかしくなる
// DateTime.fromMillis(-683801999999).setZone('Asia/Tokyo').offset
// => 599.9833333333333
export const localTimeSelector = createSelector(timeSelector, time =>
  time.set({ millisecond: 0 }).setZone("Asia/Tokyo")
);

export const speedSelector = (state: State): number => state.speed;
