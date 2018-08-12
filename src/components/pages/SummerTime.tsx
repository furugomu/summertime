import React from "react";
import { DateTime } from "luxon";
import { connect } from "react-redux";
import { State } from "../../reducers";
import { timeSelector, localTimeSelector } from "../../selectors";
import { advance, set, setSpeed } from "../../action-creators";
import Time from "../molecules/Time";
import Button from "../atoms/Button";

const begginingOfST = DateTime.utc(1948, 5, 1, 15);
const endOfST = DateTime.utc(1948, 9, 11, 14);

interface Props {
  time: DateTime;
  localTime: DateTime;
  futureTime: DateTime;
  advance: Function;
  set: Function;
  speed: Function;
}
const SummerTime = ({ time, localTime, advance, set, speed }: Props) => (
  <div style={{ maxWidth: "640px", margin: "auto" }}>
    <h1>サマータイム体験コーナー</h1>
    <p>
      1948年から数年間、日本でもサマータイムを導入していたことがありました。
      ここではその時の時間の経過を体験できます。
      1時間すっとんだり、23時が2度来る様子を楽しみましょう。
    </p>

    <div style={{ display: "flex" }}>
      <div style={{ flex: "1" }}>
        <Time title="日本 (Asia/Tokyo)" datetime={localTime} />
      </div>
      <div style={{ flex: "1" }}>
        <Time title="協定世界時 (UTC)" datetime={time} />
      </div>
    </div>

    <section>
      <h2>夏時間が切り替わる時刻に移動</h2>
      <p>
        <Button
          type="button"
          onClick={() => set(begginingOfST.minus({ seconds: 30 }))}
        >
          開始30秒前
        </Button>{" "}
        <Button type="button" onClick={() => set(begginingOfST)}>
          開始ちょうど
        </Button>
      </p>
      <p>
        <Button
          type="button"
          onClick={() => set(endOfST.minus({ seconds: 30 }))}
        >
          終了30秒前
        </Button>{" "}
        <Button type="button" onClick={() => set(endOfST)}>
          終了ちょうど
        </Button>
      </p>
    </section>
    <section>
      <h2>時間の進み方を変える</h2>
      <p>
        <Button type="button" onClick={() => speed(0)}>
          ⏸
        </Button>{" "}
        <Button type="button" onClick={() => speed(1)}>
          ▶️
        </Button>{" "}
        <Button type="button" onClick={() => speed(10)}>
          ⏩
        </Button>
      </p>
      <p>
        <Button type="button" onClick={() => advance(-1000)}>
          -1 秒
        </Button>{" "}
        <Button type="button" onClick={() => advance(1000)}>
          +1 秒
        </Button>
      </p>
    </section>
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
