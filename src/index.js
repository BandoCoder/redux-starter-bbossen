import { compose, pipe } from "lodash/fp";

// Higher order functions either take a function as an argument or returns a function.

let input = "  Javascript  ";

let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrap("span"));
console.log(transform(input));

// trim
//wrapInDiv

const person = {
  name: "john",
  address: {
    country: "USA",
    city: "San Francisco",
  },
};
const updated = {
  ...person,
  address: {
    ...person.address,
    city: "New York",
  },
  name: "Bob",
};

console.log(person);
