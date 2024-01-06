import React from "react";
import ReactDOM from "react-dom/client";

const reactElement = <span>My react element</span>;
const Title = () => <h1>My Title 🚀</h1>;
const Heading = () => (
  <div>
    <Title />
    <h1>Heading in functional component 🚀</h1>
    {reactElement}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />); // render method is responsible for converting the react element into dom elements.
