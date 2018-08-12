import React from "react";
import { DateTime } from "luxon";
import Clock from "../atoms/Clock";
import styled from "styled-components";

interface Props {
  datetime: DateTime;
  title: string;
}
const Time = ({ datetime, title }: Props) => (
  <section>
    <h2 style={{ textAlign: "center", fontSize: "1.1rem" }}>{title}</h2>
    <Figure>
      <Clock datetime={datetime} />
      <figcaption>
        {datetime.toLocaleString(DateTime.DATE_FULL)}
        <br />
        {datetime.toLocaleString(DateTime.TIME_24_WITH_SECONDS)}
        <br />
      </figcaption>
    </Figure>
  </section>
);
export default Time;

const Figure = styled.figure`
  margin: 0 1rem;
`;
