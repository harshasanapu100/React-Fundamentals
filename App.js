const span = React.createElement("span", { key: "s1" }, "First Span");
const paragrpah = React.createElement("p", { key: "p1" }, "First Paragraph");
const container = React.createElement("div", { className: "container" }, [
  paragrpah,
  span,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
