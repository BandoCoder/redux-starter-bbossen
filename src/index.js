import { compose, pipe } from "lodash/fp";

function sayHello() {
  return function () {
    return "Hello World ";
  };
}

// Higher order functions either take a function as an argument or returns a function.

let input = "  Javascript  ";

let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input)));
// trim
//wrapInDiv
