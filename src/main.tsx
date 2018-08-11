import React from "react";
import { render } from "react-dom";
import App from "./components/App";

const main = () => {
  render(<App />, document.querySelector("main"));
};
document.addEventListener("DOMContentLoaded", main);
