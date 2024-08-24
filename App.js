import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

const span = React.createElement("span", { key: "s1" }, "First Span");
const paragrpah = React.createElement("p", { key: "p1" }, "First Paragraph");
const container = React.createElement(
  "div",
  { className: "container", key: "d1" },
  [paragrpah, span]
);

const containerJSX = (
  <div key="d2">
    <p>Second Paragraph - JSX</p>
    <span>Second Span - JSX</span>
  </div>
);

const ContainerComponent = function () {
  return (
    <div key="d3">
      <p>Second Paragraph - component</p>
      <span>Second Span - component</span>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ContainerComponent></ContainerComponent>);
