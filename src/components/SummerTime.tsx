import React from "react";
import { DateTime } from "luxon";
import { connect } from "react-redux";
import { State } from "../reducers";
import { timeSelector, localTimeSelector } from "../selectors";
import { advance, set, setSpeed } from "../action-creators";
import Clock from "./Clock";

const begginingOfST = DateTime.utc(1948, 5, 1, 15);
const endOfST = DateTime.utc(1948, 9, 11, 14);

interface Props {
  time: DateTime;
  localTime: DateTime;
  advance: Function;
  set: Function;
  speed: Function;
}
const SummerTime = ({ time, localTime, advance, set, speed }: Props) => (
  <div>
    <section>
      <h2>UTC</h2>
      <div style={{ width: "200px" }}>
        <Clock datetime={time} />
      </div>
      <p>{time.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)}</p>
    </section>

    <section>
      <h2>Asia/Tokyo</h2>
      <p>{localTime.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)}</p>
      <div style={{ width: "200px" }}>
        <Clock datetime={localTime} />
      </div>
      <span>
        {((window as any).ut = time) &&
          ((window as any).lt = localTime) &&
          null}
      </span>
      <p>{localTime.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)}</p>
    </section>

    <section>
      <h2>夏時間開始</h2>
      <p>
        <button
          type="button"
          onClick={() => set(begginingOfST.minus({ seconds: 30 }))}
        >
          30秒前
        </button>
        <button type="button" onClick={() => set(begginingOfST)}>
          ちょうど
        </button>
      </p>
    </section>
    <section>
      <h2>夏時間終了</h2>
      <p>
        <button
          type="button"
          onClick={() => set(endOfST.minus({ seconds: 30 }))}
        >
          30秒前
        </button>
        <button type="button" onClick={() => set(endOfST)}>
          ちょうど
        </button>
      </p>
    </section>
    <p>
      <button type="button" onClick={() => speed(-10)}>
        ⏪
      </button>
      <button type="button" onClick={() => speed(-1)}>
        ◀️
      </button>
      <button type="button" onClick={() => speed(0)}>
        ⏸
      </button>
      <button type="button" onClick={() => speed(1)}>
        ▶️
      </button>
      <button type="button" onClick={() => speed(10)}>
        ⏩
      </button>
    </p>
    <p>
      <button type="button" onClick={() => advance(-1000)}>
        -1
      </button>
      <button type="button" onClick={() => advance(1000)}>
        +1
      </button>
    </p>
  </div>
);

const mapStateToProps = (state: State) => ({
  time: timeSelector(state),
  localTime: localTimeSelector(state)
});
const mapDispatchToProps = { advance, set, speed: setSpeed };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SummerTime);
