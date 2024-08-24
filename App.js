const span = document.createElement("span");
span.innerText = "First Span";

const paragraph = document.createElement("p");
paragraph.innerText = "First Paragraph";

const container = document.createElement("div");
container.setAttribute("class", "container");

container.append(paragraph, span);

const root = document.getElementById("root");
root.appendChild(container);
