import React from "react";
import ReactDOM from "react-dom/client";

//Create following structure using react
/*
<div id="parent">
<div id="child">
    <h1>I'm h1 tag</h1>
    <h2>I'm h1 tag</h2>
</div>
<div id="child2">
    <h1>I'm h1 tag</h1>
    <h2>I'm h2 tag</h2>
</div>
</div>
*/

const headings = [
  React.createElement("h1", {}, "I am h1 tag"),
  React.createElement("h2", {}, "I am h2 tag"),
];
const childDivs = [
  React.createElement("div", { id: "child" }, headings),
  React.createElement("div", { id: "child2" }, headings),
];
const parent = React.createElement("div", { id: "parent" }, childDivs);
console.log(parent); // react element is js object.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // render method is responsible for converting the react element into dom elements.
