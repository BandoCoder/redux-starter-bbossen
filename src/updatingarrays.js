const numbers = [1, 2, 3];

//adding
const added = [...numbers, 4];

const index = numbers.indexOf(2);
const added2 = [...numbers.slice(0, index), 4, ...numbers.slice(index)];

console.log(added2);

//removing
const removed = numbers.filter((n) => n !== 2);

//Updating
const updated = numbers.map((n) => (n === 2 ? 20 : n));
//* if the number your replacing with is an array instead, you need to ...spread it
