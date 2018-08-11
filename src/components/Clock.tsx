import React from "react";
import { DateTime } from "luxon";

interface Props {
  datetime: DateTime;
}
const Clock = ({ datetime = DateTime.local() }: Props) => (
  <svg viewBox="0 0 256 256">
    <circle
      cx="128"
      cy="128"
      r="112"
      fill="white"
      strokeWidth="4"
      stroke="black"
    />
    <line
      x1="128"
      y1="128"
      x2="128"
      y2="48"
      strokeWidth="8"
      stroke="black"
      transform={`rotate(${hourDeg(datetime)} 128 128)`}
    />
    <line
      x1="128"
      y1="128"
      x2="128"
      y2="32"
      strokeWidth="6"
      stroke="black"
      transform={`rotate(${minuteDeg(datetime)} 128 128)`}
    />
    <line
      x1="128"
      y1="128"
      x2="128"
      y2="32"
      strokeWidth="2"
      stroke="red"
      transform={`rotate(${secondDeg(datetime)} 128 128)`}
    />
    <text>
      {datetime.second}.{datetime.millisecond}
    </text>
  </svg>
);

export default Clock;

const secondDeg = (dt: DateTime) => dt.second * 6; // 6 = 360/60
const minute = (dt: DateTime) => dt.minute;
const minuteDeg = (dt: DateTime) => minute(dt) * 6; // 6 = 360/60
const hour = (dt: DateTime) => dt.hour + minute(dt) / 60;
const hourDeg = (dt: DateTime) => hour(dt) * 30; // 30 = 360/12
